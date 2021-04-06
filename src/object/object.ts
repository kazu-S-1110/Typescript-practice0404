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

  // オプショナルとreadonly
  const character: {
    age?: number 
    readonly lastName: string　//readonlyは上書き不可
    firstName: string
    gender: "male" | "female"
  } = {
    age: 25,
    lastName: "Lamy",
    firstName: "Yukihana",
    gender:"female"
  }
  character.age = 30
  // character.lastName = "Noel"  readonlyのため不可
  console.log(character)

  // インデックスシグネチャ
  const capitals: {
    [countryName:string] :string
  } = {
    Japan: "Tokyo",
    USA:"Washington,DC"
  }
  capitals.China = "Beijing"

  console.log(capitals)
}
