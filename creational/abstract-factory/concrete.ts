// Concrete implementation of Abstract Factory

// Abstract product 1
abstract class CPU {
  abstract frequency: number;
  abstract cores: number;
}

// Abstract product 2
abstract class GPU {
  abstract memory: number;
}

// Abstract factory
interface ComponentFactory<
  T extends CPU,
  U extends GPU
> {
  createCPU(): T;
  createGPU(): U;
}

// Concrete product 1
class IntelXeon extends CPU {
  frequency = 2;
  cores = 8;
}

// Concrete product 2
class IntelXe extends GPU {
  memory = 8;
}

// Concrete product 1
class AmdPhenom extends CPU {
  frequency = 3;
  cores = 4;
}

// Concrete product 2
class AmdRadeon extends GPU {
  memory = 4;
}

// Concrete factory 1
class IntelFactory implements ComponentFactory<IntelXeon, IntelXe> {
  createCPU() {
    return new IntelXeon();
  }

  createGPU() {
    return new IntelXe();
  }
}

// Concrete factory 2
class AmdFactory implements ComponentFactory<AmdPhenom, AmdRadeon> {
  createCPU() {
    return new AmdPhenom();
  }

  createGPU() {
    return new AmdRadeon();
  }
}

// Client
class Manufacturer {
  intel = new IntelFactory();
  amd = new AmdFactory();

  buildIntelPC() {
    return [
      this.intel.createCPU(),
      this.intel.createGPU()
    ];
  }

  buildAmdPC() {
    return [
      this.amd.createCPU(),
      this.amd.createGPU()
    ];
  }
}

const lenovo = new Manufacturer();

console.log(lenovo.buildIntelPC());
console.log(lenovo.buildAmdPC());
