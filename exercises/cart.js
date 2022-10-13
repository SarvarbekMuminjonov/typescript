"use strict";
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) { }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.date = date;
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((product) => product.id !== productId);
    }
    sumPrice() {
        return this.products
            .map((product) => product.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        if (this.products.length == 0) {
            throw new Error("Cart is empty");
        }
        if (!this.delivery) {
            throw new Error("Address not specified");
        }
        return { succes: true };
    }
}
const user = new Cart();
user.addProduct(new Product(1, "non", 1500));
user.addProduct(new Product(2, "sut", 5000));
user.addProduct(new Product(3, "shokolad", 5500));
user.deleteProduct(1);
user.setDelivery(new HomeDelivery(new Date(), "Amir Temur ko'chasi"));
console.log(user.sumPrice());
