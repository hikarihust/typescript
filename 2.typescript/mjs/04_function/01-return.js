function funcNoReturn() {
    console.log("funcNoReturn");
}
function funcReturnNumber() {
    //
    return 2;
}
function funcReturnArray() {
    return ["a", "b"];
}
function funcReturnAny() {
    console.log("funcReturnAny");
}
funcNoReturn();
console.log(funcReturnNumber());
console.log(funcReturnArray());
console.log(funcReturnAny());
