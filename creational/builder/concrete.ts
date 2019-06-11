// Concrete implementation of Builder

// Abstract builder
interface MemoryBuilder {
  setSize(v: number): void;
  setDDR(v: number): void;
}

// Product
class Memory {
  constructor(
    public size: number,
    public ddr: number,
    public busClock: number
  ) {}
}

// Concrete builder
class CrucialBuilder implements MemoryBuilder {
  private _size: number;
  private _ddr: number;

  getMemory() {
    let busClock = 400;
    if (busClock >= 4) {
      busClock = 1600;
    } else if (busClock >= 3) {
      busClock = 800;
    }

    return new Memory(this._size, this._ddr, busClock);
  }

  setSize(value: number) {
    this._size = value;
  }

  setDDR(value: number) {
    this._ddr = value;
  }
}

// Director
class MemoryDirector {
  constructor(public builder: MemoryBuilder) {}

  construct() {
    this.builder.setSize(8);
    this.builder.setDDR(4);
  }
}

const builder = new CrucialBuilder();
const director = new MemoryDirector(builder);

director.construct();

const product = builder.getMemory();
console.log(product);
