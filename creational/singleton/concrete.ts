// Concrete implementation of Singleton
export {};

class Logger {
  id: number;
  static _instance: Logger;

  constructor() {
    this.id = Math.round(Math.random() * 100);
  }

  static get instance() {
    if (!Logger._instance) {
      Logger._instance = new Logger();
    }
    return Logger._instance;
  }
}

const logger = Logger.instance;
const logger2 = Logger.instance;

console.log(logger.id, logger2.id);
