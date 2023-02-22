// Closure
// Nghĩa là function return 1 function
// function test(): Function {
//   return function (a: number, b: number) {
//     return a + b;
//   };
// }

// console.log(test()(1, 2));

// function mul(x: number) {
//   return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
//     // gán ra ngoài
//     const method = descriptor.value;

//     descriptor.value = (...args: any[]) => {
//       return x * method(...args);
//     };
//   };
// }

//descriptor => thong tin cua method, property ... noi minh dat vao

// @Controller('test') Class Decorator
// class TestController {
// @Post('') Method Decorator
// getUser(@Body() x) { Param Decorator
// }
// @configurable(false)  Accessor Decorators
// get x() {
// }

// @logger
// hello() {
//   console.log("first");
// }

// @mul(25)
// add(a: number, b: number) {
//   return a + b;
// }
// }

// const test = new TestController();
// // console.log("🚀 ~ file: index.ts:29 ~ test:", test);
// console.log(test.add(1, 2));

const Controller = (prefix: string) => {
  return (constructor: any) => {
    return class Test extends constructor {
      prefix: string = prefix;
    };
  };
};

@Controller("users")
class TestController {}

const x = new TestController();
console.log(x);
