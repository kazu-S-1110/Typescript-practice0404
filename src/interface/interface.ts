interface Bread {
  cal: number;
}
interface Bread {
  type: string;
}
const francePan: Bread = {
  //interfaceは勝手に統合されるため拡張性には優れているが、拡張されたくないケースでは不適格。（例えばアプリケーションとか）
  cal: 600,
  type: 'hard',
};

// typeAliasで表現してみる
type MaboDofu = {
  cal: number;
  spicy: number;
};
type Rice = {
  cal: number;
  gram: number;
};

type MaboDon = MaboDofu & Rice; //交差型（intersection）
type MaboMabo = MaboDofu | Rice; //合併型（union）

const maboDon: MaboDon = {
  cal: 700,
  spicy: 13,
  gram: 500,
};
const mabomabo: MaboMabo = {
  cal: 300,
  gram: 200,
};
