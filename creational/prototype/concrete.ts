// Abstract implementation of Prototype
export {};

// Prototype
interface File {
  clone(): File;
}

// Concrete prototype
class Document implements File {
  constructor(public text: string) {}

  clone() {
    return new Document(this.text);
  }
}

// Client
class Editor {
  constructor(public file: File) {}

  preview() {
    const cloned = this.file.clone();
    console.log(cloned);
  }
}

const doc = new Document('lorem ipsum');
const editor = new Editor(doc);

// Document { text: 'lorem ipsum' }
editor.preview();
