enum PlusMinus {
  none = 'none',
  plus = 'plus',
  minus = 'minus',
}

const plusMinusArr = ['minus', 'none', 'plus'] as PlusMinus[];

export const plusMinusFromNumber = (num: number) => plusMinusArr[num+1];

export default PlusMinus;