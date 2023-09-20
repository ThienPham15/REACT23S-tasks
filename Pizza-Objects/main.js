/* Task 1
Write code which models a pizza as a class. Pizza has at least following properties: name, toppings, base price for a small pizza. Pizza has also a functions, which calculates it’s price.*/
class Pizza {
    constructor(name, toppings, basePrice) {
        this.name = name;
        this.toppings = toppings; //as an array of string
        this.basePrice = basePrice; //in cents
        this.radius = 1; //small=1, medium=1.5, large=2
    }

    setSize(radius) {
        this.radius = radius; 
    }
    
    addTopping(topping) {
        this.toppings.push(topping);
    }

    removeTopping(topping) {
        this.toppings.pop(topping);
    }

    getPrice() {
        return this.basePrice * this.radius;
    }

    getTopping() {
        return this.toppings;
    }

    
}

let pizza1 = new Pizza('Pepperoni',['cheese','tomato','pepperoni'], 750);
pizza1.addTopping('rucola');
console.log(pizza1.getTopping().join(','));

pizza1.removeTopping('rucola');
console.log(pizza1.getTopping().join(', '));


/*Task 2
Write code which models an order to a pizza place as a class. The order has a customer name, delivery type, and there can be several pizzas in one order. Order can be updated by adding pizzas to it with a method of the order class.
Return a GitHub repository link to your code  */

class PizzaOrder {
    constructor(customer, delivery, pizzas) {
        this.customer = customer;
        this.delivery = delivery;
        this.pizzas = pizzas; //array of string 
    }

    addPizza(pizza) {
        this.pizzas.push(pizza);
    }
} 