const addTwoNumber = (params) => {
  return params.first + params.last;
};

// Solution 1
const addTwoNumberSolution1 = (params: { first: number; last: number }) => {
  return params.first + params.last;
};

// Solution 2: Type
type AddTwoNumbersArgs = {
  first: number;
  last: number;
};

const addTwoNumberSolution2 = (params: AddTwoNumbersArgs) => {
  return params.first + params.last;
};

// Solution 3: Interface

interface AddTwoNumbersArgsInterface {
  first: number;
  last: number;
}

const addTwoNumberSolution3 = (params: AddTwoNumbersArgsInterface) => {
  return params.first + params.last;
};
