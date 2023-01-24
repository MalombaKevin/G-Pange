// get the form

let form = document.querySelector('form');
let taskPendingContainer = document.querySelector('.taskPendingData');
let toDos = [];
let editForm = document.querySelector('#editForm');
let taskCompleteContainer = document.querySelector('.taskCompleteData');

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
});

function displayTaskPending() {
	taskPendingContainer.innerHTML = '';
	toDos
		.filter((todo) => todo.completed === false)
		.forEach((todo) => {
			taskPendingContainer.innerHTML += `<div class="dataToDo">
        <h3>${todo.title}<h3>
         <h3>${todo.description}</h3>
          <h6>${todo.date}</h6>  
           <h6>
          <button onClick="updateTask(${todo.id})"><ion-icon name="create"></ion-icon></button> <button onclick=complete(${todo.id})><ion-icon name="checkmark-done-circle"></ion-icon></button> <button onClick="deleteTask(${todo.id})"> <ion-icon name="trash"></ion-icon></button>
          </h6>
          </div>`;
		});
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
});

function displayTaskComplete() {
	taskCompleteContainer.innerHTML = '';
	toDos
		.filter((todo) => todo.completed === true)
		.forEach((todo) => {
			taskCompleteContainer.innerHTML += `<div class="dataToDo">
        <h3>${todo.title}<h3>
         <h3>${todo.description}</h3>
          <h6>${todo.date}</h6>  
           <h6>
          <button onClick="updateTask(${todo.id})"><ion-icon name="create"></ion-icon></button> <button onclick=complete(${todo.id})><ion-icon name="checkmark-done-circle"></ion-icon></button> <button onClick="deleteTask(${todo.id})"> <ion-icon name="trash"></ion-icon></button>
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


// let inComplete =(id)=>{
//    let todo=toDos.find(todo=>todo.id ===id)
//    todo.completed=false
//    console.log(todo)
//    displayTaskComplete()
// }