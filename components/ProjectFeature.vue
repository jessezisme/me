<template>
  <section class="rounded-md shadow-md focus-within:shadow-lg hover:shadow-lg">
    <div>
      <slot name="title"></slot>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
      <div
        class="max-h-[425px] flex items-center justify-center p-[1rem] bg-slate-50 rounded-2xl border-8 border-black aspect-video"
      >
        <slot name="image"></slot>
      </div>
      <div>
        <div>
          <slot name="body"></slot>
        </div>
        <div v-if="tech" class="flex flex-wrap gap-[.5rem]">
          <span
            v-for="item in tech"
            :key="item"
            class="inline-flex py-[.25rem] px-[.5rem] text-sm border-[1px] bg-neutral-700 rounded-md text-body-inv"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface ProjectFeatureProps {
  tech?: string[];
}

const props = defineProps<ProjectFeatureProps>();
</script>
