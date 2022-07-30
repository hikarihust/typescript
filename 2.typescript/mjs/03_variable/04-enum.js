// 100 created, 101 proccess, 102 finish
var STATUS;
(function (STATUS) {
    STATUS[STATUS["created"] = 100] = "created";
    STATUS[STATUS["process"] = 900] = "process";
    STATUS[STATUS["finish"] = 500] = "finish";
})(STATUS || (STATUS = {}));
;
let todoStatus = STATUS.finish;
console.log(todoStatus);
