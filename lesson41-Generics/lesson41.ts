// TUPLE

let arr = ["henry", 30, false];
arr[0] = 25;
arr[1] = "henry";
arr[2] = 56;

// console.log(arr)

// tuple: Bắt buộc array có kiểu nhất định tại các phần tử nhất định
const tup: [string, boolean, number] = ["tan", false, 25];

const myStudent: [string, number] = ["tanhun", 22];

// Generics
type strArray = Array<string>;
type numArr = Array<number>;

const last = (arr: Array<number>) => arr[arr.length - 1];

const l1 = last([1, 2, 3]);

// console.log(l1)
// const l2 = last(['a', 'b', 'c'])

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l3 = lastT([1, 2, 3]);
const l4 = lastT(["a", "b", "c"]);
const l5 = lastT<string | number>(["a", "b", "c", 3]);

const makeArr = (x: number) => [x];

const m = makeArr(5);
// const m2 = makeArr('a')
// console.log(m)

const makeArrT = <T>(x: T) => [x];
const m3 = makeArrT("a");

const makeArrXY = (x: number, y: string) => [x, y];
const makeArrXY1 = <X, Y>(x: X, y: Y) => [x, y];

const mxy = makeArrXY1(1, "a");
const mxy1 = makeArrXY1<string, string>("a", "b");

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m7 = makeTuple("x", 5);
const m8 = makeTuple<string, number>("a", 1);
const m9 = makeTuple<string | null, number>("a", 1);

const makeTuppleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m10 = makeTuppleWithDefault<string | null>("a", 3);

// GENERICS EXTENDS
const makeFullName = (obj) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const makeFullNameConstraint = (obj: { firstName: string; lastName: string }) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n1 = makeFullNameConstraint({ firstName: "tan", lastName: "123" });
// const n2 = makeFullNameConstraint({ firstName: "tan", lastName: "123",age: 22 });

//
const makeFullNameConstraintWithGenerics = <T extends { firstName: "tan"; lastName: "123" }>(obj: T) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});
const n2 = makeFullNameConstraintWithGenerics({ firstName: "tan", lastName: "123", age: 22 });

const addNewEmployee = (employee: object) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const empOne = addNewEmployee({ name: "tanhun", age: 22 });
console.log(empOne);
// console.log(empOne.name); // ko hien property

const addNewEmpGenerics = <T extends object>(emp: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...emp,
    uid,
  };
};

const empTwo = addNewEmpGenerics({ name: "tanhun", age: 22 });
console.log(empTwo.name); // het loi

const addNewEmployeeWithConstraint = <T extends { name: string }>(emp: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...emp,
    uid,
  };
};

// const empThree = addNewEmployeeWithConstraint({age: 22 }); // bat buoc phai co property name

// GENERICS in INTERFACE

interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}

type NumberResource = Resource<number[]>;

const numbers: NumberResource = {
  uid: 2,
  name: "Numbers",
  data: [1, 2, 3],
};

const r1: Resource<string> = {
  uid: 1,
  name: "Person",
  data: "",
};

const r2: Resource<object> = {
  uid: 1,
  name: "Movie",
  data: {
    name: "Avenger",
  },
};

const r3: Resource<string[]> = {
  uid: 1,
  name: "Lang",
  data: ["ts", "js"],
};
