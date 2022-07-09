import { directions, type Direction } from "./Direction";
import type { Position } from "./Position";
export class SnakeBodyPart {
  constructor(public position: Position) {
  }
  copy(): SnakeBodyPart {
    return new SnakeBodyPart(this.position);
  }
}
export class Snake {
  body: SnakeBodyPart[] = [];
  direction: Direction;
  constructor(position: Position) {
    this.body = [new SnakeBodyPart(position)];
    this.direction = directions.right;
  }
  grow() {
    this.body.push(new SnakeBodyPart(this.head.position));
  }
  changeDirection(direction: Direction) {
    this.direction = direction;
  }
  update() {
    const head = this.head;
    this.body.shift()!;
    const newPosition = {
      row: head.position.row + this.direction[0],
      col: head.position.col + this.direction[1]
    };
    this.body.push(new SnakeBodyPart(newPosition));
  }
  forEach(callback: (bodyPart: SnakeBodyPart) => void) {
    this.body.forEach(callback);
  }
  get head(): SnakeBodyPart {
    return this.body[this.body.length - 1];
  }

}