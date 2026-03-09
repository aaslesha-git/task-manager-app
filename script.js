let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){
let list = document.getElementById("taskList");
list.innerHTML = "";

tasks.forEach((task,index)=>{

let li = document.createElement("li");
li.innerText = task.text;

if(task.completed){
li.classList.add("completed");
}

li.onclick = function(){
task.completed = !task.completed;
saveTasks();
};

let del = document.createElement("button");
del.innerText = "X";

del.onclick = function(e){
e.stopPropagation();
tasks.splice(index,1);
saveTasks();
}

li.appendChild(del);
list.appendChild(li);

});

document.getElementById("taskCount").innerText = tasks.length;
}

function addTask(){

let input = document.getElementById("taskInput");

if(input.value === "") return;

tasks.push({
text:input.value,
completed:false
});

input.value="";

saveTasks();
}

function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks));
renderTasks();
}

function clearTasks(){
tasks=[];
saveTasks();
}

function toggleDarkMode(){
document.body.classList.toggle("dark");
}

renderTasks();