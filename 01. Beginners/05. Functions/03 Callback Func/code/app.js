/* Comments Start Here 
! When we provide function as an (argument) to other function/argument that function is known as callback function.
! callback(function() {...})
Comments End Here  */
function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});
//^ function
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
