export default defineAppConfig({
  docus: {
    title: 'Avenbreaks Docus',
    description: 'The best place to start your documentation.',
    image: 'https://kavn.sgp1.cdn.digitaloceanspaces.com/homepage.png',

    socials: {
      twitter: 'joyy_wibowo',
      github: 'avenbreaks/docs-nuxt-studio',

      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      },

      instagram: 'joy_soejoy'
    },

    github: {
      dir: '.starters/default/content',
      branch: 'master',
      repo: 'docs-nuxt-studio',
      owner: 'avenbreaks',
      edit: true,
      baseUrl: ''
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
      title: 'Avenbreaks Docs'
    },

    footer: {
      credits: {
        icon: '',
        text: 'Powered by Kvantum Labs',
        href: 'https://kvantum.guru'
      }
    },

    titleTemplate: 'docs-nuxt-studio'
  }
})