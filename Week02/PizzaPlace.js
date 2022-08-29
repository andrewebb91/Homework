let pizzaPlace = "DresPizza";
let numberOfToppings = 3;
console.log("pizzaPlace " + "numberOfToppings");

pizzaPlace = "DreaPizza";
numberOfToppings = 3;

console.log(pizzaPlace + numberOfToppings);

console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);
console.log(pizzaPlace);
console.log(numberOfToppings);

console.log(
  `Here at ${pizzaPlace}, we carry ${numberOfToppings} kinds of pizzas.`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
let i = 0;
for (i = 0; i <= 10; i += 2) {
  console.log(i);
}
