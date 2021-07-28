let APP_NAME    = 'Afancy';
let APP_URL     = "http://localhost:3000";
let APP_Version = "v1.3.0";

export default {
  telemetry: false,
  ssr: false,
  target: 'static',
  generate: {
    dir: 'docs'
  },


  head: {
    title: APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // header
        // bootstrap + bootstrap icons
          { rel: 'stylesheet', href: '/core/bootstrap-5.0.2-dist/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css' }
    ],
    script: [
      // header
      // footer
        // bootstrap
          { src: "/core/bootstrap-5.0.2-dist/js/bootstrap.bundle.min.js", body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'highlight.js/styles/devibeans.css'
  ], 

  loading: {
    color: 'blue',
    failedColor: 'red',
    background: '#212529',
    height: '5px',
    continuous: true
  },

  plugins: [
    '@/plugins/afancy'
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/moment',
    '@nuxtjs/google-fonts'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  axios: {},
  pwa: {
    manifest: {
      name: APP_NAME,
      lang: 'en',
      background_color: '#8a2be2',
      theme_color: '#8a2be2'
    },
    meta: {
      theme_color: '#8a2be2' 
    }
  },

  build: {
  },




  googleFonts: {
    display: 'swap',
    families: {
      Nosifer: true,
      Monoton: true,
      'Fredericka the Great': true
    }
  },

  publicRuntimeConfig: {
    base: {
      APP_NAME,
      APP_TITLE: " || "+APP_NAME,
      APP_URL,
      APP_Version
    }
  }

}
