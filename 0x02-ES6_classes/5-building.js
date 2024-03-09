// abstract class
export default class Building {
  constructor(sqft) {
    // class that extends form this class must iplement this method
    if (this.constructor !== Building) {
      if (!this.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  // getter
  get sqft() {
    return this._sqft;
  }

  // setter
  set sqft(newSqft) {
    if (typeof newSqft === 'number') {
      this._sqft = newSqft;
    } else {
      throw new Error('squarefeet must be a number');
    }
  }
}
