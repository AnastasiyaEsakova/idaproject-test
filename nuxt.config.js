import { resolve } from 'path';

export default {
  ssr: false,
  head: {
    title: 'idaproject',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  alias: {
    './style': resolve(__dirname, './assets/color.scss'),
    './fonts': resolve(__dirname, './fonts/fonts.scss')
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
  ],
  modules: [
  ],
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  }
}
