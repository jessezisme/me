<template>
  <section class="container py-[6rem]">
    <span class="inline-flex px-[.5rem] py-[.25rem] h3 font-extrabold bg-brand5 text-body-inv rounded-md tracking-widest"
      >Hi.</span
    >
    <div class="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-[2rem]">
      <div>
        <h1 class="my-[1rem] h1 font-black lead">I'm Jesse, a front-end developer based in Vermont.</h1>
        <p class="max-w-[35em] h6">
          Thanks for stopping by. While you're here, please feel free to learn more about me, check out some of my latest
          side projects, and contact me if you want to learn more. You can also find me on:
        </p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1531101930610-1b86e66d5fd7?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="rounded-2xl max-w-[80%] md:max-w-full sepia-[65%] border-8 border-black"
        />
      </div>
    </div>
  </section>

  <AccentSeparator class="h-[150px]" />

  <section class="container py-[6rem]">
    <h2 class="font-extrabold mb-6 h2">Side Projects</h2>
    <p>A collection of some of my latest side projects completed outside of work for fun.</p>

    <ProjectFeature
      :tech="['TypeScript', 'Vue', 'Nuxt', 'Tailwind CSS', 'Supabase', 'SQL']"
      class="p-[3rem_2.5rem] my-[4rem] bg-neutral-100"
    >
      <template #title>
        <h3 class="h3 font-extrabold mb-4">Pod Nexus</h3>
      </template>
      <template #body>
        <p class="mb-4">
          Listen to all your favorite podcasts with Pod Nexus, a fun demo project I built primarily to learn Vue and Nuxt.
          Users can sign via GitHub and subscribe to podcasts. Authentication and SQL database utilizes Supabase.
        </p>
        <div class="flex flex-col gap-4 mb-6 items-start">
          <a href="https://podcast-web-player.netlify.app/" rel="nofollow" class="inline-flex items-center gap-2">
            <Icon name="material-symbols:link" /> Live Link
          </a>
          <a href="https://github.com/jessezisme/podcast-web-player" class="inline-flex items-center gap-2">
            <Icon name="mdi:github" /> Code on GitHub
          </a>
        </div>
      </template>
      <template #image>
        <NuxtPicture
          src="/assets/images/home/pod-nexus.png"
          class="flex items-center justify-center w-full h-full max-w-full max-h-full"
          alt="Pod Nexus screenshot."
        />
      </template>
    </ProjectFeature>

    <ProjectFeature :tech="['CSS/SCSS', 'JavaScript', 'Nuxt', 'Webpack']" class="p-[3rem_2.5rem] my-[4rem] bg-neutral-100">
      <template #title>
        <h3 class="h3 font-extrabold mb-4">2048-ish</h3>
      </template>
      <template #body>
        <p class="mb-4">
          A complete re-build of the popular 2048 game, a sliding block puzzle game. It can be pretty addicting.
        </p>
        <div class="flex flex-col gap-4 mb-6 items-start">
          <a href="https://2048ish.netlify.app/" class="inline-flex items-center gap-2">
            <Icon name="material-symbols:link" /> Live Link
          </a>
          <a href="https://codepen.io/jessezisme/pen/yKoRWq" class="inline-flex items-center gap-2">
            <Icon name="mdi:codepen" /> Codepen
          </a>
          <a href="https://github.com/jessezisme/2048-ish" class="inline-flex items-center gap-2">
            <Icon name="mdi:github" /> Code on GitHub
          </a>
        </div>
      </template>
      <template #image>
        <NuxtPicture
          src="/assets/images/home/2048-iphone.png"
          class="flex items-center justify-center w-full h-full max-w-full max-h-full"
          alt="2048-ish screenshot."
        />
      </template>
    </ProjectFeature>

    <ProjectFeature :tech="['TypeScript', 'Vue', 'Nuxt', 'CSS/SCSS']" class="p-[3rem_2.5rem] my-[4rem] bg-neutral-100">
      <template #title>
        <h3 class="h3 font-extrabold mb-4">Farmers' Markets</h3>
      </template>
      <template #body>
        <p class="mb-4">Search for local farmers markets in your area using the USDA's Farmers Market API.</p>
        <div class="flex flex-col gap-4 mb-6 items-start">
          <a href="https://findfarmersmarkets.netlify.app/" class="inline-flex items-center gap-2">
            <Icon name="material-symbols:link" /> Live Link
          </a>
          <a href="https://github.com/jessezisme/farmers-markets" class="inline-flex items-center gap-2">
            <Icon name="mdi:github" /> Code on GitHub
          </a>
        </div>
      </template>
      <template #image>
        <NuxtPicture
          src="/assets/images/home/farmers-markets.png"
          class="flex items-center justify-center w-full h-full max-w-full max-h-full"
          alt="Farmers Market screenshot."
        />
      </template>
    </ProjectFeature>
  </section>

  <section class="py-[6rem] bg-[rgb(53,_53,_53)] text-body-inv">
    <div class="container">
      <h2 class="h2 mb-6 text-center">About</h2>
      <div>
        <div>
          <p class="mb-4">
            I initially began coding as a fun hobby, enjoying the mixture of logic and creativity and seeing your ideas
            deployed live on the web. This led me to change careers and attend a full&hyphen;time developer training program
            in Portland, Oregon. Since then, I've had the privilege to work with some great people and companies, ranging
            from e-commerce to a large, international video game maker.
          </p>
          <p class="mb-4">
            I enjoy working on collaborative and innovative teams that are always looking for new ways to improve their
            product. Although I'm not a designer, I have taken some design courses and can always appreciate good color
            palettes, typography, and UI<span aria-label="and">/</span>UX experiences.
          </p>
          <p class="mb-4">
            When I'm not working, I'm usually watching sports (<span aria-label="basketball">🏀</span> and
            <span aria-label="football">🏈</span>) or mountain biking and hiking outdoors <span aria-hidden="true">🏔️</span>.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <ContactForm />
  </section>
</template>

<style scoped lang="scss">
picture :deep(img) {
  @apply max-h-full max-w-full;
}
</style>
