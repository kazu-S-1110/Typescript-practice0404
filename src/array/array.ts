export default function arraySample() {
  // シンプルな型定義
  const colors: string[] = ["red", "blue"]
  colors.push("yellow")
  // colors.push(123) 数値型だからできないよ
  console.log(colors)

  // 別の配列の型定義方法
  const even: Array<number> = [2, 4, 6, 8, 10]
  even.push(10)
  // even.push("dd") 文字列型だからできないよ
  console.log(even)



}