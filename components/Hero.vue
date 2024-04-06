<script setup lang="ts">
import { switchHighlightColor } from '~/colors';
</script>

<template>
  <section
    id="about"
    class="grid grid-cols-1 items-center gap-4 lg:grid-cols-2"
  >
    <div class="flex flex-col gap-4">
      <h1
        class="text-5xl font-bold text-black-primary lg:text-6xl dark:text-white-primary"
      >
        <span
          class="text-[color:var(--highlight)] duration-300"
          @focus="switchHighlightColor"
          @mouseenter="switchHighlightColor"
          >Hey,</span
        >
        I'm Felix
      </h1>

      <p class="text-xl text-black-primary dark:text-white-primary">
        I am a security engineer and software developer from Australia. I love to tinker and break things. Lately, I've been messing around with the Linux kernel and writing a lot of Rust.
      </p>

      <p class="text-dark-primary text-xl dark:text-white-primary">
        I'm currently in the second year of my BSc. in Computer Science @
        <a
          class="underline"
          href="https://www.unsw.edu.au"
          rel="noreferrer noopener"
          target="_blank"
          >UNSW</a
        >
        where I'm focusing on systems programming and security. 
      </p>

      <div class="flex gap-4">
        <GithubLink />

        <LinkedInLink />
      </div>
    </div>

    <NuxtPicture
      alt="Image of Felix Montanari"
      class="order-first mx-auto w-9/12 lg:order-1 lg:mr-0 lg:w-fit lg:text-right"
      format="avif,webp"
      :img-attrs="{ class: 'mr-auto lg:mr-0 ml-auto lg:text-right' }"
      src="/felix-montanari-image.png"
      loading="lazy"
    />

  </section>
</template>
