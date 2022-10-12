"use strict";
class Computer {
    constructor(name, ram) {
        this.name = name;
        this.ram = ram;
    }
    getSpec() {
        return { name: this.name, ram: this.ram };
    }
}
class Laptop extends Computer {
    constructor(name, ram, dioganal) {
        super(name, ram);
        this.dioganal = dioganal;
    }
    getSpec() {
        return {
            name: this.name,
            ram: this.ram,
            dioganal: this.dioganal,
        };
    }
}
const comp = new Computer("hp", 8);
console.log("Computer: ", comp.getSpec());
const laptop = new Laptop("Macbook", 8, 13.3);
console.log("Laptop: ", laptop.getSpec());
