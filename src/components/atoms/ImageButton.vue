<script lang="ts" setup>
const props = defineProps<{
  src: string,
  alt: string
}>();
</script>


<template>
  <button class="text-main flex items-center gap-2 font-bold capitalize hover:opacity-40">
    <img v-bind="props">
    <slot />
  </button>
</template>