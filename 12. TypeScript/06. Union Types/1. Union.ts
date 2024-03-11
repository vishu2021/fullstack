let password: string | number = 20;

type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

let user: UserInfo | AccountDetails = {
  first: "Krishna",
  last: "Radhe",
  age: 29,
};

console.log(user);

const items: (number | string)[] = [1, 3, "hello"];
console.log(items);
