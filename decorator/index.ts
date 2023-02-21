// Closure
// Nghĩa là function return 1 function
function test(): Function {
  return function (a: number, b: number) {
    return a + b;
  };
}

console.log(test()(1, 2));
