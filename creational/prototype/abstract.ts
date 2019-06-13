// Abstract implementation of Prototype
export {};

interface Prototype {
  clone(): Prototype;
}

class ConcretePrototype implements Prototype {
  constructor(public value: string) {}

  clone() {
    return new ConcretePrototype(this.value);
  }
}

class Client {
  constructor(public prototype: Prototype) {}

  operation() {
    const cloned = this.prototype.clone();
    console.log(cloned);
  }
}

const prototype = new ConcretePrototype('foo');
const client = new Client(prototype);

// ConcretePrototype { value: 'foo' }
client.operation();
