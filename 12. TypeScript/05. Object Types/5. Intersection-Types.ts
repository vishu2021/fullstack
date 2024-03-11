type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User = UserInfo & AccountDetails;

const Krishna: User = {
  first: "Krishna",
  last: "Radhe",
  age: 18,
  email: "test@gmail.com",
  password: "strongpassword123",
};

console.log(
  `Name: (${Krishna.first} ${Krishna.last}) Age: (${Krishna.age}) Email: (${Krishna.email}) Password: (${Krishna.password})`
);
