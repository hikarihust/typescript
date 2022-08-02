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
        TaskService.tasks = tasks;
    }
    getItems() {
        return TaskService.tasks;
    }
    static showItemsInfo() {
        for (let task of TaskService.tasks) {
            console.log(`${TaskService.username} - ${task.name}`);
        }
    }
}
TaskService.username = "peter";
TaskService.tasks = [
    { id: 1, name: "Coding" },
    { id: 2, name: "Study ES6" },
    { id: 3, name: "Kiss my girl", state: TaskState.Finish }
];
TaskService.showItemsInfo();
console.log(TaskService.username);
