// Abstract implementation of Builder
export {};

interface Builder {
  buildPart(v: number): void;
}

class Product {
  constructor(public value: number) {}
}

class ConcreteBuilder implements Builder {
  private _value: number;

  get result() {
    return new Product(this._value);
  }

  buildPart(value: number) {
    this._value = value;
  }
}

class Director {
  constructor(public builder: Builder) {}

  construct() {
    this.builder.buildPart(1);
  }
}

const builder = new ConcreteBuilder();
const director = new Director(builder);

director.construct();

const product = builder.result;
console.log(product);
