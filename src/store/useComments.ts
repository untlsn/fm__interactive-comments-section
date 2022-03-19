import { defineStore } from 'pinia';
import { Comment } from '~/types/data';

const useComments = defineStore('comments', {
  state: () => ({ 
    comments: [] as Comment[],
    flatComments: [] as Comment[],
  }),
  getters: {
    comment: (store) => (id: number) => store.flatComments.find(it => it.id == id),
  },
  actions: {
    addComments(comments: Comment[]) {
      this.comments = comments;
      this.flatComments = [
        ...comments,
        ...comments.filter(it => it.replies).flatMap(it => it.replies!),
      ];
    },
  },
});

export default useComments;
