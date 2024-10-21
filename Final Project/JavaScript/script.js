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
    };

    tasks.push(task); // Add task to array
    renderTasks(); // Render tasks
    taskCounter++; // Increment task counter
    taskInput.value = ''; // Clear input field
    prioritySelect.value = 'low'; // Reset priority
    dueDateInput.value = ''; // Clear due date
}

// Function to render tasks based on the current filter
function renderTasks() {
    const taskList = document.getElementById('taskList'); // Get task list
    taskList.innerHTML = ''; // Clear existing tasks

    tasks.forEach(task => {
        if (shouldRenderTask(task)) {
            const li = document.createElement('li'); // Create new list item

            li.innerHTML = `
                <input type="checkbox" onclick="toggleCompletion(${task.id}, this)" ${task.completed ? 'checked' : ''}> <!-- Checkbox -->
                <span class="priority-${task.priority}" title="${getPriorityDescription(task.priority)}">${task.id}. ${task.text} (Priority: ${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}) - Due: ${task.dueDate}</span>
                <button class="delete-button" onclick="removeTask(${task.id})">Delete</button> <!-- Delete button -->
            `;

            taskList.appendChild(li); // Add task item to list
        }
    });

    // Check if all tasks are completed
    if (checkAllTasksCompleted()) {
        showTree(); // Show the tree if all tasks are completed
    }
}

// Function to determine if a task should be rendered based on the current filter
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

// Function to show the tree
function showTree() {
    const treeGraphic = document.getElementById('treeGraphic');
    const seed = document.getElementById('seed');
    const tree = document.getElementById('tree');

    // Show the SVG graphic
    treeGraphic.style.display = 'block';

    // Animate the seed to sprout into a tree
    seed.style.transform = 'translateY(-50px) scale(0.5)'; // Move seed up and shrink

    setTimeout(() => {
        seed.style.opacity = '0'; // Fade out the seed
        tree.style.opacity = '1'; // Fade in the tree
    }, 1000); // Wait for seed animation to finish
}
