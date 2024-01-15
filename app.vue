<template>
  <Head>
    <Link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
    <Link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
    <Link rel="manifest" href="/assets/favicon/site.webmanifest" />
    <Link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5" />
    <Link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
    <Meta name="msapplication-TileColor" content="#da532c" />
    <Meta name="msapplication-config" content="/assets/favicon/browserconfig.xml" />
    <Meta name="theme-color" content="#ffffff" />
  </Head>
  <div class="flex flex-col min-h-[100vh] overflow-x bg-[#fffdfa]">
    <TheHeader />
    <main class="grow">
      <NuxtPage />
    </main>
    <TheFooter />
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
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
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
        src: 'https://www.googletagmanager.com/gtag/js?id=G-YHFVW6R2BK',
        async: true,
      });
      getScripts.push({
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YHFVW6R2BK');
        `,
      });
    }
    return getScripts;
  },
});
</script>
