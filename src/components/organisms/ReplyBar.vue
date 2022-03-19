<script lang="ts" setup>import useUser from '~/store/useUser';

const userStore = useUser();

const emit = defineEmits<{
  (emit: 'reply', value: string): void,
}>();

const text = ref();
const reply = () => {
  emit('reply', text.value);
  text.value = '';
};
</script>


<template>
  <div class="max-w-200 w-full flex gap-4 bg-white p-4 rounded-xl">
    <img :src="userStore.image.webp" alt="user image" class="h-12">
    <textarea v-model="text" class="flex-1 resize-none h-26 border-1 rounded-xl p-2 hover:border-gray-600" />
    <button class="bg-main text-white h-12 w-24 rounded-xl uppercase font-bold hover:opacity-30" @click="reply">
      reply
    </button>
  </div>
</template>