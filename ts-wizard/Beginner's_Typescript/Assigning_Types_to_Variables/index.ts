interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser1 = {};

const getUserId = (user: User) => {
  return user.id;
};

// getUserId(defaultUser); error

// Solution
const defaultUser: User = {
  id: 1,
  age: 1,
  firstName: "tan",
  lastName: "hun",
  isAdmin: true,
  name: "tanhun",
};

getUserId(defaultUser);
