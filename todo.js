//  get tasks form 
let form = document.querySelector('form')

//  statistics zone
let completeTask = document.getElementById('totalComplete')
let pendingTask = document.getElementById('totalPending')
let totalTask = document.getElementById('taskTotal')

// get the ul list
let toDoList = document.querySelector('.myTasks')

  
// LOCAL STORAGE

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

form.addEventListener('submit', (e)=>{
    e.preventDefault()
   
    // Get input data
    let inputData = document.getElementById('taskInput').value

    console.log(inputData)
   

    
    

    
})

