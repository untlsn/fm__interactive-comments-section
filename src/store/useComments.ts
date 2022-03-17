import { defineStore } from 'pinia';
import { Comment } from '~/types/data';

const useComments = defineStore('comments', {
  state: (): { comments: Comment[] } => ({ comments: [] }),
});

export default useComments;
