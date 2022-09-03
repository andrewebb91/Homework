//1
//Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["cheese", "veggies", "bacon", "pineapples"];

//2
//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
//i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer() {
  let toppings = "";
  for (topping of pizzaToppings) {
    toppings += topping + ", ";
  }

  return console.log(
    `"Welcome to the Webb Pizza, here are the toppings we have: ${toppings}!"`
  );
}

greetCustomer();

//3
//Create a getPizzaOrder function that has the parameters size, crust, and an indefinite amount of toppings as inputs prints (console.log) the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!" outputs (return) a list with the size, crust, and toppings

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size},${crust}, pizza with ${toppings}`);
  const list = [size, crust, toppings];
  return list;
}

getPizzaOrder("small", "pan", "cheese", "pineapple");

//4
//Create a preparePizza function that has an array as its parameter with three items: a size, a crust, and a list of toppings prints something like "...Cooking pizza..." outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza(list) {
  const object = {
    size: list[0],
    crust: list[1],
    toppings: list[2],
  };
  return object;
}
preparePizza(list);

//5
//Create a servePizza function that has a parameter of a pizza Object logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!" outputs the same pizza Object that was passed in

function servePizza() {
  console.log();
}

//6
//Call each function and (starting with preparePizza) use the returned value from the previous function as its input

//Bouns//

//Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct. You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
//i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"

//In getPizzaOrder, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!"). Alter servePizza in a similar way to fix its grammar when serving a "plain" cheese pizza.

//In getPizzaOrder, check the toppings the customer ordered against your list of available toppings. If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again.
