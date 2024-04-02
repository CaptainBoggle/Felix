<template>
  <PageWrapper class="text-secondary flex flex-col gap-2 font-terminal" page-id="Animation">
    <div v-if="timers.history" class="flex flex-col gap-2">
      <div class="flex gap-4">
        <div class="font-bold">{{ BASE_PROMPT }}</div>
        <div>pwd</div>
      </div>

      <div>/Users/boggle</div>

      <div class="mobile-hidden">
        <div class="flex gap-4">
          <div class="font-bold">{{ BASE_PROMPT }}</div>
          <div>git clone https://github.com/captainboggle/felix</div>
        </div>

        <div>Cloning into 'felix'...</div>
        <div>remote: Enumerating objects: 72, done.</div>
        <div>remote: Counting objects: 100% (72/72), done.</div>
        <div>remote: Compressing objects: 100% (55/55), done.</div>
        <div>remote: Total 72 (delta 18), reused 61 (delta 10), pack-reused 0</div>
        <div>Receiving objects: 100% (72/72), 472.53 KiB | 102.26 MiB/s, done.</div>
        <div>Resolving deltas: 100% (18/18), done.</div>
      </div>

      <div class="flex gap-4">
        <div class="font-bold">{{ BASE_PROMPT }}</div>
        <div>cd felix && ls</div>
      </div>

      <div>LICENSE assets/ package.json run.sh
        README.md components/ pages/ tailwind.config.ts
        app.vue nuxt.config.ts public/ tsconfig.json</div>

      <div class="flex gap-4">
        <div class="font-bold">{{ BASE_PROMPT }}</div>
        <!-- <Typing :delay="500" :disable-caret-after="0" :speed="10">ckear</Typing> -->
        <VueWriter :array="['ckear']" :delay=500 :type-speed="80" />

      </div>

      <div v-if="timers.typeClear">fish: Unknown command: ckear</div>

      <div v-if="timers.typeClear" class="flex gap-4">
        <div class="font-bold">{{ BASE_PROMPT }}</div>
        <VueWriter :array="['clear']" :delay=500 :type-speed="120" />
      </div>
    </div>

    <div v-if="!timers.history" class="flex gap-4">
      <div class="font-bold">{{ BASE_PROMPT }}</div>
      <VueWriter :array="['./run.sh']" :delay=500 :type-speed="90" />
    </div>

    <div v-show="timers.notExecutable">
      fish: Unknown command. './run.sh' exists but is not an executable file.
    </div>

    <div v-if="timers.notExecutable" class="flex gap-4">
      <div class="font-bold">{{ BASE_PROMPT }}</div>
      <VueWriter :array="['chmod +x run.sh && ./run.sh']" :delay=800 :type-speed="90" class="mobile-hidden" />
      <VueWriter :array="['chmod +x run.sh; ./run.sh']" :delay=800 :type-speed="90" class="mobile-only" />
    </div>

    <div v-show="timers.firstLog">Server starting...</div>
    <div v-show="timers.secondLog">Server listening on 87.121.73.26:443</div>
    <div v-show="timers.firstLog" class="bg-secondary h-[1em] w-px"></div>
  </PageWrapper>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import PageWrapper from "@/components/PageWrapper.vue";
import VueWriter from "@/components/Typing.vue";

const emit = defineEmits(["end-animation"]);

const BASE_PROMPT = "root@boggle ⋊> ~";

type ToBoolean<T> = {
  [K in keyof T]: boolean;
};

// Takes 10 seconds, not hugely annoying I hope
const TIMES: Record<string, { delay: number; defaultValue?: boolean }> = {
  typeClear: { delay: 1200 },
  history: { delay: 3000, defaultValue: true },
  notExecutable: { delay: 4500 },
  firstLog: { delay: 7800 },
  secondLog: { delay: 9400 }
};

const timers = reactive(
  Object.entries(TIMES).reduce(
    (acc, [key, value]) => {
      acc[key as keyof typeof TIMES] = value.defaultValue || false;
      return acc;
    },
    {} as ToBoolean<typeof TIMES>
  )
);
onMounted(() => {
  for (const [key, value] of Object.entries(TIMES)) {
    const { delay, defaultValue = false } = value;
    setTimeout(() => (timers[key as keyof typeof timers] = !defaultValue), delay);
  }

  setTimeout(() => emit("end-animation"), 10000);
});
</script>
<style scoped>
@media (orientation: portrait) {
  .text-secondary {
    font-size: 0.7rem;
  }

  .mobile-hidden {
    display: none;
  }
}

@media (orientation: landscape) {
  .mobile-only {
    display: none;
  }
}
</style>