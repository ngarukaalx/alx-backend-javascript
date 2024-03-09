// Inheritance
import Building from './5-building';

// extents from Building
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // getter for sqft
  get sqft() {
    return this._sqft;
  }

  // getter for floors
  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
