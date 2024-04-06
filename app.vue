
<template>
  <div class="container mx-auto flex h-full min-h-screen flex-col px-8 py-4">

  <Transition name="fade">
    <Animation v-show="!showContent" @end-animation="showContent = true" />
  </Transition>

  <template v-show="showContent">
    <Navigation />

    <NuxtPage />
  </template>

  </div>
</template>


<script setup lang="ts">
import Animation from "./components/Animation.vue";

const baseTitle = 'Felix Montanari | Security Engineer';
const baseDescription =
  'Security engineer from Australia. Lover of all things security.';

const showContent = ref(false);
  
const titleTemplate = (title?: string) => {
  if (title?.length) {
    return `${title} | Felix Montanari`;
  }
  return baseTitle;
};

useHead({
  title: () => baseTitle,
  titleTemplate,
});

useSeoMeta({
  title: () => baseTitle,
  titleTemplate,
  author: 'Felix Montanari',
  description: baseDescription,
  ogTitle: baseTitle,
  ogDescription: baseDescription,
  ogSiteName: 'Felix Montanari',
});
</script>