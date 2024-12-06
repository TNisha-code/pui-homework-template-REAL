let taskCounter = 1; // Initialize task counter
let tasks = []; // Store tasks
let currentFilter = 'all'; // Store current filter

// Event listener for the "Add Task" button
document.getElementById('addTaskButton').addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput'); // Get task input
    const prioritySelect = document.getElementById('prioritySelect'); // Get priority dropdown
    const dueDateInput = document.getElementById('dueDateInput'); // Get due date input
    const taskText = taskInput.value.trim(); // Get task text
    const priority = prioritySelect.value; // Get selected priority
    const dueDate = dueDateInput.value; // Get due date

    // Prevent adding empty tasks
    if (taskText === '') return;

    const task = {
        id: taskCounter,
        text: taskText,
        priority: priority,
        dueDate: dueDate,
        completed: false,
        subtasks: [] // New array to store subtasks based on class feedback
    };

    tasks.push(task); // Add task to array
    renderTasks(); // Render tasks
    taskCounter++; // Increment task counter
    taskInput.value = ''; // Clear input field
    prioritySelect.value = 'low'; // Reset priority
    dueDateInput.value = ''; // Clear due date
}

function renderTasks() {
    const taskList = document.getElementById('taskList'); // Get task list container
    taskList.innerHTML = ''; // Clear existing tasks

    tasks.forEach(task => {
        if (shouldRenderTask(task)) {
            // Create the main task list item
            const li = document.createElement('li'); // Main task item
            li.innerHTML = `
                <input type="checkbox" onclick="toggleCompletion(${task.id}, this)" ${task.completed ? 'checked' : ''}>
                <span class="priority-${task.priority}" title="${getPriorityDescription(task.priority)}">
                    ${task.id}. ${task.text} (Priority: ${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}) - Due: ${task.dueDate}
                </span>
                <button class="delete-button" onclick="removeTask(${task.id})">Delete</button>
                
                <!-- Subtask list container -->
                <ul id="subtaskList-${task.id}"></ul> 
                
                <!-- Subtask input field and add button -->
                <input type="text" id="subtaskInput-${task.id}" placeholder="Add a subtask">
                <button onclick="addSubtask(${task.id})">Add Subtask</button>
            `;

            taskList.appendChild(li); // Add main task item to the task list
            renderSubtasks(task.id); // Render the subtasks for the current task
        }
    });

    // Check if all tasks are completed, and if so, show the tree
    if (checkAllTasksCompleted()) {
        showTree(); // Show the tree if all tasks are completed
    }
}

// Function to determine if a task should be shown based on the current filter
function shouldRenderTask(task) {
    switch (currentFilter) {
        case 'completed':
            return task.completed;
        case 'pending':
            return !task.completed;
        case 'all':
        default:
            return true;
    }
}

// Function to get priority description
function getPriorityDescription(priority) {
    switch (priority) {
        case 'low':
            return 'Low priority: This task is not urgent and can be completed later.';
        case 'medium':
            return 'Medium priority: This task should be completed soon.';
        case 'high':
            return 'High priority: This task is urgent and needs immediate attention.';
        default:
            return '';
    }
}

// Function to remove a task
function removeTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId); // Remove task from array
    renderTasks(); // Re-render tasks
}

// Function to toggle task completion status
function toggleCompletion(taskId, checkbox) {
    const task = tasks.find(t => t.id === taskId); // Find task by ID
    task.completed = checkbox.checked; // Update completion status
    renderTasks(); // Re-render tasks
}

// Function to filter tasks
function filterTasks(filter) {
    currentFilter = filter; // Set the current filter
    renderTasks(); // Re-render tasks based on the new filter
}


// This section is for Sub Task JS actions //

function addSubtask(taskId) {
    const subtaskInput = document.getElementById(`subtaskInput-${taskId}`);
    const subtaskText = subtaskInput.value.trim();

    if (subtaskText === '') return; // Prevent adding empty subtasks

    // Find the task by ID and add the new subtask
    const task = tasks.find(t => t.id === taskId);
    const subtask = {
        id: `${taskId}-${task.subtasks.length + 1}`, // Unique ID for the subtask
        text: subtaskText,
        completed: false
    };

    task.subtasks.push(subtask); // Add subtask to the task
    renderTasks(); // Re-render tasks to show the new subtask
    subtaskInput.value = ''; // Clear the subtask input field
}

function renderSubtasks(taskId) {
    const task = tasks.find(t => t.id === taskId);
    const subtaskList = document.getElementById(`subtaskList-${taskId}`); // Subtask container for the specific task
    subtaskList.innerHTML = ''; // Clear existing subtasks

    task.subtasks.forEach(subtask => {
        const li = document.createElement('li'); // Subtask list item
        li.innerHTML = `
            <input type="checkbox" onclick="toggleSubtaskCompletion(${taskId}, '${subtask.id}', this)" ${subtask.completed ? 'checked' : ''}>
            <span>${subtask.text}</span>
            <button onclick="removeSubtask(${taskId}, '${subtask.id}')">Delete</button>
        `;
        subtaskList.appendChild(li); // Add subtask item to subtask list
    });
}

// Toggle completion status of a subtask
function toggleSubtaskCompletion(taskId, subtaskId, checkbox) {
    const task = tasks.find(t => t.id === taskId);
    const subtask = task.subtasks.find(st => st.id === subtaskId);
    subtask.completed = checkbox.checked;
    renderTasks(); // Re-render tasks to reflect changes
}

// Remove a specific subtask
function removeSubtask(taskId, subtaskId) {
    const task = tasks.find(t => t.id === taskId);
    task.subtasks = task.subtasks.filter(st => st.id !== subtaskId); // Filter out the subtask
    renderTasks(); // Re-render tasks
}

// The section above is for Subtask JS actions //




// Add filter buttons
const filterButtons = document.getElementById('filterButtons');
filterButtons.innerHTML = `
    <button onclick="filterTasks('all')">All</button>
    <button onclick="filterTasks('completed')">Completed</button>
    <button onclick="filterTasks('pending')">Pending</button>
`;

// Function to check if all tasks are completed
function checkAllTasksCompleted() {
    return tasks.every(task => task.completed); // Check if all tasks are completed
}

// // Function to show the tree
// function showTree() {
//     const treeGraphic = document.getElementById('treeGraphic');
//     const seed = document.getElementById('seed');
//     const tree = document.getElementById('tree');

//     // Show the SVG graphic
//     treeGraphic.style.display = 'block';

//     // Animate the seed to sprout into a tree
//     seed.style.transform = 'translateY(-50px) scale(0.5)'; // Move seed up and shrink

//     setTimeout(() => {
//         seed.style.opacity = '0'; // Fade out the seed
//         tree.style.opacity = '1'; // Fade in the tree
//     }, 1000); // Wait for seed animation to finish
// }
