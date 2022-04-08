export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head() {
        const metaScript = [];
        const metaData = [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: `Welcome to my personal front-end developer portfolio site.`,
            },
            { name: 'format-detection', content: 'telephone=no' },
        ];
        const metaSanitizerById = {};

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
            metaScript.push(...googleAnalyticsScripts);
            metaSanitizerById['google-analytics-data'] = ['innerHTML'];
        } else if (process.env.DEPLOY_STAGE === 'staging') {
            metaData.push({ name: 'robots', content: 'noindex, nofollow' });
        }

        return {
            title: 'Jesse Z | Front-end Developer',
            htmlAttrs: {
                lang: 'en',
            },
            meta: metaData,
            script: metaScript,
            __dangerouslyDisableSanitizersByTagID: metaSanitizerById,
        };
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
