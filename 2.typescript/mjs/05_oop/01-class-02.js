var TaskState;
(function (TaskState) {
    TaskState[TaskState["Created"] = 100] = "Created";
    TaskState[TaskState["Active"] = 101] = "Active";
    TaskState[TaskState["InActive"] = 102] = "InActive";
    TaskState[TaskState["Proccess"] = 103] = "Proccess";
    TaskState[TaskState["Finish"] = 104] = "Finish";
})(TaskState || (TaskState = {}));
class TaskService {
    constructor(tasks) {
        this.tasks = tasks;
    }
    getItems() {
        return this.tasks;
    }
}
let task1 = { id: 1, name: "Coding" };
let task2 = { id: 2, name: "Study ES6" };
let tasks = [
    task1,
    task2,
    { id: 3, name: "Kiss my girl", state: TaskState.Finish }
];
let taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj.getItems());
