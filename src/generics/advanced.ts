export default function genericsAdvancedSample() {
  //map関数のシグネチャ
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[];

  const mapStringToNumbers: Map<string, number> = (array, fn) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      result[i] = fn(item);
    }
    return result;
  };
  const numbers = mapStringToNumbers(['123', '456', '789'], (item) =>
    Number(item)
  );
  console.log(numbers);

  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      result[i] = fn(item);
    }
    return result;
  };
  const strings = mapNumbersToStrings(numbers, (item) => String(item));
  console.log(strings);
}
