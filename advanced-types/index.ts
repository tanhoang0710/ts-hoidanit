// Union type
type Colors = "red" | "blue" | "green";

const ca: Colors = "green";

type Arr1 = [0, 1, 2, 3, 4, 5, 6];
type UnionArr = Arr1[number]; // chỉ cần cho number vào trong thì sẽ tạo ra Union type
// kể  cả khi element của Arr1 là string
type Arr2 = ["tan", "hun"];
type UnionArr2 = Arr2[number];

type RGB = Record<Colors, number>; // chuyển từ Union sang key

let color: RGB = {
  blue: 1,
  green: 1,
  red: 1,
};

type RecordFake<UnionType extends string, ValueType = string> = {
  [Key in UnionType]: ValueType;
};

type RGB1 = RecordFake<Colors>;
let color2: RGB1 = {
  blue: "1",
  green: "1",
  red: "1",
};

type User1 = {
  name: string;
  company: {
    address: string;
  };
};

// Tao kieu Company tu User

type Company1 = User1["company"];
const comp: Company1 = { address: "123" };

enum tan {
  name = "tan",
  age = 22,
}

// Muốn chuyển về  1 type có name: string và age: number
// Đầu tiên cần chuyển enum về  type sau đó đưa vào Record

type TypeKey = Record<keyof typeof tan, string>;

type UserFagke = typeof tan;

type Maximun_Color = 256;

type ComputedRange<
  N extends number,
  Result extends Array<unknown> = []
> = Result["length"] extends N
  ? Result
  : ComputedRange<N, [...Result, Result["length"]]>;

type FromZeroTo256 = ComputedRange<Maximun_Color>[number]; // chuyen ve Union

type RGB255 = {
  [Key in Colors]: FromZeroTo256;
};

const aasdf: RGB255 = {
  blue: 152,
  green: 1,
  red: 103,
};
