let taskCounter = 1; // Initialize task counter to keep track of task numbers
let tasks = []; // Array to hold task objects

// Event listener for the "Add Task" button
document.getElementById('addTaskButton').addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput'); // Get the task input field
    const prioritySelect = document.getElementById('prioritySelect'); // Get the priority dropdown
    const taskText = taskInput.value.trim(); // Get and trim the task text
    const priority = prioritySelect.value; // Get the selected priority

    // Prevent adding empty tasks
    if (taskText === '') return;

    // Create a task object
    const task = {
        id: taskCounter,
        text: taskText,
        priority: priority,
        completed: false,
        dueDate: new Date() // Example due date; can be modified to include a user input
    };
    tasks.push(task); // Add the task to the tasks array

    const taskList = document.getElementById('taskList'); // Get the task list element
    const li = document.createElement('li'); // Create a new list item

    // Set the inner HTML for the new task item
    li.innerHTML = `
        <input type="checkbox" onclick="toggleCompletion(this, ${taskCounter})"> <!-- Checkbox to mark completion -->
        <span class="priority-${priority}">${taskCounter}. ${taskText} (Priority: ${priority.charAt(0).toUpperCase() + priority.slice(1)})</span>
        <button onclick="removeTask(this)">Delete</button> <!-- Button to delete the task -->
    `;
    
    taskList.appendChild(li); // Add the new task item to the list
    taskInput.value = ''; // Clear the input field for new tasks
    prioritySelect.value = 'low'; // Reset priority to 'low'
    taskCounter++; // Increment the task counter for the next task

    updateVisualizations(); // Update visualizations after adding a task
}

// Function to remove a task
function removeTask(button) {
    const li = button.parentElement; // Get the parent list item of the button
    const taskId = parseInt(li.firstChild.nextSibling.innerText.split('.')[0]); // Get task ID from list item
    tasks = tasks.filter(task => task.id !== taskId); // Remove task from tasks array
    li.remove(); // Remove the task from the list
    updateTaskNumbers(); // Update task numbers after removal
    updateVisualizations(); // Update visualizations after removing a task
}

// Function to toggle task completion status
function toggleCompletion(checkbox, taskId) {
    const task = tasks.find(t => t.id === taskId); // Find the task object
    task.completed = checkbox.checked; // Update the completed status

    const taskText = checkbox.nextElementSibling; // Get the span element after the checkbox
    if (checkbox.checked) {
        taskText.classList.add('completed'); // Add completed class for styling
        taskText.innerHTML = taskText.innerHTML.replace(' (Pending)', ' (Completed)'); // Update text
    } else {
        taskText.classList.remove('completed'); // Remove completed class for styling
        taskText.innerHTML = taskText.innerHTML.replace(' (Completed)', ' (Pending)'); // Update text
    }
    
    updateVisualizations(); // Update visualizations after toggling completion
}

// Function to update task numbers after a task is removed
function updateTaskNumbers() {
    const taskList = document.getElementById('taskList'); // Get the task list element
    const tasks = taskList.getElementsByTagName('li'); // Get all task items

    // Loop through the tasks and update the numbering
    for (let i = 0; i < tasks.length; i++) {
        const taskText = tasks[i].getElementsByTagName('span')[0]; // Get the task text span
        taskText.innerHTML = `${i + 1}. ${taskText.innerHTML.split('. ')[1]}`; // Update the number
    }
}

// Function to update visualizations
function updateVisualizations() {
    updateCompletionChart(); // Update the completion pie chart
    updateTaskTimeline(); // Update the task timeline
}

// Function to update the task completion chart (Pie Chart)
function updateCompletionChart() {
    const completedCount = tasks.filter(task => task.completed).length;
    const pendingCount = tasks.length - completedCount;

    const data = [
        { status: 'Completed', count: completedCount },
        { status: 'Pending', count: pendingCount }
    ];

    const svg = d3.select("#completionChart");
    svg.selectAll("*").remove(); // Clear previous chart

    const radius = Math.min(svg.attr("width"), svg.attr("height")) / 2;
    const g = svg.append("g").attr("transform", `translate(${radius}, ${radius})`);

    const color = d3.scaleOrdinal(["#4CAF50", "#FF9800"]);

    const pie = d3.pie().value(d => d.count);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const arcs = g.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");

    arcs.append("path")
        .attr("d", arc)
        .attr("fill", d => color(d.data.status));

    arcs.append("text")
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        .attr("dy", ".35em")
        .text(d => d.data.status);
}

// Function to update the task timeline (assuming due dates)
function updateTaskTimeline() {
    const svg = d3.select("#taskTimeline");
    svg.selectAll("*").remove(); // Clear previous timeline

    const dueDates = tasks.map(task => task.dueDate); // Get due dates
    const xScale = d3.scaleBand()
        .domain(dueDates.map(d => d.toDateString()))
        .range([0, 600])
        .padding(0.1);

    svg.append("g")
        .selectAll("rect")
        .data(dueDates)
        .enter().append("rect")
        .attr("x", d => xScale(d.toDateString()))
        .attr("y", 0)
        .attr("height", 50) // Fixed height for visualization
        .attr("width", xScale.bandwidth())
        .attr("fill", "steelblue");
}

// Function to create interactive task filtering
function createFilterButtons() {
    const filterButtons = d3.select("#filterButtons");
    filterButtons.selectAll("*").remove(); // Clear existing buttons

    const statuses = ['All', 'Completed', 'Pending'];

    statuses.forEach(status => {
        filterButtons.append("button")
            .text(status)
            .on("click", () => filterTasks(status));
    });
}

// Function to filter tasks based on completion status
function filterTasks(status) {
    const filteredTasks = status === 'All' ? tasks : tasks.filter(task => 
        (status === 'Completed' && task.completed) || 
        (status === 'Pending' && !task.completed)
    );

    // Update task list based on filtered tasks
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear current task list

    filteredTasks.forEach(task => {
        const li = document.createElement('li'); // Create a new list item
        li.innerHTML = `
            <input type="checkbox" onclick="toggleCompletion(this, ${task.id})" ${task.completed ? 'checked' : ''}> <!-- Checkbox to mark completion -->
            <span class="priority-${task.priority}">${task.id}. ${task.text} (Priority: ${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)})</span>
            <button onclick="removeTask(this)">Delete</button> <!-- Button to delete the task -->
        `;
        taskList.appendChild(li); // Add the new task item to the list
    });
}

// Call createFilterButtons on page load
createFilterButtons();
