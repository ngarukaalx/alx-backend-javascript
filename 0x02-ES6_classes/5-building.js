// abstract class
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this.checkEvacuationWarningMessage();
  }

  // class that extends form this class must iplement this method
  checkEvacuationWarningMessage() {
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
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
