interface IComputer {
  name: string
  ram: number
}
interface ILaptop extends IComputer {
  dioganal: number
}
class Computer {
  protected name: string
  protected ram: number
  constructor(name: string, ram: number) {
    this.name = name
    this.ram = ram
  }
  getSpec(): IComputer {
    return { name: this.name, ram: this.ram }
  }
}

class Laptop extends Computer {
  private dioganal: number
  constructor(name: string, ram: number, dioganal: number) {
    super(name, ram)
    this.dioganal = dioganal
  }
  override getSpec(): ILaptop {
    return {
      name: this.name,
      ram: this.ram,
      dioganal: this.dioganal,
    }
  }
}

const comp = new Computer("hp", 8)
console.log("Computer: ", comp.getSpec())
const laptop = new Laptop("Macbook", 8, 13.3)
console.log("Laptop: ", laptop.getSpec())
