const getName1 = (first: string, last: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

// Solution
const getName1Solution = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};
