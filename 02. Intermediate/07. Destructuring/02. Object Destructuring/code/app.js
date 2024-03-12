//? In object destructuring order doesn't matter but the name does matter

//! Extracting a property
const student = { myName: "Krishna", position: "First", rollNumber: "27" };
const { myName, position, rollNumber } = student;
console.log(myName); // Krishna
console.log(position); // First
console.log(rollNumber); // 27
// --------------------------
