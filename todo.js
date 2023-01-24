// get the form

let form = document.querySelector('form');
let taskPendingContainer = document.querySelector('.taskPendingData');
let toDos = [];
let editForm = document.querySelector('#editForm');
let taskCompleteContainer = document.querySelector('.taskCompleteData');

//  statistics zone
let completeTask = document.querySelector('.completeTotal');
let pendingTask = document.querySelector('.pendingTotal');
let totalTask = document.querySelector('.taskTotal');

// button
let buttonEditTask = document.querySelector('taskEdit');

const generateID = () => {
	return Math.floor(Math.random() * 100);
};

form.addEventListener('submit', (e) => {
	e.preventDefault();

	let title = form.title.value;
	let description = form.description.value;
	let date = form.date.value;

	let toDo = {
		id: generateID(),
		title,
		description,
		date,
		completed: false,
	};

	toDos.push(toDo);
    form.reset()

	displayTaskPending();
	countTask()
});

function displayTaskPending() {
	taskPendingContainer.innerHTML = '';
	toDos
		.filter((todo) => todo.completed === false)
		.forEach((todo) => {
			taskPendingContainer.innerHTML += `<div class="dataToDo">
        <h3>${todo.title}<h3>
         <h3>${todo.description}</h3>
          <h3>${todo.date}</h3>  
           <h6>
          <button onClick="updateTask(${todo.id})" class='taskEdit'><ion-icon name="create"></ion-icon></button> <button onclick=complete(${todo.id})><ion-icon name="checkmark-done-circle"></ion-icon></button> <button onClick="deleteTask(${todo.id})"> <ion-icon name="trash"></ion-icon></button>
          </h6>
          </div>`;
		});

		countTask()
}

// Delete
function deleteTask(id) {
	toDos = toDos.filter((todo) => todo.id !== id);
	console.log(toDos);
	displayTaskPending();
    displayTaskComplete()
}

// Update

let updateTask = (id) => {
	let todo = toDos.find((todo) => todo.id == id);
	editForm.title.value = todo.title;
	editForm.description.value = todo.description;
	editForm.date.value = todo.date;
	editForm.id.value = todo.id;
	editForm.style.display = 'block';
	form.style.display = 'none';
};

// buttonEditTask.addEventListener('click', (e) => {
	
// 	editTitle=document.querySelector('.edit')
// 	editTitle.innerHTML=`
// 	<h4 align="center" >Update Task</h4>
// 	`

// });

editForm.addEventListener('submit', (e) => {
	e.preventDefault();


	let title = editForm.title.value;
	let description = editForm.description.value;
	let date = editForm.date.value;
	let id = editForm.id.value;

	id = Number(id);
	console.log(id);
	let todo = toDos.find((todo) => todo.id === id);
	console.log(todo);
	todo.id = id;
	todo.title = title;
	todo.description = description;
	todo.date = date;
    todo.completed = false
	console.log(editForm);
    editForm.reset()
	displayTaskPending();
    displayTaskComplete();
	countTask()
});

function displayTaskComplete() {
	taskCompleteContainer.innerHTML = '';
	toDos
		.filter((todo) => todo.completed === true)
		.forEach((todo) => {
			taskCompleteContainer.innerHTML += `<div class="dataToDo">
        <h3>${todo.title}<h3>
         <h3>${todo.description}</h3>
          <h3>${todo.date}</h3>  
           <h6>
          <button onClick="updateTask(${todo.id})" class='taskEdit'><ion-icon name="create"></ion-icon></button> <button onclick=complete(${todo.id})><ion-icon name="checkmark-done-circle"></ion-icon></button> <button onClick="deleteTask(${todo.id})"> <ion-icon name="trash"></ion-icon></button>
          </h6>
		  
          </div>`;
		});
}
 let complete =(id)=>{
    let todo=toDos.find(todo=>todo.id ===id)
    if(todo.completed){
        todo.completed=false
        console.log(todo)
        displayTaskComplete()
        displayTaskPending()
    }else{
        todo.completed=true
        console.log(todo)
        displayTaskComplete()
        displayTaskPending()
    }
 }


 function countTask() {
	const completedTasksArray = toDos.filter((toDo) => {
		toDo.Completed === true;
	});

	totalTask.textContent = toDos.length;
	completeTask.textContent = completedTasksArray.length;
	console.log(completedTasksArray.length);
	pendingTask.textContent = toDos.length - completedTasksArray.length;
	
	
// console.log( toDos.length);
}