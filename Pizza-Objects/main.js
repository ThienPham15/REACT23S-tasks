const pizza1 = document.querySelector('#pizza1');
const pizza2 = document.querySelector('#pizza2'); 
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
        for (let item of this.toppings) {
            if (item == topping) {
                let i = this.toppings.indexOf(item);
                console.log(i);
                this.toppings.splice(i, 1);
            }
        }
    }

    getPrice() {
        return this.basePrice * this.radius;
    }

    getTopping() {
        return this.toppings;
    }

    getName() {
        return this.name;
    }
}

let pizza_1 = new Pizza('Pepperoni',['cheese','tomato','pepperoni'], 750);
let pizza_2 = new Pizza('Hawaii', ['pineapple','chicken', 'pepper'], 900);

pizza1.textContent = `Pizza ${pizza_1.getName()} has toppings ${pizza_1.getTopping().join(', ')} and price of ${pizza_1.getPrice() / 100} €`; 

pizza2.textContent = `Pizza ${pizza_2.getName()} has toppings ${pizza_2.getTopping().join(', ')} and price of ${pizza_2.getPrice()/100} €`; 

pizza_1.addTopping('rucola');
console.log(pizza_1.getTopping().join(','));

pizza_1.removeTopping('tomato');
console.log(pizza_1.getTopping().join(', '));


/*Task 2
Write code which models an order to a pizza place as a class. The order has a customer name, delivery type, and there can be several pizzas in one order. Order can be updated by adding pizzas to it with a method of the order class.
Return a GitHub repository link to your code  */
const order1 = document.querySelector('#order1');
const order2 = document.querySelector('#order2');
class PizzaOrder {
    constructor(customer, delivery, pizzas) {
        this.customer = customer;
        this.delivery = delivery; //home, eatIn and takeAway
        this.pizzas = pizzas; //array of string 
    }

    addPizza(pizza) {
        this.pizzas.push(pizza);
    }

    getCustomer() {
        return this.customer
    }

    getPizza() {
        return this.pizzas;
    }

    getDelivery() {
        return this.delivery;
    }
} 

let order_1 = new PizzaOrder('Ana', 'homeDelivery', ['Hawaii', 'Pepperoni']);
let order_2 = new PizzaOrder('Alex', 'eatIn', ['Hawaii']);


order1.textContent = `Customer ${order_1.getCustomer()} ordered ${order_1.getPizza().join(', ')} for ${order_1.getDelivery()}`;

order2.textContent = `Customer ${order_2.getCustomer()} ordered ${order_2.getPizza().join(', ')} for ${order_2.getDelivery()}`;
