import { defineStore } from 'pinia';
import { Comment } from '~/types/data';

const useComments = defineStore('comments', {
  state: () => ({ 
    comments: [] as Comment[],
  }),
  getters: {
    comment: (store) => (id: number) => store.comments.find(it => it.id == id),
  },
});

export default useComments;
