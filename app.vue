<template>
  <Head>
    <Meta charset="utf-8" />
    <Meta name="viewport" content="width=device-width,initial-scale=1" />
    <Meta name="format-detection" content="telephone=no" />
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

<script setup lang="ts"></script>
