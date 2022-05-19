const Lakewood = require('./models/Lakewood');
const Bridgewood = require('./models/Bridgewood');
const Ridgewood = require('./models/Ridgewood.js');

const test = "Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)";
const test1 = "Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)";
const test2 = "Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)";

function getCheapestHotel(input) { //DO NOT change the function's name.
    const hotels = [];
    let bestHotel = [];

    const lakewood = new Lakewood(getClientType(input), getDays(input));
    const bridgewood = new Bridgewood(getClientType(input), getDays(input));
    const ridgewood = new Ridgewood(getClientType(input), getDays(input));

    hotels.push(lakewood, bridgewood, ridgewood);

    const lowestFee = Math.min(...hotels.map((hotel) => hotel.calculateFees()));

    bestHotel = hotels.filter((hotel) => hotel.calculateFees() === lowestFee);

    if (bestHotel.length > 1) {
        const bestRating = Math.max(...bestHotel.map((hotel) => hotel.rating));

        bestHotel = bestHotel.filter((hotel) => hotel.rating === bestRating);
    }

    const cheapestHotel = bestHotel[0].name;

    return cheapestHotel;
}

function getDays(input) {
    const listOfDays = [];
    const extractDays = input.matchAll(/\((.*?)\)/g);
    for (let day of extractDays) {
        listOfDays.push(day[1]);
    }
    return listOfDays;
}

function getClientType(input) {
    return input.substring(0, input.indexOf(":"));
}

console.log(getCheapestHotel(test));
console.log(getCheapestHotel(test1));
console.log(getCheapestHotel(test2));

exports.getCheapestHotel = getCheapestHotel
