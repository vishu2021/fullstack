/* Comments Start Here
* Use a for loop when you know the loop should execute n times. 
* for loop is used when the number of iterations is known. 
* for (initialExpression; condition; incrementExpression) {} 

? "for loop" VS "for in loop" 
^ The main difference is that a standard "for" loop will return the index as a number, but a "for in" will return it as a string. This is the primary reason that the standard "for" is recommended when iterating arrays.

Comments End Here */

for (let i = 0; i <= 5; i++) {
  console.log("Hello World", i);
}
/* Comments Start Here
! EXERCISE
^ ... (let ; = ; < ; ) {
^   console.log(i);
^ }
Comments End Here */

/*
* The JavaScript for...in statement loops through the properties of an object.

*/

for (let variable in object) {
  // code to be executed
}
// ! EXERCISE
const person = {
  fname: " John",
  lname: " Doe",
  age: 25,
};

for (let x in person) {
  txt += person[x];
}

//* To access arrays inside arrays, use a for-in loop for each array:
// ! EXERCISE
//^ Values in objects can be arrays, and values in arrays can be objects:
let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

for (let i in myObj.cars) {
  x += "<h1>" + myObj.cars[i].name + "</h1>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}

document.getElementById("demo").innerHTML = x;
