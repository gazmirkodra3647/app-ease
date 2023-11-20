// Filename: ComplexCode.js
// Content: A complex JavaScript code that simulates a virtual store

// Class for creating products
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotal() {
    return this.price * this.quantity;
  }
}

// Class for managing inventory and orders
class Store {
  constructor() {
    this.inventory = [];
    this.orders = [];
    this.totalSales = 0;
  }

  addProduct(name, price, quantity) {
    const product = new Product(name, price, quantity);
    this.inventory.push(product);
  }

  removeProduct(name) {
    this.inventory = this.inventory.filter(product => product.name !== name);
  }

  placeOrder(order) {
    this.orders.push(order);
    this.updateInventory(order);
    this.calculateSales(order);
  }

  updateInventory(order) {
    order.items.forEach(item => {
      const product = this.inventory.find(prod => prod.name === item.name);
      product.quantity -= item.quantity;
    });
  }

  calculateSales(order) {
    const orderTotal = order.items.reduce((total, item) => {
      const product = this.inventory.find(prod => prod.name === item.name);
      return total + product.price * item.quantity;
    }, 0);

    this.totalSales += orderTotal;
  }

  getInventory() {
    console.log("Current Inventory:");
    this.inventory.forEach(product => {
      console.log(`${product.name}: $${product.price} - Quantity: ${product.quantity}`);
    });
  }

  getTotalSales() {
    console.log(`Total Sales: $${this.totalSales}`);
  }
}

// Create a new store instance
const store = new Store();

// Add products to the inventory
store.addProduct("Widget", 10.99, 50);
store.addProduct("Gadget", 19.99, 30);
store.addProduct("Thingamabob", 7.99, 100);

// Place some orders
store.placeOrder({ items: [{ name: "Widget", quantity: 10 }, { name: "Thingamabob", quantity: 20 }] });
store.placeOrder({ items: [{ name: "Gadget", quantity: 5 }] });

// Print inventory and total sales
store.getInventory();
store.getTotalSales();