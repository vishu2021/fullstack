/* Comments Start Here 
! push() -> Add item at the end of the array
* pop() -> Remove item at the end of the array
^ shift() -> Remove from the start
? unshift() -> Add to start
& concat() -> combining arrays
Comments End Here   */
const fruits = [
  "apples",
  "pomegranate",
  "mango",
  "strawberries",
  "pineapple",
  "grapefruit",
];

console.log(fruits);
fruits.push("banana");
fruits.pop();
fruits.shift();
fruits.unshift("orange");
/* Comments Start Here
! CONCAT
^ const fruits = ["apples", "pomegranate", "mango"];
^ let moreFruits = ["strawberries", "pineapple", "grapefruit"];
^ let totalFruits = fruits.concat(moreFruits);
Comments End Here   */

console.log(fruits);
