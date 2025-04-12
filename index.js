// Write your solution in this file!

// Global variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function to add a new burger
function addBurger() {
    const newBurger = 'Flatburger';
    burgers.push(newBurger);
}

// Block-scoped variable in if statement
if(true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
}

// Function to change the featured drink
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}
