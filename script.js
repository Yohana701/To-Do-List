document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    
    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-btn">Completed</button>
            <button class="delete-btn">Delete</button>
        `;

        taskItem.querySelector('.complete-btn').addEventListener('click', function() {
            taskItem.classList.toggle('completed');
            // Toggle line-through style on the task text
            const taskSpan = taskItem.querySelector('span');
            taskSpan.style.textDecoration = taskItem.classList.contains('completed') ? 'line-through' : 'none';
        });

        taskItem.querySelector('.delete-btn').addEventListener('click', function() {
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
    }
});
