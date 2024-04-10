<script lang="ts" setup>
import { withDefaults, defineProps, ref } from "vue";

const {
  array,
  typeSpeed,
  delay,
  start,
  caret,
  iterations,
} = withDefaults(
  defineProps<{
    array: string[];
    typeSpeed: number;
    delay: number;
    start: number;
    caret: string;
    iterations: number;
  }>(),
  {
    typeSpeed: 200,
    delay: 9999,
    start: 0,
    caret: "cursor",
    iterations: 0,
  }
);

const emit = defineEmits(["typed"]);

const typeValue = ref("");
const count = ref(-1);
const typeStatus = ref(false);
const arrayIndex = ref(0);
const charIndex = ref(0);
const caretVisible = ref(true);

function typewriter() {
  if (count.value === -1) {
    count.value = 0;
    setTimeout(typewriter, delay);
    return;
  }
  
  if (charIndex.value < array[arrayIndex.value].length) {
    caretVisible.value = true;
    if (!typeStatus.value) {
      typeStatus.value = true;
    }

    typeValue.value += array[arrayIndex.value].charAt(charIndex.value);
    charIndex.value += 1;
    setTimeout(typewriter, typeSpeed);
  } else {
    caretVisible.value = false;
    count.value += 1;

    onTyped(array[arrayIndex.value]);

    if (count.value === array.length) {
      if (iterations > 0) {
        return (typeStatus.value = false);
      }
    }

    typeStatus.value = false;
  }
}

function onTyped(typedString: string) {
  emit("typed", typedString);
}
setTimeout(typewriter, start);
</script>

<template>
  <div class="is-typed">
    <slot />
    <span class="typed">{{ typeValue }}</span>
    <span  v-if="caretVisible" :class="caret + ' ' + { typing: typeStatus }">&nbsp;</span>
  </div>
</template>

<style scoped>

.is-typed span.cursor.typing {
  animation: none;
}
.is-typed span.cursor {
  display: inline-block;
  width: 12px;
  background-color: rgb(146, 146, 146);
}
</style>