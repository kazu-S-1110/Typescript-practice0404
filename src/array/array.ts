export default function arraySample(): void {
  // シンプルな型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123) 数値型だからできないよ
  console.log(colors)

  // 別の配列の型定義方法
  const even: Array<number> = [2, 4, 6, 8, 10]
  even.push(10)
  // even.push("dd") 文字列型だからできないよ
  console.log(even)

  // 合併型（Union）
  const ids: (string | number)[] = ['Lamy', 123]
  ids.push('Noel')
  ids.push(456)
  // ids.push(true) 真偽値だからできないよ
  console.log(ids)

  // 配列の型推論
  const generateSomeArray = () => {
    const _someArray = [] //any
    _someArray.push(123) //number[]
    _someArray.push('peko') //(string|number)[]
    return _someArray
  }
  const someArray = generateSomeArray()
  someArray.push(456) //型宣言（アノテーション）をしなくても型定義されている
  // someArray.push(true) 真偽値だからできない
  console.log(someArray)

  // イミュータブルな配列を作る(readonlyを付与する)
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push("git fetch") //追加不可
  // commands[2] = "git pull" //書き込み不可
  console.log(commands)
}
