import { defineStore } from 'pinia';
import { User } from '~/types/data';

const useUser = defineStore('user', {
  state: () => ({
    image: {
      png: '',
      webp: '',
    },
    username: '',
    scoreChanges: {} as Record<string, number>,
  }),
});

export default useUser;
