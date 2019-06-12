// Abstract implementation of Factory Method
export {};

interface Product {
  value: unknown;
}

class ConcreteProduct implements Product {
  value = 42;
}

interface Creator {
  factoryMethod(): Product;
}

// or it can be abstract class which returns the ConcreteProduct by default
//
// abstract class Creator {
//   factoryMethod() {
//     return new ConcreteProduct();
//   }
// }

class ConcreteCreator implements Creator {
  factoryMethod() {
    return new ConcreteProduct();
  }
}

const creator = new ConcreteCreator();
const product = creator.factoryMethod();

// ConcreteProduct { value: 42 }
console.log(product);
