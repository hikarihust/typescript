/*
function funcAbc(x: string) : number{
    return 100;
}

function funcAbc(x: number) : string{
    return "abc";
}

funcAbc("abc");
*/
function funcAbc(x) {
    if (typeof x == "string") {
        return 100;
    }
    else if (typeof x == "number") {
        return "abc";
    }
    else {
        return true;
    }
}
console.log(funcAbc(false));
