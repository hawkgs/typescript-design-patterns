// Concrete implementation of Factory Method
export {};

enum PhoneModel {
  iPhoneX = 'X',
  iPhone8 = '8'
}

// Product
interface Phone {
  model: PhoneModel;
  screenSize: string;
}

// Concrete product 1
class IPhoneX implements Phone {
  model = PhoneModel.iPhoneX;
  screenSize = '6 inches';
}

// Concrete product 2
class IPhone8 implements Phone {
  model = PhoneModel.iPhone8;
  screenSize = '5 inches'
}

// Creator
interface PhoneCreator {
  createPhone(model: PhoneModel): Phone;
}

// Concrete creator
class Apple implements PhoneCreator {
  createPhone(model: PhoneModel) {
    switch (model) {
      case PhoneModel.iPhoneX:
        return new IPhoneX();
      case PhoneModel.iPhone8:
      default:
        return new IPhone8();
    }
  }
}

const apple = new Apple();

// IPhone8 { model: '8', screenSize: '5 inches' } IPhoneX { model: 'X', screenSize: '6 inches' }
console.log(
  apple.createPhone(PhoneModel.iPhone8),
  apple.createPhone(PhoneModel.iPhoneX)
);
