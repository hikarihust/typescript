class Course {
    constructor(name) {
        this._name = name;
    }
    showCourseInfo() {
        console.log(`${this._name}`);
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
}
var courseObj = new Course("Typescript");
console.log(courseObj);
console.log("Name: " + courseObj.name);
courseObj.name = "Typescript training";
console.log("Name: " + courseObj.name);
