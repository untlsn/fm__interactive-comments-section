<script lang="ts" setup>
  const props = defineProps<{
    selected: boolean,
    disabled?: boolean
  }>();

  const color = computed(() => props.selected ? '#4A479E' : '#C5C6EF');
</script>


<template>
  <button class="py-3 px-2" :class="{ 'hover:text-[#4A479E]': !disabled }">
    <slot />
  </button>
</template>

<style scoped>
button {
  color: v-bind(color)
}
</style>