export default function genericsBasicSample() {
  // ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i] + initialValue;
    }
    return result;
  };
  console.log(stringReduce(['May', 'the', 'force', 'be', 'with', 'you'], ' '));

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i] + initialValue;
    }
    return result;
  };
  console.log(
    numberReduce(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      0
    )
  );

  type GenericReduce<T> = {
    (array: T[], initialValue: T): T;
  };

  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i] + initialValue;
    }
    return result;
  };
  console.log(genericStringReduce(['あ', 'か', 'さ', 'た', 'な', 'え？'], ' '));

  const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i] + initialValue;
    }
    return result;
  };
  console.log(numberReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
}
