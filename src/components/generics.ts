export default function genericsBasicSample() {
  // ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = '';
    for (let i = 0; i < array.length; i++) {
      result += array[i] + initialValue;
    }
    return result;
  };
  console.log(stringReduce(['May', 'the', 'force', 'be', 'with', 'you'], ' '));
}
