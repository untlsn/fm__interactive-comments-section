<script lang="ts" setup>
import initChangeScore from '~/helpers/initChangeScore';
import useUser from '~/store/useUser';
import { Comment, User } from '~/types/data';
import { plusMinusFromNumber } from '~/types/plusMinus';

const props = defineProps<{
  id: number,
  content: string,
  createdAt: string,
  score: number,
  user: User,
  replies?: Comment[]
  replyingTo?: string,
}>();

const userStore = useUser();


const changeScore = initChangeScore(props.id);

const scoreChange = computed(() => userStore.scoreChanges[props.id]);
const itsYou = computed(() => props.user.username == userStore.username);
const replying = ref(false);

</script>

<template>
  <article v-bind="$attrs" class="max-w-200 bg-white p-8 rounded flex gap-4">
    <CommentButtons 
      :score="score" 
      :score-change="plusMinusFromNumber(scoreChange)" 
      :disabled="itsYou" 
      @change:score="changeScore"
    />
    <div>
      <header class="flex items-center gap-4">
        <img :src="user.image.webp" alt="avatar" class="h-8">
        <p class="text-[#313741] font-bold">
          {{ user.username }}
        </p>
        <p v-if="itsYou" class="bg-main text-white text-sm px-2 rounded">
          you
        </p>
        <p class="flex-1 opacity-50">
          {{ createdAt }}
        </p>
        <template v-if="itsYou">
          <ImageButton src="/images/icon-delete.svg" alt="delete" class="!text-warn">
            delete
          </ImageButton>
          <ImageButton src="/images/icon-edit.svg" alt="edit">
            edit
          </ImageButton>
        </template>
        <ImageButton
          v-else
          src="/images/icon-reply.svg"
          alt="reply"
          @click="replying = !replying"
        >
          reply
        </ImageButton>
      </header>
      <p>{{ content }}</p>
    </div>
  </article>
  <ReplyBar v-if="replying" />
  <slot />
</template>
