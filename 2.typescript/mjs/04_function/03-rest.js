function showStudentInfo(name, ...course) {
    return name + " study " + course.join(", ");
}
console.log(showStudentInfo("john", "es6", "php")); // john study es6, php, typescipt
