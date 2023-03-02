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

// newPassport(tanhun);
// checkIn(flight, tanhun);

//Higher-Order-Function: argument is a function or return a new function

const oneWord = (str) => str.replace(/ /g, "").toLowerCase();

const upperFirstWord = (str) => {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = (str, fn) => {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

// transformer("javascript is the best!", upperFirstWord);
// transformer("javascript is the best!", oneWord);

// const greet = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// arrow function
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const geeterHey = greet("Hey");
// geeterHey("tanhun");
// geeterHey("jonas");

// greet("Hello")("tan");

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "tanhun");
lufthansa.book(635, "jonas");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
// book(23, "Sarah Williams"); // this sẽ ko trỏ về lufthansa nữa
// nên phải nói cho js biết this sẽ trỏ về đâu

// this trong js sẽ trỏ về đâu tùy thuộc vào các hàm có this đc gọi
// CALL METHOD
book.call(eurowings, 23, "Sarah"); // arg đầu tiên sẽ làm cho this trỏ về đó, các arg phía sau là các arg của book
book.call(lufthansa, 239, "Mary");

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");

// APPLY METHOD
// giống hệt call nma ko cần truyền list of arg sau this keyword
// mà truyền 1 array arg
// thường dùng call nhiều hơn
const flightData = [555, "George"];

book.apply(swiss, flightData);

// BIND METHOD
// return về function chứ ko chạy function đó với this trỏ về tham số truyền vào
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, "Steven");

const bookEW23 = book.bind(eurowings, 23); // khi gọi bookEW thì flightNum luôn là 23
bookEW23("tantan"); // ko can truyen flightNum nua
bookEW23("martha"); // ko can truyen flightNum nua

// With event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // ko quan tâm đến this, chỉ cần preset cho rate
// khi gọi addVAT thì rate luôn là 0.23

console.log(addVAT(100));
console.log(addVAT(300));
// khác với default param vì cách như trên sẽ tạo ra 1 function cụ thể hơn
// base on a more general function

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0, 23);
console.log(addVAT(300));
