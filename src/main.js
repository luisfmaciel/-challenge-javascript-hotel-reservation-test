const Lakewood = require('./models/Lakewood');
const Bridgewood = require('./models/Bridgewood');
const Ridgewood = require('./models/Ridgewood.js');

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

exports.getCheapestHotel = getCheapestHotel
