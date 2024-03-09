// import class currency
import Currency from './3-currency'; // eslint-disable-line no-unused-vars

// export class
export default class pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter for amount
  get amount() {
    return this._amount;
  }

  // getttr for currency
  get currency() {
    return this._currency;
  }

  // setter for amount
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // setter for currency
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // returns attribute in the format, amount currency_name (currency_code)
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Return amount multipied by conversion
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw new Error('amount or conversionrate must be numbers');
  }
}
