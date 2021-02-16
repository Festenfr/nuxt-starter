export default {
    publicRuntimeConfig: {
        strapiBaseUrl: process.env.API_URL || 'http://localhost:1337',
        graphqlUrl: process.env.GRAPHQL_URL || 'http://localhost:1337/graphql'
    },
    head: {
        title: 'nuxt-starter',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    css: [{ src: '~/assets/scss/main.scss', lang: 'scss' }],
    plugins: ['~/plugins/vuex-router-sync.js', '~/plugins/plugins.client.js'],
    components: true,
    buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/style-resources'],
    modules: ['@nuxtjs/pwa', '@nuxtjs/svg'],
    pwa: {
        manifest: {
            lang: 'fr'
        }
    },
    build: {},
    styleResources: {
        scss: ['~/assets/scss/includes.scss']
    }
}
