class Machine {
    caculate(x, y) {
        return x + y;
    }
}
class Superman extends Machine {
    constructor(name) {
        super();
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    fly() {
        console.log("fly");
    }
}
let john = new Superman("john");
john.eat();
john.sleep();
john.fly();
console.log(john.caculate(2, 3));
