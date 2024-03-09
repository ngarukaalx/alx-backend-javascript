// classes methods
// Each attribute must be stored
// in an “underscore” attribute version (ex: name is stored in _name)
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  set name(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    // returns attributes in the format name (code)
    return `${this._name} (${this._code})`;
  }
}
