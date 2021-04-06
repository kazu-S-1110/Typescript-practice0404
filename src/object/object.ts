export default function objectSample() {
  const a: object = {
    name: "Jack",
    age:20
  }
  // a.name  <=アクセスできない、型を指定してあげる必要あり

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name:string
  } = {
    language: "Jap",
    name:"Japan"
  }
  console.log(country)
  country = {
    language: "En",
    name:"USA"
  }
  console.log(country)
}
