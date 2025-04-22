function applyChanges() {
    const name = document.getElementById('name').value;
    const customMessage = document.getElementById('customMessage').value;
    const bgColor = document.getElementById('bgColor').value;

    if (name) {
        document.getElementById('greeting').innerText = `Hello ${name}!`;
    }

    if (customMessage) {
        document.getElementById('message').innerText = customMessage;
    }

    document.body.style.backgroundColor = bgColor;
}

function addToDo() {
    const todoItem = document.getElementById('todoItem').value;
    if (todoItem) {
        const li = document.createElement('li');
        li.innerText = todoItem;
        document.getElementById('todoList').appendChild(li);
        document.getElementById('todoItem').value = ''; // Clear the input
    }
}