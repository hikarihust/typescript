// Đầy đủ các tham số
function userInfo1(name, age) {
    return `My name is ${name}, ${age} years old`;
}
// Giá trị mặc định cho các tham số
function userInfo2(name = "john", age = 69) {
    return `My name is ${name}, ${age} years old`;
}
// Tham số khuyết
function userInfo3(name = "john", age) {
    if (age == null) {
        return `My name is ${name}`;
    }
    else {
        return `My name is ${name}, ${age} years old`;
    }
}
console.log(userInfo3("peter", 20));
