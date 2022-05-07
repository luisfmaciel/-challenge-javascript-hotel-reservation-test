const Hotel = require('./commons/Hotel');

class Lakewood extends Hotel {
  constructor(customerType, dayOfTheWeek) {
    super(customerType, dayOfTheWeek);

    this._rating = 3;
    this._name = "Lakewood";
    this._weekday = {
      "Regular": 110,
      "Rewards": 80,
    };
    this._weekend = {
      "Regular": 90,
      "Rewards": 80,
    };
  }
} 

module.exports = Lakewood;
