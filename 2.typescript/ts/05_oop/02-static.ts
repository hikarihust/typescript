enum TaskState { Created = 100, Active, InActive, Proccess, 	Finish }

interface TaskInterface {
	id: number;
	name: string;
	state?: TaskState;
}

class TaskService {
	public static username: string = "peter";

	static tasks: TaskInterface[];

	constructor(tasks: TaskInterface[]){
		TaskService.tasks = tasks;
	}

	getItems() {
		return TaskService.tasks;
	}

	static showItemsInfo() : void {
		for(let task of TaskService.tasks){
			console.log(`${TaskService.username} - ${task.name}`);
		}
	}
}

TaskService.tasks = [
	{id: 1, name: "Coding"},
	{id: 2, name: "Study ES6"},
	{id: 3, name: "Kiss my girl", state: TaskState.Finish}
];

TaskService.showItemsInfo();

console.log(TaskService.username);
