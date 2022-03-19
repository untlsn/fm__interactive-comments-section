<script lang="ts" setup>
import PlusMinus from '~/types/plusMinus';

defineProps<{
  score: number,
  scoreChange: PlusMinus
}>();

defineEmits<{
  (emit: 'change:score', value: PlusMinus): void
}>();
</script>


<template>
  <div class="flex flex-col bg-[#F5F5FD] text-[#5457B6] font-bold w-20 h-24 items-center justify-center rounded-xl">
    <PlusMinusButton 
      :selected="scoreChange == PlusMinus.plus" 
      @click="$emit('change:score', PlusMinus.plus)"
    >
      <Plus />
    </PlusMinusButton>
    {{ score }}
    <PlusMinusButton 
      :selected="scoreChange == PlusMinus.minus" 
      @click="$emit('change:score', PlusMinus.minus)"
    >
      <Minus />
    </PlusMinusButton>
  </div>
</template>