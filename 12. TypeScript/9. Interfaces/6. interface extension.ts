// Original interface
interface Car {
  brand: string;
  start(): void;
}

// Declaration merging (interface extension)
interface Car {
  model: string;
  stop(): void;
}

// Usage of the extended interface
const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  start() {
    console.log("Car started");
  },
  stop() {
    console.log("Car stopped");
  },
};

// ------------------------------------
interface User {
  firstName: string;
  lastName: string;
  age: number;
}

interface User {
  printUserInfo(
    firstName: string,
    lastName: string,
    age: number
  ): string | number;
}

const Krishna: User = {
  firstName: "Krishna",
  lastName: "Radhe",
  age: 18,
  printUserInfo(firstName, lastName, age) {
    return `Name: (${firstName} ${lastName}) Age: (${age})`;
  },
};

console.log(Krishna.printUserInfo("Krishna", "Radhe", 18));
