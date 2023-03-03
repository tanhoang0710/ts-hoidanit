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

console.dir(booker);
