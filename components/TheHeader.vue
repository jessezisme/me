<template>
  <header class="container min-h-[60px]">
    <nav class="fixed z-40 top-4 right-0 left-0 flex justify-center">
      <ul
        class="inline-flex items-start py-2 px-4 gap-8 rounded-b-lg rounded-lg text-body-inv shadow-lg bg-brand6 border-2 border-brand1 lowercase"
      >
        <li>
          <NuxtLink to="#projects"><span>Projects</span></NuxtLink>
        </li>
        <li>
          <NuxtLink to="#about"><span>About</span></NuxtLink>
        </li>
        <li>
          <NuxtLink to="#contact"><span>Contact</span></NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
