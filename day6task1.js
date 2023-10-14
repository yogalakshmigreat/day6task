
let radius=1.0
let    color="red"

class Circle {
    constructor(radius, color) {
        this.radius= radius;
        this.color = color;
    }

    area() {
        return this.radius* this.radius* 3.14;
    }

    circumference() {
        return this.radius* 6.28;
    }

    colour() {
        return this.color;
    }

    
}

let calc = new Circle(5,"red");

console.log(calc.area(), calc.circumference(), calc.colour());