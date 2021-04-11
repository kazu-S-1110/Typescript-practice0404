export default function typeAliasSample(): void {
  // 型エイリアスの定義方法
  type Country = {
    capital: string
    language: string
    name: string
  }
  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }
  console.log(japan)

  const america: Country = {
    capital: 'Washington,D.C.',
    language: 'Eng',
    name: 'United State of America',
  }
  console.log(america)

  // 合併型(union)と交差型(intersection)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }
  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }
  // 合併型...KnightまたはWizardの型を持てる
  type Adventurer = Knight | Wizard
  //交差型...KnightかつWizardの型を持てる
  type Paladin = Knight & Wizard

  const adventurer1: Adventurer = {
    hp: 100,
    mp: 40,
    weapon: 'stuff',
    magicSkill: 'fire',
  }
  const adventurer2: Adventurer = {
    hp: 100,
    sp: 40,
    weapon: 'spire',
    swordSkill: 'slash',
  }
  const paladin: Paladin = {
    hp: 300,
    mp: 100,
    sp: 30,
    weapon: 'sword',
    swordSkill: 'slash',
    magicSkill: 'thunder',
  }
  console.log(adventurer1, adventurer2, paladin)
}
