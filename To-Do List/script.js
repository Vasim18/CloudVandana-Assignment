function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    let taskValue = taskInput.value.trim();
    if (taskValue === "") {
        alert("Please enter a valid task!");
        return;
    }

    // Create a list item
    let li = document.createElement("li");
    li.innerHTML = `${taskValue} <button class="delete-btn" onclick="removeTask(this)">X</button>`;

    // Add animation
    li.style.opacity = "0";
    taskList.appendChild(li);
    setTimeout(() => li.style.opacity = "1", 100);

    // Clear input
    taskInput.value = "";
}

function removeTask(button) {
    let taskItem = button.parentElement;
    taskItem.style.opacity = "0";  // Fade out
    setTimeout(() => taskItem.remove(), 300);  // Remove after animation
}
