"use strict";
const flight = "LH234";
const tanhun = {
  name: "tanhun",
  passport: 123,
};

const checkIn = (flightNum, passenger) => {
  flightNum = "LH999";
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 123) {
    alert("Checkin");
  } else {
    alert("Wrong passport");
  }
};

// checkIn(flight, tanhun);
// console.log(flight);
// console.log(tanhun);

const newPassport = (person) => {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(tanhun);
checkIn(flight, tanhun);
