interface User12 {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Post[];
}
interface Post {
  id: number;
  title: string;
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUser = (): User12 => {
  return {
    firstName: "tan",
    lastName: "hun",
    id: 1,
    posts: [{ id: 1, title: "post" }],
    role: "admin",
  };
};
