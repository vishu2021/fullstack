/* 
! The do... while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
*/
let i = 1;

do {
  console.log("Hello World", i);
  i++;
} while (i <= 5);
