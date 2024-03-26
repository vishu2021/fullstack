/* Comments Start Here 
! When we provide function as an (argument) to other function/argument that function is known as callback function.
! A JavaScript callback is a function which is to be executed after another function has finished execution. 
! Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.
? callback(function() {...})
Comments End Here  */
// Declare a function
function showCallFunc(fn) {
  const value = 10;
  fn(value);
}
// Call a function
showCallFunc(function (value) {
  console.log(value);
});
//^  Declare a function
function greet(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}

//^ callback function
function callMe() {
  console.log("I am callback function");
}

//^ passing function as an argument (callback)
greet("Peter", callMe);
