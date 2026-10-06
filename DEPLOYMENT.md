# LifeHarmony – Deployment Guide

## Quick Start

### Development
```bash
npm run dev
# Open http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

## Deployment Options

### 1. Vercel (Recommended)
Easiest deployment for Next.js:

```bash
npm install -g vercel
vercel
```

Or connect GitHub repository to Vercel dashboard for automatic deployments.

**Benefits**:
- Automatic deployments on push
- Free SSL/HTTPS
- CDN globally distributed
- Serverless functions support
- Analytics included

### 2. Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY .next ./
COPY public ./public
EXPOSE 3000
CMD ["npm", "start"]
```

### 3. Traditional Server (Linux/Ubuntu)

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone <repository-url>
cd lifeharmony

# Install dependencies
npm install

# Build
npm run build

# Use PM2 for process management
npm install -g pm2
pm2 start npm --name "lifeharmony" -- start
pm2 startup
pm2 save
```

### 4. Using Nginx as Reverse Proxy

```nginx
upstream lifeharmony {
  server localhost:3000;
}

server {
  listen 80;
  server_name lifeharmony.fi www.lifeharmony.fi;
  
  location / {
    proxy_pass http://lifeharmony;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

## Environment Variables

No required environment variables for basic deployment.

Optional for future features:
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://lifeharmony.fi
ANALYTICS_ID=your-analytics-id
```

## Performance Optimization

### Already Included
- ✅ Image optimization (Next.js Image component ready)
- ✅ Code splitting by route
- ✅ CSS minification
- ✅ JavaScript minification
- ✅ Font optimization
- ✅ Video streaming from CDN

### Recommended Additions
1. **Enable Compression** (Nginx/Apache)
2. **Set Cache Headers** for static assets
3. **Use CDN** for images and videos
4. **Monitor Performance** with Web Vitals

## Security Checklist

- ✅ HTTPS/SSL enabled
- ✅ No sensitive data in code
- ✅ Input validation (forms)
- ✅ CSRF protection (built-in with Next.js)
- ✅ Security headers (add via next.config.ts)

### Add Security Headers
```typescript
// next.config.ts
export default {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ]
  }
}
```

## Monitoring

### Recommended Services
- **Uptime Monitoring**: UptimeRobot (free)
- **Error Tracking**: Sentry (free tier available)
- **Analytics**: Vercel Analytics or Google Analytics
- **Performance**: Web Vitals, Lighthouse

### Health Check
Add to monitoring:
```
GET /api/health
```

## Backups

- Code: Version control on GitHub
- Database: N/A (static site)
- Content: Managed via Git commits
- User data: localStorage (client-side only)

## Domain Setup

### DNS Configuration
```
Type  | Name              | Value
------|-------------------|--------
A     | lifeharmony.fi    | YOUR_SERVER_IP
CNAME | www.lifeharmony.fi| lifeharmony.fi
MX    | lifeharmony.fi    | mail.provider.com
TXT   | lifeharmony.fi    | v=spf1 ... (SPF record)
```

### SSL Certificate
- **Vercel**: Automatic (free Let's Encrypt)
- **Custom Server**: Use Certbot with Let's Encrypt
  ```bash
  sudo certbot certonly --nginx -d lifeharmony.fi -d www.lifeharmony.fi
  ```

## Maintenance

### Regular Tasks
- [ ] Monitor error logs
- [ ] Update dependencies monthly (`npm update`)
- [ ] Security patches (npm audit fix)
- [ ] Performance monitoring
- [ ] Backup verification

### Update Process
```bash
# Check outdated packages
npm outdated

# Update dependencies
npm update

# Test locally
npm run dev
npm run build

# Deploy
git push origin main
```

## Troubleshooting

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### High Memory Usage
- Increase Node memory: `NODE_OPTIONS=--max-old-space-size=2048`
- Split bundle analysis: `npm run build -- --analyze`

### Slow Performance
- Check image sizes
- Monitor API response times
- Use Lighthouse for recommendations
- Enable compression (gzip)

## Rollback

If something breaks:

```bash
# With Git
git revert <commit-hash>
git push origin main

# Vercel auto-reverts previous deployment
```

## Analytics & Monitoring

### Recommended Setup

1. **Google Analytics**
   - Add to `layout.tsx`
   - Track language preferences
   - Monitor user flows

2. **Sentry** (Error Tracking)
   - Automatically captures errors
   - Free tier for small projects

3. **Vercel Analytics**
   - Built-in Web Vitals
   - Real User Monitoring

## Success Metrics

Monitor these metrics:
- Page load time < 3 seconds
- Core Web Vitals (Largest Contentful Paint)
- Error rate < 1%
- Uptime > 99.9%
- Language switcher usage

---

**Ready to deploy! Choose your platform and follow the instructions above.**
