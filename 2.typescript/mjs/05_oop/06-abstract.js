class Laptop {
    keyboard() {
        console.log("Laptop.keyboard");
    }
    chipset() {
        console.log("Laptop.chipset");
    }
}
class LaptopDell extends Laptop {
    keyboard() {
        console.log("LaptopDell.keyboard");
    }
    mainboard() {
        console.log("LaptopDell.mainboard");
        return "123";
    }
}
let laptopObj = new LaptopDell();
laptopObj.keyboard();
laptopObj.mainboard();
laptopObj.chipset();
