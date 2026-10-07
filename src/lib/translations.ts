export type Language = 'fi' | 'en' | 'ru';

export const translations = {
  fi: {
    // Navigation
    nav: {
      home: 'Etusivu',
      about: 'Meistä',
      services: 'Hieronta',
      pricing: 'Hinnasto',
      giftcards: 'Lahjakortit',
      contact: 'Yhteystiedot',
      bookNow: 'VARAA AIKA',
    },
    // Hero
    hero: {
      title: 'LifeHarmony',
      tagline: 'Hierontaa keholle ja mielelle',
      subtitle: 'Rentoutumista. Hyvinvointia.',
      cta: 'VARAA AIKA',
      ctaWhatsapp: 'OTA YHTEYTTÄ WHATSAPPISSA',
      location: 'Pori · Isolinnankatu 22 B',
    },
    // About
    about: {
      title: 'Raivis – Ammattilainen hieronnan palvelussa',
      description: [
        'Raivis on kokenut hierontatherapeuti, jonka ammattitaito ja intohimo hyvinvoinnin edistämiseen ovat LifeHarmonyn sydän. Vuosien kokemuksella hän on auttanut satoja asiakkaita löytämään rentoutumisen ja fyysisen hyvinvoinnin.',
        'Raivisin ammattitaito yhdistää perinteisten hierontateknikoiden syvän tuntemuksen moderniin holistiseen lähestymistapaan. Jokainen käynti on yksilöllisesti räätälöity vastaamaan asiakkaan erityistarpeisiin – olipa kyse lihaskireyksistä, stressistä tai ylipäätään hetken omasta hyvinvointihetkestä.',
        'Rauhallisessa ympäristössä, rentouttavan musiikin säestyksellä ja ammattilaisen käsillä jokainen hierontasessio muuttuu uudelleen herätyksen hetkeksi. Raivisin tavoitteena on antaa sinulle ei pelkästään kehollista lievitystä, vaan kokonaisvaltaista hyvinvointikokemusta.',
      ],
      quote: 'Sinun hyvinvointisi on minulle tärkeää.',
    },
    // Features
    features: {
      title: 'Miksi LifeHarmony?',
      items: [
        { title: 'Rauhallinen ympäristö', description: 'Hetki pois kiireestä ja arjesta.' },
        { title: 'Henkilökohtainen palvelu', description: 'Hieronta mukautetaan asiakkaan tarpeisiin.' },
        { title: 'Rentouttava tunnelma', description: 'Rauhallinen musiikki ja lämmin ympäristö auttavat irrottautumaan arjesta.' },
        { title: 'Kokonaisvaltainen hyvinvointi', description: 'Tavoitteena on kehon ja mielen tasapainoinen hyvinvointi.' },
        { title: 'Aikaa itselle', description: 'Joskus tärkeintä on yksinkertaisesti pysähtyä.' },
      ],
    },
    // Pricing
    pricing: {
      title: 'Hinnasto',
      sessions: {
        '30': '30 min',
        '45': '45 min',
        '60': '60 min',
        '90': '90 min',
        '120': '120 min',
      },
      descriptions: {
        '30': 'Lyhyt rentoutushieronta',
        '45': 'Keskimittainen hieronta',
        '60': 'Täysimittainen hieronta',
        '90': 'Pitkä hierontahetki',
        '120': 'Luksus hierontakokemus',
      },
      book: 'Varaa aika',
      packages: 'Sarjakortit',
      packageDesc: 'Sarjakortti helpottaa säännöllisiä hyvinvointikäyntejä. Edullisempi vaihtoehto säännölliseen itsestä huolehtimiseen.',
      savings: 'Säästä',
      askPackages: 'Kysy sarjakorteista',
    },
    // Gift Cards
    giftcards: {
      title: 'Anna hyvinvointia lahjaksi',
      subtitle: 'Lahjakortti LifeHarmonyn hierontaan on lahja, joka antaa aikaa itselle.',
      cta: 'KYSY LAHJAKORTISTA WHATSAPPISSA',
      occasions: ['Syntymäpäivät', 'Joululomat', 'Vuosipäivät', 'Äitienpäivä', 'Isänpäivä', 'Kiitoslahja', 'Yllätys'],
      cardLabel: 'Lahjakortti',
    },
    // First Visit
    firstVisit: {
      label: 'Ensimmäisen käynnin etu',
      title: 'Anna aikaa itsellesi.',
      discount: '−10 €',
      subtitle: 'Ensimmäisestä käynnistä -10 €',
      cta: 'VARAA AIKA',
    },
    // Experience
    experience: {
      title: 'Hetki vain sinulle',
      subtitle: 'Sulje hetkeksi muu maailma ulkopuolelle.',
    },
    // Testimonials
    testimonials: {
      title: 'Asiakkaiden kokemuksia',
      viewAll: 'Katso kaikki arvostelut',
      rating: '5.0 / 5',
      source: 'Google',
    },
    // Contact
    contact: {
      title: 'Varaa oma hyvinvointihetkesi',
      subtitle: 'Haluatko rentoutua, palautua ja antaa aikaa itsellesi? Ota yhteyttä ja varaa aikasi.',
      address: 'Osoite',
      phone: 'Puhelin',
      whatsapp: 'WhatsApp',
      facebook: 'Facebook',
      bookCta: 'VARAA AIKA',
      callCta: 'SOITA',
      addressValue: 'Isolinnankatu 22 B, 2. kerros, huone 212, 28100 Pori',
      whatsappValue: 'Varaa aika WhatsAppissa',
      facebookValue: 'LifeHarmony Facebookissa',
      email: 'Sähköposti',
      emailValue: 'lifeharmonyrk@gmail.com'
    },
    // Map
    map: {
      title: 'Löydä meidät',
      subtitle: 'LifeHarmony sijaitsee keskellä Porin keskustaa.',
      floor: '2. kerros · Huone 212',
      cta: 'Avaa Google Mapsissa',
    },
    // Payment
    payment: {
      title: 'Hyväksymme maksutavat',
    },
    // Footer
    footer: {
      tagline: 'Hierontaa keholle ja mielelle',
      quote: 'Hyvinvointisi on meille tärkeää.',
      contact: 'Yhteystiedot',
      links: 'Linkit',
      allRights: 'Kaikki oikeudet pidätetään.',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Massage',
      pricing: 'Pricing',
      giftcards: 'Gift Cards',
      contact: 'Contact',
      bookNow: 'BOOK NOW',
    },
    // Hero
    hero: {
      title: 'LifeHarmony',
      tagline: 'Massage for body and mind',
      subtitle: 'Relaxation. Wellness.',
      cta: 'BOOK NOW',
      ctaWhatsapp: 'CONTACT VIA WHATSAPP',
      location: 'Pori · Isolinnankatu 22 B',
    },
    // About
    about: {
      title: 'Raivis – Professional in massage therapy',
      description: [
        'Raivis is an experienced massage therapist whose expertise and passion for wellness are at the heart of LifeHarmony. With years of experience, he has helped hundreds of clients find relaxation and physical well-being.',
        'Raivis\'s skills combine deep knowledge of traditional massage techniques with a modern holistic approach. Every session is individually tailored to meet your specific needs – whether it\'s muscle tension, stress relief, or simply a moment of personal wellness.',
        'In a peaceful environment, with soothing music and professional hands, each massage session becomes a moment of renewal. Raivis\'s goal is to give you not just physical relief, but a complete wellness experience.',
      ],
      quote: 'Your well-being matters to me.',
    },
    // Features
    features: {
      title: 'Why LifeHarmony?',
      items: [
        { title: 'Peaceful environment', description: 'A moment away from the hustle of everyday life.' },
        { title: 'Personalized service', description: 'Massage tailored to your individual needs.' },
        { title: 'Relaxing atmosphere', description: 'Calm music and warm surroundings help you unwind.' },
        { title: 'Holistic wellness', description: 'Focused on balanced well-being of body and mind.' },
        { title: 'Time for yourself', description: 'Sometimes the most important thing is simply to pause.' },
      ],
    },
    // Pricing
    pricing: {
      title: 'Pricing',
      sessions: {
        '30': '30 min',
        '45': '45 min',
        '60': '60 min',
        '90': '90 min',
        '120': '120 min',
      },
      descriptions: {
        '30': 'Quick relaxation massage',
        '45': 'Medium-length massage',
        '60': 'Full-length massage',
        '90': 'Extended wellness session',
        '120': 'Luxury massage experience',
      },
      book: 'Book now',
      packages: 'Package Cards',
      packageDesc: 'Package cards make regular wellness visits easier. A more affordable option for consistent self-care.',
      savings: 'Save',
      askPackages: 'Ask about packages',
    },
    // Gift Cards
    giftcards: {
      title: 'Give wellness as a gift',
      subtitle: 'A gift card for LifeHarmony massage is a gift that gives time for yourself.',
      cta: 'ASK ABOUT GIFT CARDS VIA WHATSAPP',
      occasions: ['Birthdays', 'Christmas', 'Anniversaries', "Mother's Day", "Father's Day", 'Thank you', 'Surprise'],
      cardLabel: 'Gift Card',
    },
    // First Visit
    firstVisit: {
      label: 'First visit offer',
      title: 'Give time to yourself.',
      discount: '−10 €',
      subtitle: '-10 € on your first visit',
      cta: 'BOOK NOW',
    },
    // Experience
    experience: {
      title: 'A moment just for you',
      subtitle: 'Close the rest of the world out for a moment.',
    },
    // Testimonials
    testimonials: {
      title: 'Customer experiences',
      viewAll: 'See all reviews',
      rating: '5.0 / 5',
      source: 'Google',
    },
    // Contact
    contact: {
      title: 'Book your wellness moment',
      subtitle: 'Want to relax, recover and give time to yourself? Get in touch and book your appointment.',
      address: 'Address',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      facebook: 'Facebook',
      bookCta: 'BOOK NOW',
      callCta: 'CALL',
      addressValue: 'Isolinnankatu 22 B, 2nd floor, room 212, 28100 Pori',
      whatsappValue: 'Book via WhatsApp',
      facebookValue: 'LifeHarmony on Facebook',
      email: 'Email',
      emailValue: 'lifeharmonyrk@gmail.com'
    },
    // Map
    map: {
      title: 'Find us',
      subtitle: 'LifeHarmony is located in the heart of Pori city center.',
      floor: '2nd floor · Room 212',
      cta: 'Open Google Maps',
    },
    // Payment
    payment: {
      title: 'We accept payment methods',
    },
    // Footer
    footer: {
      tagline: 'Massage for body and mind',
      quote: 'Your well-being matters to us.',
      contact: 'Contact',
      links: 'Links',
      allRights: 'All rights reserved.',
    },
  },
  ru: {
    // Navigation
    nav: {
      home: 'Главная',
      about: 'О нас',
      services: 'Массаж',
      pricing: 'Цены',
      giftcards: 'Подарочные карты',
      contact: 'Контакты',
      bookNow: 'ЗАПИСАТЬСЯ',
    },
    // Hero
    hero: {
      title: 'LifeHarmony',
      tagline: 'Массаж для тела и души',
      subtitle: 'Расслабление. Благополучие.',
      cta: 'ЗАПИСАТЬСЯ',
      ctaWhatsapp: 'СВЯЗАТЬСЯ В WHATSAPP',
      location: 'Порви · Isolinnankatu 22 B',
    },
    // About
    about: {
      title: 'Райвис – Профессионал в сфере массажной терапии',
      description: [
        'Райвис — опытный массажист, чьи профессионализм и страсть к благополучию являются сердцем LifeHarmony. Благодаря многолетнему опыту он помог сотням клиентов найти расслабление и физическое благополучие.',
        'Мастерство Райвиса объединяет глубокое знание традиционных техник массажа с современным целостным подходом. Каждый сеанс индивидуально адаптируется под ваши конкретные потребности — будь то мышечное напряжение, стресс или просто момент личного благополучия.',
        'В спокойной обстановке, под сопровождение расслабляющей музыки и с профессиональными руками каждый сеанс массажа становится моментом возрождения. Цель Райвиса — дать вам не просто физическое облегчение, а полноценный опыт благополучия.',
      ],
      quote: 'Ваше благополучие важно для меня.',
    },
    // Features
    features: {
      title: 'Почему LifeHarmony?',
      items: [
        { title: 'Спокойная обстановка', description: 'Момент вдали от суеты повседневной жизни.' },
        { title: 'Персональное обслуживание', description: 'Массаж адаптируется под ваши индивидуальные потребности.' },
        { title: 'Расслабляющая атмосфера', description: 'Спокойная музыка и тёплая обстановка помогают отпустить стресс.' },
        { title: 'Комплексное благополучие', description: 'Цель — сбалансированное благополучие тела и души.' },
        { title: 'Время для себя', description: 'Иногда самое важное — просто остановиться.' },
      ],
    },
    // Pricing
    pricing: {
      title: 'Цены',
      sessions: {
        '30': '30 мин',
        '45': '45 мин',
        '60': '60 мин',
        '90': '90 мин',
        '120': '120 мин',
      },
      descriptions: {
        '30': 'Короткий расслабляющий массаж',
        '45': 'Массаж средней продолжительности',
        '60': 'Полноценный массаж',
        '90': 'Длительный сеанс массажа',
        '120': 'Роскошный массаж',
      },
      book: 'Записаться',
      packages: 'Абонементы',
      packageDesc: 'Абонемент упрощает регулярные оздоровительные посещения. Более выгодный вариант для регулярного ухода за собой.',
      savings: 'Экономия',
      askPackages: 'Узнать об абонементах',
    },
    // Gift Cards
    giftcards: {
      title: 'Подарите благополучие',
      subtitle: 'Подарочная карта на массаж LifeHarmony — это подарок, который даёт время для себя.',
      cta: 'УЗНАТЬ О ПОДАРОЧНЫХ КАРТАХ В WHATSAPP',
      occasions: ['День рождения', 'Новый год', 'Годовщина', 'День матери', 'День отца', 'Благодарность', 'Сюрприз'],
      cardLabel: 'Подарочная карта',
    },
    // First Visit
    firstVisit: {
      label: 'Предложение для первого визита',
      title: 'Уделите время себе.',
      discount: '−10 €',
      subtitle: '-10 € при первом посещении',
      cta: 'ЗАПИСАТЬСЯ',
    },
    // Experience
    experience: {
      title: 'Момент только для вас',
      subtitle: 'На мгновение закройте внешний мир.',
    },
    // Testimonials
    testimonials: {
      title: 'Отзывы клиентов',
      viewAll: 'Читать все отзывы',
      rating: '5.0 / 5',
      source: 'Google',
    },
    // Contact
    contact: {
      title: 'Запишитесь на свой сеанс',
      subtitle: 'Хотите расслабиться, восстановиться и уделить время себе? Свяжитесь с нами и запишитесь.',
      address: 'Адрес',
      phone: 'Телефон',
      whatsapp: 'WhatsApp',
      facebook: 'Facebook',
      bookCta: 'ЗАПИСАТЬСЯ',
      callCta: 'ПОЗВОНИТЬ',
      addressValue: 'Isolinnankatu 22 B, 2 этаж, комната 212, 28100 Порви',
      whatsappValue: 'Записаться через WhatsApp',
      facebookValue: 'LifeHarmony в Facebook',
      email: 'Электронная почта',
      emailValue: 'lifeharmonyrk@gmail.com'
    },
    // Map
    map: {
      title: 'Найдите нас',
      subtitle: 'LifeHarmony находится в центре Порви.',
      floor: '2 этаж · Комната 212',
      cta: 'Открыть Google Maps',
    },
    // Payment
    payment: {
      title: 'Мы принимаем к оплате',
    },
    // Footer
    footer: {
      tagline: 'Массаж для тела и души',
      quote: 'Ваше благополучие важно для нас.',
      contact: 'Контакты',
      links: 'Ссылки',
      allRights: 'Все права защищены.',
    },
  },
};

export type Translations = typeof translations.fi;