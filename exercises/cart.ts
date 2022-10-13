class Product {
  constructor(public id: number, public title: string, public price: number) {}
}
class Delivery {
  constructor(date: Date) {}
}
class HomeDelivery extends Delivery {
  constructor(public date: Date, public address: string) {
    super(date)
  }
}

class ShopDelivery extends Delivery {
  constructor(public shopId: number) {
    super(new Date())
  }
}
type DeliveryOptions = HomeDelivery | ShopDelivery

class Cart {
  private delivery!: DeliveryOptions
  private products: Product[] = []

  public addProduct(product: Product): void {
    this.products.push(product)
  }
  public deleteProduct(productId: number) {
    this.products = this.products.filter(
      (product: Product) => product.id !== productId
    )
  }
  public sumPrice(): number {
    return this.products
      .map((product) => product.price)
      .reduce((p1: number, p2: number) => p1 + p2)
  }
  public setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery
  }

  public checkout() {
    if (this.products.length == 0) {
      throw new Error("Cart is empty")
    }
    if (!this.delivery) {
      throw new Error("Address not specified")
    }
    return { succes: true }
  }
}

const user = new Cart()
user.addProduct(new Product(1, "non", 1500))
user.addProduct(new Product(2, "sut", 5000))
user.addProduct(new Product(3, "shokolad", 5500))
user.deleteProduct(1)
user.setDelivery(new HomeDelivery(new Date(), "Amir Temur ko'chasi"))
console.log(user.sumPrice())
