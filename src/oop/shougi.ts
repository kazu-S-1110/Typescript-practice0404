class Game {}

type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Player = 'first' | 'second';

// 駒の位置を表すクラス
class Position {
  constructor(private suji: Suji, private dan: Dan) {}

// パラメータに渡された位置と現在の位置を比較するメソッド
  distanceFrom(position: Position, player: Player) {
    if(player === "first") {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan:Math.abs(Number(position.dan) - Number(this.dan))
      }
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -(Math.abs(Number(position.dan) - Number(this.dan))) //段（縦の位置）は正負反転
      }
    }
  }
  
}

abstract class Piece {
  // Pieceクラスとサブクラスでアクセスできる
  protected position: Position;

  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan);
  }

  // メソッドの定義
  // 駒の移動用のメソッド
  moveTo(position: Position) {
    this.position = position;
  }
  // 移動できるかどうかを判定するメソッド
  abstract canMoveTo(position: Position, player: Player): boolean; //メソッドにもabstractを付与できる。継承したクラスで使わせるため
}

class Osho extends Piece {
  //canMoveToメソッドを具体的に実装する
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return (distance.suji < 2 && distance.dan < 2) 
  }
}
