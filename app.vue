<template>
  <Teleport to="head">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/assets/favicon/site.webmanifest" />
    <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5" />
    <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml" />
    <meta name="theme-color" content="#ffffff" />
  </Teleport>
  <div class="flex flex-col min-h-[100vh] overflow-x bg-[#fffdfa]">
    <TheHeader />
    <main class="grow">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

useHead({
  title: 'Jesse | Front-end Developer',
  htmlAttrs: {
    lang: 'en',
  },
  meta: () => {
    const getMeta = [
      { charset: 'utf-8' },
      {
        key: 'meta-description',
        name: 'description',
        content: 'Welcome to my personal front-end developer portfolio site.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ];

    if (config.public.DEPLOY_STAGE === 'staging') {
      getMeta.push({
        name: 'robots',
        content: 'noindex, nofollow',
      });
    }
    return getMeta;
  },
  script: () => {
    const getScripts = [];

    if (config.public.DEPLOY_STAGE === 'production') {
      getScripts.push({
        key: 'script-gtag',
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-71934346-1',
        async: true,
      });
      getScripts.push({
        innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-71934346-1');
          `,
      });
    }
    return getScripts;
  },
});
</script>
