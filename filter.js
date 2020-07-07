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

const filteredList = elevenFiftyMenu.filter(myFilter);
// const filteredList = elevenFiftyMenu.filter(menuItem.cookTime > 5); - this shortens the function

function myFilter(menuItem) {
  return menuItem.cookTime < 10 && menuItem.cookTime > 5; //returns true
}

console.log(filteredList);


