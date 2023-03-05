const secureBooking = () => {
  let passengerCount = 0;

  return () => {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
booker();

// A closure is the closed-over VARIABLE ENVIRONMENT if the execution context IN WHICH A FUNCTION WAS CREATED,
// even AFTER that execution context is gone
// # Less formal

// -> A closure gives a function access to all the variables OF ITS PARENT FUNCTION,
// even AFTER that parent function has returned. The function keeps a REFERENCE to its outer scope
// which PRESERVES the scope chain throughout time
// # Less formal

// -> A closure makes sure that a function doesn't loose connection to VARIABLES THAT EXISTS AT THE FUNCTION'S BIRTHPLACE

// console.dir(booker);

// # Example 1 // Kể cả khi ko return function nó vẫn tạo ra closure
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 123;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

h();
f();

console.dir(f);

// # Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passensers`);
  }, wait * 1000);

  console.log(`Will start boarding on ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3);

// Coding Challenge #2
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", () => {
    header.style.color = "blue";
  });
})();
