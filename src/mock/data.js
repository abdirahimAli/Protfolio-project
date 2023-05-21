import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Abdirahim',
  subtitle: 'I am FrontEnd developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '1trtetey',
  paragraphTwo: '2',
  paragraphThree: '3',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Rahim entertainment-img.png',
    title: 'Rahim Entertainment',
    info: 'HTML,CSS3,Javascript and React',
    info2:
      'To build the website I have used React libraries, react router,context API and  data.jason file. ',
    url: '',
    repo: 'https://github.com/abdirahimAli/Rahim-Entertainment', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Dictionary-img.png',
    title: 'Dirctionary app',
    info: 'HTML,CSS3,Javascript',
    info2: ' Built with Semantic HTML5 markup, CSS custom propertiesand and Flexbox',
    url: 'https://dictionar-app.netlify.app/',
    repo: 'https://github.com/abdirahimAli/Dictionaryproject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Password-GEN-img.png',
    title: 'Password Generator App',
    info: 'HTML,Saas/CSS3,Javascript',
    info2: ' Built with Semantic HTML5 markup, CSS custom properties, Flexbox and grid display',
    url: 'https://abdi-password-generator.netlify.app/',
    repo: 'https://github.com/abdirahimAli/Password_Generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Tic-Tac-Toe_img.png',
    title: 'Password Generator App',
    info: 'HTML,Saas/CSS3,Javascript',
    info2: ' Built with Semantic HTML5 markup, CSS custom properties, Flexbox and grid display',
    url: 'https://abdi-tic-tac-toe-game.netlify.app/',
    repo: 'https://github.com/abdirahimAli/Tic-tac-toe', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
