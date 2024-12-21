const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

const addTask = () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
        alert("You must add something!");
        return;
    }

    const listItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        listItem.remove();
    };

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);

    todoInput.value = "";
};
