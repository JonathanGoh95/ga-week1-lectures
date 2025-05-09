const myFirstCar = {
  make: "Toyota",
  model: "Corolla",
  color: "black",
  isRunning: false,
  start: () => {
    myFirstCar.isRunning = true;
    console.log("Running!");
  },
};

class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.isRunning = false;
  }
  // return is not needed because the new object is returned by default
  start() {
    this.isRunning = true;
    console.log("Running!");
  }
  stop() {
    this.isRunning = false;
    console.log("Stopped!");
  }
  static about() {
    console.log("I'm the Car class!");
  }
  toString() {
    return `This car is a ${this.color} ${this.make} ${this.model}.`;
  }
}

class Plane {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.isFlying = false;
  }
  start() {
    this.isFlying = true;
    console.log("Flying!");
  }
  stop() {
    this.isFlying = false;
    console.log("Stopped Flying!");
  }
}

class ElectricCar extends Car {
  constructor(make, model, color, batteryCharge) {
    super(make, model, color);
    this.batteryCharge = batteryCharge;
  }
  start() {
    if (this.batteryCharge > 0) {
      this.isRunning = true;
      console.log("Your electric car is running!");
    } else {
      this.isRunning = false;
      console.log("Time to recharge!");
    }
  }
}

const myCar = new Car("Ford", "Bronco", "red");
const mySubaru = new Car("Subaru", "Crosstrek", "blue");
myCar.start();
console.log(myCar); // { make: "Ford", model: "Bronco" }
console.log(mySubaru);
const myBoeingPlane = new Plane("Boeing", "737", "White");
const myAirbusPlane = new Plane("Airbus", "A320", "Gray");
console.log(myBoeingPlane);
console.log(myAirbusPlane);
myBoeingPlane.start();
myAirbusPlane.start();
console.log(myBoeingPlane);
console.log(myAirbusPlane);
Car.about();
const myVolvo = new ElectricCar("Volvo", "EX30", "Gray", 100); // Fully charged!
console.log(myVolvo);
myVolvo.start(); // "Your electric car is running!"
myVolvo.batteryCharge = 0;
myVolvo.start(); // "Time to recharge!"
console.log(mySubaru.toString());
