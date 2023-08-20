const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button class="delete">Delete</button>
    `;

    const deleteButton = li.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
      li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
  }
});
