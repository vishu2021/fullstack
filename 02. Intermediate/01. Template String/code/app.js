/*  Comments Start Here 
!  Template strings, also known as template literals, are a feature in JavaScript that allows you to create strings with embedded expressions.
^  They are denoted by backticks `` instead of single or double quotes.
!  Template strings provide a more flexible and concise way to construct strings, especially when they involve variables or expressions.
Comments End Here  */

let firstName = "Krishna";
let lastName = "Radhe";

function intro() {
  return "Hello my name is Jai Shri Radhe Krishna & i'm 19 years old";
}

console.log(
  `Hello my name is ${firstName} ${lastName} & i'm ${19 + 1000} years old.`
);
