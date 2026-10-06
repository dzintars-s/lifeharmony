const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, 'public', 'logo.svg');
const pngPath = path.join(__dirname, 'public', 'logo.png');

sharp(svgPath)
  .resize(512, 512, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  })
  .png()
  .toFile(pngPath, (err, info) => {
    if (err) {
      console.error('Error converting logo:', err);
      process.exit(1);
    }
    console.log('Logo converted successfully:', info);
    process.exit(0);
  });
