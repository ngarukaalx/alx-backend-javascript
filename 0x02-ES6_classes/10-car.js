// implementation of car class

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // return a new object of the class.
  cloneCar() {
    const current = this;
    return Object.assign(Object.create(Object.getPrototypeOf(current)), {
      _brand: undefined,
      _motor: undefined,
      _color: undefined,
    });
  }
}
