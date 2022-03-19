import useComments from '~/store/useComments';
import useUser from '~/store/useUser';
import PlusMinus from '~/types/plusMinus';

const initChangeScore = (id: number) => {
  const userStore = useUser();
  const commentsStore = useComments();

  return (value: PlusMinus) => {
    const comment = commentsStore.comment(id);
    if (!comment) return;
  
    const old = userStore.scoreChanges[id] || 0;
    let newVal = 0;
  
    if (!(old == 1 && value == PlusMinus.plus || old == -1 && value == PlusMinus.minus)) {
      newVal = value == 'plus' ? 1 : -1;
    }
  
    userStore.scoreChanges[id] = newVal;
    comment.score = comment.score - old + newVal;
  };
};

export default initChangeScore;