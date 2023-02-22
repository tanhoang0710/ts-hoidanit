// Closure
// Nghĩa là function return 1 function
// function test(): Function {
//   return function (a: number, b: number) {
//     return a + b;
//   };
// }

// console.log(test()(1, 2));

//descriptor => thong tin cua method, property ... noi minh dat vao
function logger(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  console.log("🚀 ~ file: index.ts:13 ~ logger ~ descriptor:", descriptor.value);
  descriptor.value = () => {
    console.log("test");
  };
}

// @Controller('test') Class Decorator
class TestController {
  // @Post('') Method Decorator
  // getUser(@Body() x) { Param Decorator
  // }
  // @configurable(false)  Accessor Decorators
  // get x() {
  // }

  @logger
  hello() {
    console.log("first");
  }
}

const test = new TestController();
// console.log("🚀 ~ file: index.ts:29 ~ test:", test);
test.hello();
