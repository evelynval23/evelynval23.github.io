// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'evelynval23', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['evelynval23/Microbiome-tutorial', 'evelynval23/Genome-Report'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '2023 Paper on Marfan Syndrome',
          description:
            'This paper is on the mutations that occur in the Fibrillin-1 gene in Marfan Syndrome.',
          imageUrl:
            'https://github.com/evelynval23/evelynval23.github.io/raw/main/Screenshot%202025-04-30%20at%209.07.19%20AM.png',
          link: 'https://github.com/evelynval23/evelynval23.github.io/raw/main/Marfan%20Syndrome%20Paper%20.pdf',
        },
        {
          title: '2025 Paper on the Algae at Stanislaus State University',
          description:
            'This paper covers the recent findings on the algae that is present in the pond water at Stanislaus State University.',
          imageUrl:
            'https://github.com/evelynval23/evelynval23.github.io/raw/main/Screenshot%202025-04-30%20at%209.08.37%20AM.png',
          link: 'https://github.com/evelynval23/evelynval23.github.io/raw/main/Stan%20Algae%20paper.pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Evelyn Valdovinos Website',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'evelynvaldovinos@icloud.com',
  },
  resume: {
    fileUrl:
      'https://github.com/evelynval23/evelynval23.github.io/raw/main/myCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Bioinformatics',
    'Microbiology',
  ],
  experiences: [
    {
      company: 'Starbucks',
      position: 'Barista',
      from: 'August 2022',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Pizza Plus',
      position: 'Manager',
      from: 'June 2019',
      to: 'August 2022',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'California State University at Stanislaus',
      degree: 'BS in Biological Sciences',
      from: '2019',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'Draft genome sequence of Phascolarctobacterium faecium DSM 14760 isolated from koala feces in Australia',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcements',
      authors: 'Evelyn Valdovinos, Ciara Blanco, Vignesh Lal, Alan Vinzant',
      link: 'https://github.com/evelynval23/evelynval23.github.io/raw/main/MRA%20paper.pdf',
      description:
        'This is a manuscript in submission. Phascolarctobacterium faecium was originally isolated from koala feces in 1992. Here, we sequence and analyze the type strain, with a length of 2,317,131 bp, 27 contigs, and average G+C content of 43.73%, and three virulence factors that are potential health hazards to humans.',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:'',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Valentine',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
