// Abstract implementation of Singleton
export {};

class Singleton {
  static _instance: Singleton;

  static get instance() {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }
}
