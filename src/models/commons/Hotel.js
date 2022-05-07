const { weekday, weekend } = require('../../util/daysOfTheWeek');
const { InputError } = require('../../errors/InputError');

class Hotel {
  constructor(customerType, daysOfTheWeek) {
    this._customerType = customerType;
    this._daysOfTheWeek = daysOfTheWeek;
  }
  
  get rating() {
    return this._rating;
  }

  get name() {
    return this._name
  }
  
  calculateFees() {
    this.checkInput();

    let weekendDays = this._daysOfTheWeek.filter((day) => day === 'sat' || day === 'sun').length;

    const feesWeekday = this._weekday[this._customerType] * (this._daysOfTheWeek.length - weekendDays);
    const feesWeekend = this._weekend[this._customerType] *  weekendDays;
    const fees = feesWeekday + feesWeekend; 

    return fees;
  }

  checkInput() {
    this._daysOfTheWeek.forEach((day) => {
      if (!weekday.includes(day) && !weekend.includes(day) 
        || this._customerType !== Object.keys(this._weekday)[0]
        && this._customerType !== Object.keys(this._weekday)[1]) {
        throw new InputError();
      }
    });
  }
}
module.exports = Hotel;
