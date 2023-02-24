interface User {
  name: string;
  age: number;
}

interface Company {
  address: string;
}

const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

const c: Company = {
  address: "Hanoi",
};

const user1: User = {
  age: 22,
  name: "tannn",
};

const res = deepClone(c);
const resssss = deepClone(user1);
