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
    commentsStore.addComments(res.comments);
    userStore.$patch(res.currentUser);
  });




const changeScore = (id: number, value: 'plus'|'minus') => {
  const comment = commentsStore.comment(id);
  if (!comment) return;

  const old = userStore.scoreChanges[id] || 0;
  let newVal = 0;

  if (!(old == 1 && value == 'plus' || old == -1 && value == 'minus')) {
    newVal = value == 'plus' ? 1 : -1;
  }

  userStore.scoreChanges[id] = newVal;
  comment.score = comment.score - old + newVal;
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-[#F5F6FA] space-y-6">
    <img class="absolute top-0 right-0" :src="userStore.image.webp" alt="your avatar">
    <Comment
      v-for="comment in commentsStore.comments"
      :key="comment.id"
      v-bind="comment"
      @score-change="val => changeScore(comment.id, val)"
    >
      <div
        v-for="subcomment in comment.replies"
        :key="subcomment.id"
        class="pl-8 flex h-42 gap-8 max-w-200"
      >
        <hr class="w-1 h-full border-none bg-black opacity-10">
        <Comment 
          v-bind="subcomment"
          @score-change="val => changeScore(subcomment.id, val)"
        />
      </div>
    </Comment>
  </div>
</template>
