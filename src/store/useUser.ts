import { defineStore } from 'pinia';

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
