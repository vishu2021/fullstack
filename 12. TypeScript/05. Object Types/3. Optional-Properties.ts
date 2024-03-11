type User = {
  name: string;
  age?: number;
  location: string;
};

const user: User = {
  name: "Krishna",
  age: 20,
  location: "Arabic",
};

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);
