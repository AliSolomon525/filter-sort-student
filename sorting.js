const elevenFiftyMenu = [
  { name: "Nodemon T-bone", price: 24, cookTime: 25 },
  { name: "ByCrypt green beans", price: 4, cookTime: 4 },
  { name: "Express Salad", price: 7, cookTime: 10 },
  { name: "NPM Hamburger", price: 10, cookTime: 15 },
  { name: "GIT french fries", price: 3, cookTime: 5 },
  { name: "My Initial Commit Smothered Chicken", price: 15, cookTime: 15 },
  { name: "Fetch's Fish sticks", price: 10, cookTime: 7 },
  { name: "DotEnv Double Cheeseburger", price: 12, cookTime: 15 },
  { name: "Potato Wedges", price: 5, cookTime: 7 },
  { name: "Endpoint fried pickles", price: 4, cookTime: 8 },
];

let fruitArray = ["orange", "apple", "Kiwi", "grapefruit", "potato"]; //capital letter moves it to the front

console.log(fruitArray.sort());

let numberArray = [28, 9, 3, 5, 1]; //numbers get treated like a string because it the 2 in 28 is technically next

console.log(numberArray.sort(compare));

function compare(num1, num2) {
  console.log("comparing", num1, "and", num2);
  return num1 - num2
}

console.log(elevenFiftyMenu.sort(compare2).reverse());

function compare2(obj1, obj2) {
  return obj1.cookTime - obj2.cookTime
}

