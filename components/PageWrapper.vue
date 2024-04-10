<template>
  <section ref="pageRef" class="page relative mx-4 h-[100dvh] overflow-hidden py-4 2xl:mx-40 2xl:py-28">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

type PageProps = { pageId: string };

const { pageId } = defineProps<PageProps>();

const activePage = ref("landing");

function isVisible(el: Element) {
  const rect = el.getBoundingClientRect();

  const htmlHeight = window.innerHeight || document.documentElement.clientHeight;
  const htmlWidth = window.innerWidth || document.documentElement.clientWidth;

  const verticalVisible = rect.top >= -1 && rect.bottom <= htmlHeight + 2;
  const horizontalVisible = rect.left >= -1 && rect.right <= htmlWidth + 2;

  return verticalVisible && horizontalVisible;
}


const pageRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  async function onScroll() {
    // Wait for scroll to complete
    await new Promise((res) => setTimeout(res, 700));

    if (isVisible(pageRef.value!)) {
      activePage.value = pageId;
    }
  }

  function onHashChange(e: HashChangeEvent) {
    const hash = e.newURL.split("#")[1];
    if (!hash) return;
    activePage.value = hash;
  }

  window.addEventListener("wheel", onScroll, { passive: true });
  window.addEventListener("touchstart", onScroll, { passive: true });
  window.addEventListener("touchmove", onScroll, { passive: true });
  window.addEventListener("hashchange", onHashChange, { passive: true });
});

defineExpose({ pageRef });
</script>