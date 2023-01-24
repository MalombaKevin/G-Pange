//  get tasks form
let form = document.querySelector('form');

//  statistics zone
let completeTask = document.querySelector('.completeTotal');
let pendingTask = document.querySelector('.pendingTotal');
let totalTask = document.querySelector('.taskTotal');

// get the ul list
let toDoList = document.querySelector('.myTasks');

// LOCAL STORAGE

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

if (localStorage.getItem('tasks')) {
	tasks.map((task) => {
		createTask(task);
	});
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Get input data
	let inputData = document.getElementById('taskInput').value;

	if (inputData === '') {
		return;
	}

	const task = {
		id: new Date().getTime(),
		name: inputData,
		isCompleted: false,
	};

	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));

	createTask(task);
	form.reset();
});

function createTask(task) {
	const taskElement = document.createElement('li');

	taskElement.setAttribute('id', task.id);

	if (task.isCompleted) {
		taskElement.classList.add('complete');
	}

	const taskElementMarkup = `
    <div class="checked">
    <input type="checkbox" name="tasks" id="${task.id}"  ${
		task.isCompleted ? 'checked' : ''
	} >
    </div>
    <div> 
    <p ${!task.isCompleted ? 'contenteditable="True"' : ''}>${task.name} </p>
   </div>
   <button class="delete-task" >
    <ion-icon name="trash" class="deleteButton"></ion-icon>
    </button>

    `;

	taskElement.innerHTML = taskElementMarkup;

	toDoList.appendChild(taskElement);

	countTask();
}
function countTask() {
	const completedTasksArray = tasks.filter((task) => {
		task.isCompleted === true;
	});
	totalTask.textContent = tasks.length;
	completeTask.textContent = completedTasksArray.length;
	pendingTask.textContent = tasks.length - completedTasksArray.length;
}
