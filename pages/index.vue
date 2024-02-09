<template>
  <!-- Intro -->
  <section class="container py-[6rem]">
    <span class="inline-flex px-[.5rem] py-[.25rem] h3 font-extrabold bg-brand5 text-body-inv rounded-md tracking-widest"
      >Hi.</span
    >
    <div class="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-[2rem]">
      <div>
        <h1 class="my-[1rem] h1 font-black lead">I'm Jesse, a front-end developer based in Vermont.</h1>
        <div class="max-w-[35em] h6 font-normal">
          <p class="mb-4">
            Thanks for stopping by. While you're here, please feel free to
            <NuxtLink to="#about">learn more about me</NuxtLink>, check out some of my latest
            <NuxtLink to="#projects">side projects</NuxtLink>, and <NuxtLink to="#contact">contact me</NuxtLink> if you want
            to learn more. You can also find me on:
          </p>
          <div class="mb-2">
            <NuxtLink to="https://github.com/jessezisme" target="_blank" class="inline-flex items-center gap-2">
              <Icon name="mdi:github" aria-hidden="true" /> GitHub
            </NuxtLink>
          </div>
          <div class="mb-2">
            <NuxtLink to="https://codepen.io/jessezisme" target="_blank" class="inline-flex items-center gap-2">
              <Icon name="mdi:codepen" aria-hidden="true" /> Codepen
            </NuxtLink>
          </div>
        </div>
      </div>
      <div>
        <NuxtPicture
          src="/assets/images/home/home-vermont.jpg"
          class="aspect-video block w-full max-w-[80%] md:max-w-full"
          alt="Vermont landscape."
          sizes="100vw md:600px"
          preload
          :imgAttrs="{ id: 'my-id', class: 'w-full h-full object-cover sepia-[65%] border-8 border-black rounded-lg' }"
        />
      </div>
    </div>
  </section>

  <AccentSeparator class="h-[150px]" />

  <!-- Projects -->
  <section id="projects" class="container py-[6rem]">
    <h2 class="font-extrabold mb-6 h2">Side Projects</h2>
    <p>A collection of some of my latest side projects completed outside of work for fun.</p>

    <ProjectFeature
      :tech="['TypeScript', 'Vue', 'Nuxt', 'Tailwind CSS', 'Supabase', 'SQL']"
      class="p-[3rem_2.5rem] my-[4rem] bg-neutral-50"
    >
      <template #title>
        <h3 class="h3 font-extrabold mb-4">Pod Nexus</h3>
      </template>
      <template #body>
        <p class="mb-4">
          Listen to all your favorite podcasts with Pod Nexus, a fun demo project I built primarily to learn Vue and Nuxt.
          Users can sign-in via GitHub and subscribe to podcasts. Authentication and SQL database utilizes Supabase.
        </p>
        <div class="flex flex-col gap-4 mb-6 items-start">
          <a
            href="https://podcast-web-player.netlify.app/"
            target="_blank"
            rel="nofollow"
            class="inline-flex items-center gap-2"
          >
            <Icon name="material-symbols:link" aria-hidden="true" /> Live Link
          </a>
          <a href="https://github.com/jessezisme/podcast-web-player" target="_blank" class="inline-flex items-center gap-2">
            <Icon name="mdi:github" aria-hidden="true" /> Code on GitHub
          </a>
        </div>
      </template>
      <template #image>
        <NuxtPicture
          src="/assets/images/home/pod-nexus.png"
          class="flex items-center justify-center w-full h-full max-w-full max-h-full"
          alt="Pod Nexus screenshot."
          sizes="100vw md:400px"
          loading="lazy"
        />
      </template>
    </ProjectFeature>

    <ProjectFeature :tech="['CSS/SCSS', 'JavaScript', 'Webpack']" class="p-[3rem_2.5rem] my-[4rem] bg-neutral-50">
      <template #title>
        <h3 class="h3 font-extrabold mb-4">2048-ish</h3>
      </template>
      <template #body>
        <p class="mb-4">
          A complete re-build of the popular 2048 game, a sliding block puzzle game. It can be pretty addicting.
        </p>
        <div class="flex flex-col gap-4 mb-6 items-start">
          <a href="https://2048ish.netlify.app/" target="_blank" class="inline-flex items-center gap-2">
            <Icon name="material-symbols:link" aria-hidden="true" /> Live Link
          </a>
          <a href="https://codepen.io/jessezisme/pen/yKoRWq" target="_blank" class="inline-flex items-center gap-2">
            <Icon name="mdi:codepen" aria-hidden="true" /> Codepen
          </a>
          <a href="https://github.com/jessezisme/2048-ish" target="_blank" class="inline-flex items-center gap-2">
            <Icon name="mdi:github" aria-hidden="true" /> Code on GitHub
          </a>
        </div>
      </template>
      <template #image>
        <NuxtPicture
          src="/assets/images/home/2048-iphone.png"
          class="flex items-center justify-center w-full h-full max-w-full max-h-full"
          alt="2048-ish screenshot."
          sizes="100vw md:400px"
          loading="lazy"
        />
      </template>
    </ProjectFeature>

    <ProjectFeature :tech="['TypeScript', 'Vue', 'Nuxt', 'CSS/SCSS']" class="p-[3rem_2.5rem] my-[4rem] bg-neutral-50">
      <template #title>
        <h3 class="h3 font-extrabold mb-4">Farmers' Markets</h3>
      </template>
      <template #body>
        <p class="mb-4">Search for local farmers markets in your area using the USDA's Farmers Market API.</p>
        <div class="flex flex-col gap-4 mb-6 items-start">
          <a href="https://findfarmersmarkets.netlify.app/" target="_blank" class="inline-flex items-center gap-2">
            <Icon name="material-symbols:link" aria-hidden="true" /> Live Link
          </a>
          <a href="https://github.com/jessezisme/farmers-markets" target="_blank" class="inline-flex items-center gap-2">
            <Icon name="mdi:github" aria-hidden="true" /> Code on GitHub
          </a>
        </div>
      </template>
      <template #image>
        <NuxtPicture
          src="/assets/images/home/farmers-markets.png"
          class="flex items-center justify-center w-full h-full max-w-full max-h-full"
          alt="Farmers Market screenshot."
          sizes="100vw md:400px"
          loading="lazy"
        />
      </template>
    </ProjectFeature>
  </section>

  <!-- About -->
  <section id="about" class="py-[6rem] text-body-inv bg-gradient-to-br from-brand6 to-brand6">
    <div class="container">
      <h2 class="h2 mb-6">About</h2>
      <div class="grid grid-cols-[1fr] md:grid-cols-[1fr,1fr] gap-8">
        <div class="text-lg">
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
        <div class="grid grid-cols-[1fr] sm:grid-cols-[1fr,1fr] md:grid-cols-[1fr] gap-6">
          <div class="border-[1px] border-white/20 p-6 rounded-md bg-gradient-to-br from-brand6/95 to-brand6/100">
            <h3 class="h4 border-b-[1px] border-b-brand1 mb-4">Skills</h3>
            <ul class="custom-list">
              <li v-for="item in skills" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="border-[1px] border-white/20 p-6 rounded-md bg-gradient-to-br from-brand6/95 to-brand6/100">
            <h3 class="h4 border-b-[1px] border-b-brand1 mb-4">Languages</h3>
            <ul class="custom-list">
              <li v-for="item in languages" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="border-[1px] border-white/20 p-6 rounded-md bg-gradient-to-br from-brand6/95 to-brand6/100">
            <h3 class="h4 border-b-[1px] border-b-brand1 mb-4">Frameworks</h3>
            <ul class="custom-list">
              <li v-for="item in frameworks" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="border-[1px] border-white/20 p-6 rounded-md bg-gradient-to-br from-brand6/95 to-brand6/100">
            <h3 class="h4 border-b-[1px] border-b-brand1 mb-4">Tools</h3>
            <ul class="custom-list">
              <li v-for="item in tools" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-[6rem]">
    <div class="container">
      <h2 class="h2 mb-6">Contact</h2>
      <div class="grid grid-cols-[1fr] md:grid-cols-[2fr_3fr] gap-[4rem]">
        <div>
          <p class="text-lg">
            I'm always interested in discussing new projects and opportunities. Feel free to send me a message, and I'll get
            back to you as soon as I can.
          </p>
        </div>
        <div>
          <ContactForm class="max-w-full" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
picture :deep(img) {
  @apply max-h-full max-w-full;
}
.custom-list {
  @apply flex flex-wrap gap-2;

  li {
    @apply text-body-inv-v1 before:content-['\2022'] before:relative before:inline-flex before:pr-[5px];
  }
}
</style>

<script setup lang="ts">
definePageMeta({
  title: 'Jesse | Front-end Developer',
});

const skills = [
  'Front-end Development',
  'Technical SEO',
  'Accessibility Audits',
  'Web Content Accessibility Guidelines (WCAG)',
];
const languages = ['JavaScript', 'TypeScript', 'CSS, SASS, SCSS, LESS', 'HTML', 'SQL'];
const frameworks = ['Vue.js', 'Angular', 'jQuery', 'Knockout.js', 'Nuxt', 'Bootstrap', 'Tailwind', 'Jest'];
const tools = [
  'Node.js',
  'Git',
  'GitHub',
  'Jira',
  'Adobe Photoshop',
  'Figma',
  'WordPress',
  'Webpack',
  'Google Search Console',
  'Vite',
  'Gulp.js',
  'Oracle Commerce Cloud',
  'Oracle Responsys',
];
</script>
