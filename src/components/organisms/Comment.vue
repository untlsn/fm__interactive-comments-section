<script lang="ts" setup="">
import { Comment, User } from '~/types/data';
import PlusMinus from '~/types/plusMinus';

defineProps<{
  id: number,
  content: string,
  createdAt: string,
  score: number,
  user: User,
  replies?: Comment[]
  replyingTo?: string,
  scoreChange: PlusMinus
}>();

const emit = defineEmits<{
  (emit: 'scoreChange', value: PlusMinus): void
}>();

const changeScore = (value: PlusMinus) => {
  emit('scoreChange', value);
};

</script>

<template>
  <article v-bind="$attrs" class="max-w-200 bg-white p-8 rounded flex gap-4">
    <div class="flex flex-col bg-[#F5F5FD] text-[#5457B6] font-bold w-20 h-24 items-center justify-center rounded-xl">
      <PlusMinusButton 
        :selected="scoreChange == PlusMinus.plus" 
        @click="changeScore(PlusMinus.plus)"
      >
        <Plus />
      </PlusMinusButton>
      {{ score }}
      <PlusMinusButton 
        :selected="scoreChange == PlusMinus.minus" 
        @click="changeScore(PlusMinus.minus)"
      >
        <Minus />
      </PlusMinusButton>
    </div>
    <div>
      <header class="flex items-center gap-4">
        <img :src="user.image.webp" alt="avatar" class="h-8">
        <div class="text-[#313741] font-bold">
          {{ user.username }}
        </div>
        <div class="flex-1 opacity-50">
          {{ createdAt }}
        </div>
        <button class="text-[#5457B6] flex items-center gap-2 font-bold">
          <img src="/images/icon-reply.svg" alt="reply">
          reply
        </button>
      </header>
      <p>{{ content }}</p>
    </div>
  </article>
  <slot />
</template>
