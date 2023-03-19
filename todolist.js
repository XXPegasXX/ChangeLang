let counterId = 0;
function addNewTask(){
    const newTaskDescription = document.getElementById("newTask").value;
    const taskList = document.getElementById("taskList");
    let newTask = document.createElement("li");
    newTask.id = counterId++;
    newTask.innerHTML = newTaskDescription+`<button onclick="deleteTask(event)">Удалить</button>`;
    taskList.appendChild(newTask);
}

function deleteTask(event){
    console.log(event);
    event.target.parentElement.remove();
    //const element = document.getElementById(counterId);
    //element.remove();
}
