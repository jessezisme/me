const headScript = [];
const headSanitizerById = [];

if (process.env.DEPLOY_STAGE === 'production') {
    const googleAnalyticsScripts = [
        {
            src: 'https://www.googletagmanager.com/gtag/js?id=UA-71934346-1',
            async: true,
        },
        {
            hid: 'google-analytics-data',
            innerHTML: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-71934346-1');
            `,
        },
    ];
    headScript.push(...googleAnalyticsScripts);
    headSanitizerById.push({
        'google-analytics-data': ['innerHTML'],
    });
}

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Jesse Z | Front-end Developer',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: `Welcome to my personal front-end developer portfolio site.`,
            },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'robots', content: 'noindex' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }],
        script: [...headScript],
        __dangerouslyDisableSanitizersByTagID: { ...headSanitizerById },
    },

    publicRuntimeConfig: {
        DEPLOY_STAGE: process.env.DEPLOY_STAGE,
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/styles/main'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: {
        dirs: ['~/components', '~/components/base'],
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        '@nuxtjs/style-resources',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    styleResources: {
        scss: '~/assets/styles/abstracts/_abstracts.scss',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
