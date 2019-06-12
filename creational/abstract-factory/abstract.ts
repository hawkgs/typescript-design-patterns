// Abstract implementation of Abstract Factory
export {};

abstract class AbstractProduct {
  abstract value: unknown;
}

interface AbstractFactory<T extends AbstractProduct> {
  createProduct(): T;
}

class ConcreteProduct extends AbstractProduct {
  value = 1;
}

class ConcreteFactory implements AbstractFactory<ConcreteProduct> {
  createProduct() {
    return new ConcreteProduct();
  }
}

class Client {
  factory = new ConcreteFactory();
}

// Prints: ConcreteProduct { value: 0 }
console.log(new Client().factory.createProduct());
