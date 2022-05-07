const Hotel = require('./commons/Hotel');

class Bridgewood extends Hotel {
  constructor(customerType, daysOfTheWeek) {
    super(customerType, daysOfTheWeek);

    this._name = "Bridgewood";
    this._rating = 4;
    this._weekday = {
      "Regular": 160,
      "Rewards": 110,
    };
    this._weekend = {
      "Regular": 60,
      "Rewards": 50,
    };
  }
} 

module.exports = Bridgewood;
