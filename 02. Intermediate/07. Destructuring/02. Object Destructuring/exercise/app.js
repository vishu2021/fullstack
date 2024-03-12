const person = {
  myName: "Krishna",
  age: 30,
  gender: "male",
  country: "USA",
};

//! Your task is to use object destructuring to extract the name, age, and country properties from the person object.
//! After extracting the properties, log each variable's value to the console.

const { myName, age, country } = person;
console.log(myName);
console.log(age);
console.log(country);
