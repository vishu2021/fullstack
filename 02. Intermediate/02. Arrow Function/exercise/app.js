//! REFACTOR THIS CODE TO ES6 ARROW FUNCTIONS.
/*
  setTimeout(function () {
    console.log("Hello");
    setTimeout(function () {
      console.log("Hey");
      setTimeout(function () {
        console.log("Radhe Radhe");
        setTimeout(function () {
          console.log("Hi");
          setTimeout(function () {
            console.log("Bonjour");
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
*/
setTimeout(() => {
  console.log("Hello");
  setTimeout(() => {
    console.log("Hey");
    setTimeout(() => {
      console.log("Radhe Radhe");
      setTimeout(() => {
        console.log("Hi");
        setTimeout(() => {
          console.log("Jai Shri Krishna");
          setTimeout(() => {
            console.log("Bonjour");
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
