// extents class car
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(motor, color, brand);
    this._range = range;
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    return new Car();
  }
}
