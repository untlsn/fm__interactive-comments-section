import { defineStore } from 'pinia';
import { User } from '~/types/data';

const useUser = defineStore('user', {
  state: (): User => ({
    image: {
      png: '',
      webp: '',
    },
    username: '',
  }),
});

export default useUser;
