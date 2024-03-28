<script setup lang="ts">
import type { Project } from '~/github';

const projects: Project[] = [
  {
    description: 'A super stealthy linux rootkit PoC targeting modern kernel versions.',
    homepageUrl: 'https://kris.felixmontanari.com',
    languages: [
      {
        color: '#f34b7d',
        name: 'C',
      },
    ],
    name: 'kris',
    url: 'https://github.com/CaptainBoggle/kris',
  },
  {
    description: 'Read/write to the terminals of users ssh\'d into your box.',
    homepageUrl: '',
    languages: [
      {
        color: '#dea584',
        name: 'Rust',
      },
    ],
    name: 'sshnoop',
    url: 'https://github.com/GeorgeMuscat/sshnoop',
  },
  {
    description: 'Stream McLaren\'s team radio to your discord server using their undocumented API.',
    homepageUrl: '',
    languages: [
      {
        name: 'Python',
        color: '#3572A5',
      },
    ],
    name: 'pitwall-at-home',
    url: 'https://github.com/CaptainBoggle/pitwall-at-home',
  },
  {
    description: 'A minimal, risk-averse hacked client for Minecraft 1.8.9.',
    homepageUrl: '',
    languages: [
      {
        color: '#b07219',
        name: 'Java',
      },
    ],
    name: 'huff',
    url: 'https://github.com/CaptainBoggle/huff',
  },
  {
    description: 'A linux shell engineered for pentesting. (very WIP)',
    homepageUrl: '',
    languages: [
      {
        color: '#f1e05a',
        name: 'Go',
      },
      {
        color: '#f34b7d',
        name: 'C',
      },
    ],
    name: 'sesh',
    url: 'https://github.com/CaptainBoggle/sesh'
  },
  {
    description: 'This accursed website.',
    homepageUrl: 'https://felixmontanari.com',
    languages: [
      {
        name: 'Vue',
        color: '#41B883',
      },
      {
        name: 'TypeScript',
        color: '#3178c6',
      },
      {
        name: 'Tailwind CSS',
        color: '#38B2AC',
      },
    ],
    name: 'personal-website',
    url: 'https://github.com/CaptainBoggle/personal-website',
  }
];

</script>

<template>
  <section v-if="projects?.length" id="projects" class="flex flex-col gap-8">
    <SectionTitle> Projects </SectionTitle>

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <Project
        v-for="(project, projectIndex) of projects"
        :key="projectIndex"
        :project="project"
      />
    </div>
  </section>
</template>




