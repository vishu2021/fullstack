/* Comments Start Here  
! 1. Logical AND (&&)
* TRUE if both the operands/boolean values are true, else evaluates to FALSE
Comments End Here   */
const a = true,
  b = false;
const c = 4;
console.log(a && a); // true
console.log(a && b); // false
console.log(c > 2 && c < 2); // false
/* Comments Start Here  
! 2. Logical OR (||)
* TRUE if either of the operands/boolean values is true. evaluates to false if both are FALSE
Comments End Here   */
console.log(a || b); // true
console.log(b || b); // false
console.log(c > 2 || c < 2); // true
/* Comments Start Here  
! 3. Logical NOT (!)
* TRUE if the operand is false and vice-versa.
Comments End Here   */
console.log(!a); // false
console.log(!b); // true
let password = "Krishna-Radhe";
if (password.length >= 8 && password.includes("Radhe")) {
  console.log("VALID PASSWORD");
} else {
  console.log("Invalid password");
}
