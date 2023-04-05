// ES 5 
function employee(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    console.log(name);
}

let man = new employee("Reddy", "reddy@gmail.com", 24);

// constructor class 

class vehicle {
    constructor(brand, model, color, price, seating) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price;
        this.seating = seating;

    }
    // method 
    getSpecs() {
        let data = `
        Brand : ${this.brand}
        Model: ${this.model}
        Color: ${this.color}
        Price: ${this.price}
        Seating: ${this.seating}
        `;
        return data;
    }

}

let cars = new vehicle("tata", "safari", "silver", 1500000, 5);
console.log(cars.getSpecs());

// Inheritance 

class child {
    constructor(name){
        this.name=name;
    }
}

class student extends child {
    constructor (name, year, semister){
        super(name);
        this.year=year;
        this.semister=semister;
    }

}

let one= new student ("reddy", 4, 2);

console.log(one.name);
console.log(one.year);
console.log(one.semister);