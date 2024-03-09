// class implementation
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // return size when class is cast into a number
  valueOf() {
    return this._size;
  }

  // return location when class is cast into a string
  toString() {
    return this._location;
  }
}
