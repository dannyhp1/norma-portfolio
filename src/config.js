module.exports = {
  siteTitle: 'Norma Vazquez | Photography Enthusiast',
  siteDescription:
    'Norma Vazquez is a data-driven marketing coordinator located in Los Angeles, CA. Experienced in design, social media and digital marketing, and video production.',
  siteKeywords:
    'Norma Vazquez, normapvazq, paovazq, california state university fullerton, marketing coordinator, human resources, los angeles, social media, digiital marketing, video production, photography',
  siteUrl: 'https://normavazquez.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-155546986-1',
  name: 'Norma Vazquez',
  location: 'Los Angeles, CA',
  email: 'normapvazq@gmail.com',
  github: 'https://github.com/paovazq',
  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/normapvazq',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/narmoo',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    // {
    //   name: 'Experience',
    //   url: '/#jobs',
    // },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#007bff',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
