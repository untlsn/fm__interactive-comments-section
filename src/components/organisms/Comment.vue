<script lang="ts" setup="">
import initChangeScore from '~/helpers/initChangeScore';
import useComments from '~/store/useComments';
import useUser from '~/store/useUser';
import { Comment, User } from '~/types/data';
import PlusMinus, { plusMinusFromNumber } from '~/types/plusMinus';

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
        <p v-if="itsYou" class="bg-[#5357B4] text-white text-sm px-2">
          you
        </p>
        <p class="flex-1 opacity-50">
          {{ createdAt }}
        </p>
        <template v-if="itsYou">
          <ImageButton src="/images/icon-delete.svg" alt="reply" class="text-[#ED6368]">
            delete
          </ImageButton>
          <ImageButton src="/images/icon-edit.svg" alt="reply">
            edit
          </ImageButton>
        </template>
        <ImageButton v-else src="/images/icon-reply.svg" alt="reply">
          reply
        </ImageButton>
      </header>
      <p>{{ content }}</p>
    </div>
  </article>
  <slot />
</template>
