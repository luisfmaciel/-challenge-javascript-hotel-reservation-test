const Hotel = require('./commons/Hotel');

class Ridgewood extends Hotel {
  constructor(customerType, daysOfTheWeek) {
    super(customerType, daysOfTheWeek);

    this._rating = 5;
    this._name = "Ridgewood";
    this._weekday = {
      "Regular": 220,
      "Rewards": 100,
    };
    this._weekend = {
      "Regular": 150,
      "Rewards": 40,
    };
  }
} 

module.exports = Ridgewood;
