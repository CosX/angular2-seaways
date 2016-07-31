export class Spawn {
  classname: string;
  rarity: number;
  direction: Direction;
  totalclasses: number;
  ticker: number;
}

export enum Direction {
    Upper,
    Lower,
}