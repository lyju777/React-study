interface ChaperInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements ChaperInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log(`${this.name} 이동속도: ${this.moveSpeed}`);
  }
}
