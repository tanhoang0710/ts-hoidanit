const getName = (params: { first: string; last: string }) => {
  if (params.last) return `${params.first} ${params.last}`;
  return params.first;
};

// Solution
const getNameSolution = (params: { first: string; last?: string }) => {
  if (params.last) return `${params.first} ${params.last}`;
  return params.first;
};
