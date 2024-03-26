/*
* DON'T RUN THIS FILE
^ An infinite loop is a piece of code that keeps running forever as the terminating condition is never reached. 
^ An infinite loop can crash your program or browser and freeze your computer. 
^ To avoid such incidents it is important to be aware of infinite loops so that we can avoid them.
 
let i = 0;
while (i < 5) {
  console.log("Number: ", i);
  // i++
}

! One of the most common infinite loops is when the condition of the while statement is set to true. Below is an example of code that will run forever.
! Initiate an infinite loop
while (true) {

  // execute code forever

}
*/
//! infinite loop with the terminating condition set to infinity
/*
for (var i = 0; i < Infinity; i++) {
 
}
*/

//! Though of little practical significance, you may also end up in an infinite loop by omitting all parts of the head of a for() block.
// for (;;) {}

/*
! How to avoid running into infinite loops?

^ In for() loop:
? To avoid ending up in an infinite loop while using a for statement, ensure that the statements in the for() block never change the value of the loop counter variable. 
? If they do, then your loop may either terminate prematurely or it may end up in an infinite loop.

^ In while and do-while loops:
? Ensure you have at least one statement within the loop that changes the value of the comparison variable. 
? (That is, the variable you use in the loop’s comparison statement.) 
? As otherwise, the condition might always return true and the loop will never end.

? Never leave the terminating condition to be dependent on the user. 
? As the user might cancel the prompt box etc. which might prevent the loop from terminating.
*/
