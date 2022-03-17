<script setup lang="ts">
import { Data } from '~/types/data';
import useComments from '~/store/useComments';
import useUser from '~/store/useUser';
import Comment from '~/components/organisms/Comment.vue';

const commentsStore = useComments();
const userStore = useUser();

fetch('/data.json')
  .then(res => res.json())
  .then((res: Data) => {
    commentsStore.$patch({ comments: res.comments });
    userStore.$patch(res.currentUser);
  });
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-[#F5F6FA] space-y-6">
    <img class="absolute top-0 right-0" :src="userStore.image.webp" alt="your avatar">
    <Comment v-for="comment in commentsStore.comments" :key="comment.id" v-bind="comment" />
  </div>
</template>
