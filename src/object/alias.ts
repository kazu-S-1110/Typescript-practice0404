export default function typeAliasSample() {
  // 型エイリアスの定義方法
  type Country = {
    capital: string
    language: string
    name:string
  }
  const japan: Country = {
    capital: "Tokyo",
    language: "Japanese",
    name:"Japan"
  }
  console.log(japan)
}