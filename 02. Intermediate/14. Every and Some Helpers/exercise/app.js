//? REFACTOR -> USE EVERY & SOME HELPERS
//! Without Some and Every
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

let allProductsBooks = true;
let someProductsBooks = false;

for (let i = 0; i < products.length; i++) {
  if (products[i].category != "Books") {
    allProductsBooks = false;
  } else {
    someProductsBooks = true;
  }
}
console.log(allProductsBooks);
console.log(someProductsBooks);
//! With Some and Every
let products2 = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

//? do all products have a category of Books
let allProductsBooks2 = products2.every(function (product) {
  return product.category === "Books";
});

//? do any products have a category of Books
let someProductsBooks2 = products2.some(function (product) {
  return product.category === "Books";
});

console.log(allProductsBooks2);
console.log(someProductsBooks2);
