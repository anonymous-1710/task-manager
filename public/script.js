async function loadTasks() {
    let res = await fetch('/tasks');
    let tasks = await res.json();

    let list = document.getElementById('taskList');
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.innerText = task.name;
        li.onclick = () => deleteTask(index);
        list.appendChild(li);
    });
}

async function addTask() {
    let input = document.getElementById('taskInput');

    await fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: input.value })
    });

    input.value = "";
    loadTasks();
}

async function deleteTask(index) {
    await fetch(`/tasks/${index}`, { method: 'DELETE' });
    loadTasks();
}

loadTasks();

console.log("webhook test again");