interface User {
  name: string;
  age: number;
}

interface Company {
  address: string;
}

// const deepClone = <T>(obj: T): T => {
//   return JSON.parse(JSON.stringify(obj));
// };

const c: Company = {
  address: "Hanoi",
};

const user1: User = {
  age: 22,
  name: "tannn",
};

// const res = deepClone(c);
// const resssss = deepClone(user1);

// deepClone chưa ngon vì có thể  truyền cả number, string, ...
// cần phải ép truyền object

interface Teacher extends User {
  maso: number;
}

interface Student extends User {
  lopHoc: string;
}

const deepClone = <T extends User>(obj: T): T => {
  // Chỉ User hoặc Student hoặc Teacher mới đc chấp nhận
  return JSON.parse(JSON.stringify(obj));
};

// const res = deepClone(5); // lỗi vì truyền number
const resssss = deepClone(user1); // ko lỗi vì truyền object

type CheckUser<T> = T extends User ? T : T extends number ? T : never; // check xem T co phai la User hoac number hay ko

type Test = CheckUser<Teacher>;

const test = <T>(arg: CheckUser<T>) => {};

const gv: Teacher = {
  age: 22,
  maso: 1,
  name: "ttt",
};
test(gv);

type StringOrNumber = string | number;

const array: StringOrNumber[] = [];

const store = (item: StringOrNumber): StringOrNumber[] => {
  array.push(item);
  return array;
};

// Generic cho class
type CallBack<T> = (item: T, index: number) => void;

class Arr<T> {
  forEach(callBack: CallBack<T>) {}
}

const testClass: Arr<string> = ["1"];
testClass.forEach((a, b) => {});
