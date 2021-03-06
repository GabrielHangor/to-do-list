const UISelectors = {
  container: document.querySelector(".container"),
  sidebar: document.querySelector(".sidebar"),
  mainContent: document.querySelector(".main-content"),
  menuBars: document.querySelector(".menu-bars"),
  projectModalEl: document.querySelector(".form-container-project"),
  todoModalEl: document.querySelector(".form-container-todo"),
  addProjectBtn: document.querySelector(".add-project-btn"),
  projectCancelBtn: document.querySelector(".project-cancel-btn"),
  projectNameInput: document.querySelector(".project-name-input"),
  projectSubmitBtn: document.querySelector(".project-submit-btn"),
  projectsListEl: document.querySelector(".projects"),
  currentProjectName: document.querySelector(".current-project-name"),
  todoAddBtn: document.querySelector(".add-todo"),
  todoCancelBtn: document.querySelector(".todo-cancel-btn"),
  todoSubmitBtn: document.querySelector(".todo-submit-btn"),
  todoModalEl: document.querySelector(".form-container-todo"),
  todoNameInput: document.querySelector(".todo-name-input"),
  todoDescriptionInput: document.querySelector(".task-description-input"),
  todoDateInput: document.querySelector(".task-duedate-input"),
  todoPriorityInput: document.querySelector("#priority"),
  todosContainer: document.querySelector(".todos-container"),
  todoEditModalEl: document.querySelector(".form-container-todo-edit"),
  todoEditCancelBtn: document.querySelector(".todo-cancel-btn-edit"),
  todoNameEditInput: document.querySelector(".todo-name-input-edit"),
  todoDescriptionEditInput: document.querySelector(
    ".task-description-input-edit"
  ),
  todoDateEditInput: document.querySelector(".task-duedate-input-edit"),
  todoPriorityEditInput: document.querySelector("#priority-edit"),
  currentTodoName: document.querySelector(".current-todo-name"),
  detailsContainer: document.querySelector(".details-container"),
  detailsName: document.querySelector(".details-name"),
  detailsProjectName: document.querySelector(".details-project-name"),
  detailsDescription: document.querySelector(".details-description"),
  detailsPriority: document.querySelector(".details-priority"),
};

function restrictPreviousDate() {
  const today = new Date().toISOString().split("T")[0];
  UISelectors.todoDateInput.setAttribute("min", today);
  UISelectors.todoDateEditInput.setAttribute("min", today);
}

function getUISelectors() {
  return UISelectors;
}

function toggleTodoDetailsModal() {
  UISelectors.detailsContainer.classList.toggle("details-container-hidden");
}

function populateTodoDetails(todo) {
  const { name, description, priority, projectName } = todo;
  UISelectors.detailsName.textContent = `${name}`;
  UISelectors.detailsProjectName.textContent = `Project: ${projectName}`;
  UISelectors.detailsDescription.textContent = `Description: ${description}`;
  UISelectors.detailsPriority.textContent = `Priority: ${priority}`;
}

function toggleSidebar() {
  UISelectors.sidebar.classList.toggle("sidebar-toggle");
  UISelectors.mainContent.classList.toggle("main-content-toggle");
  UISelectors.menuBars.classList.toggle("change");
}

function toggleProjectModal() {
  UISelectors.projectModalEl.classList.toggle("form-container-project-hidden");
  UISelectors.container.classList.toggle("container-opaque");
  clearProjectInput();
}

function toggleTodoModal() {
  UISelectors.todoModalEl.classList.toggle("form-container-todo-hidden");
  UISelectors.container.classList.toggle("container-opaque");
  clearTodoInput();
}

function toggleTodoEditModal() {
  UISelectors.todoEditModalEl.classList.toggle(
    "form-container-todo-edit-hidden"
  );
  UISelectors.container.classList.toggle("container-opaque");
}

function getProjectName() {
  return UISelectors.projectNameInput.value;
}

function getTodoInput() {
  return {
    todoName: UISelectors.todoNameInput.value,
    todoDescription: UISelectors.todoDescriptionInput.value,
    todoDate: UISelectors.todoDateInput.value,
    todoPriority: UISelectors.todoPriorityInput.value,
  };
}

function getEditTodoInput() {
  return {
    todoName: UISelectors.todoNameEditInput.value,
    todoDescription: UISelectors.todoDescriptionEditInput.value,
    todoDate: UISelectors.todoDateEditInput.value,
    todoPriority: UISelectors.todoPriorityEditInput.value,
  };
}

function renderSidebar(projects) {
  UISelectors.projectsListEl.textContent = "";

  projects.forEach((project, index) => {
    const name = project.name;

    const projectEl = document.createElement("li");
    projectEl.className = "project";

    const todosNumberElSpan = document.createElement("span");
    todosNumberElSpan.className = "project-todos-number";

    const todosNumberElP = document.createElement("p");
    todosNumberElP.textContent = `${project.todos.length}`;

    const projectName = document.createElement("p");
    projectName.className = "project-name";
    projectName.textContent = `${name}`;

    const projectDeleteBtn = document.createElement("i");
    projectDeleteBtn.id = "delete-project-btn";
    projectDeleteBtn.className = "fas fa-trash";

    projectEl.setAttribute("data-index", index);

    todosNumberElSpan.appendChild(todosNumberElP);
    projectEl.append(todosNumberElSpan, projectName, projectDeleteBtn);
    UISelectors.projectsListEl.appendChild(projectEl);
  });

  clearProjectInput();
}

function renderCurrentProjectName(data) {
  UISelectors.currentProjectName.textContent = data.currentProject.name;
}

function addTodoBtnDisable(data) {
  if (data.projects.length === 0 || !data.currentProject) {
    UISelectors.todoAddBtn.classList.toggle("add-todo-disabled");
    UISelectors.currentProjectName.textContent =
      "Add New Project Or Select One";
  }
}

function addTodoBtnEnable() {
  UISelectors.todoAddBtn.classList.remove("add-todo-disabled");
}

function renderCurrentProjectTodos(todos) {
  clearTodoList();

  todos.forEach((todo, index) => {
    const { name, date, isCompleted } = todo;

    const todoEl = document.createElement("div");
    todoEl.className = "todo";
    todoEl.setAttribute("data-index", index);

    const todoNameCheckBox = document.createElement("div");
    todoNameCheckBox.className = "todo-name-checkbox";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "isCompleted";
    checkbox.id = "completed";

    const todoName = document.createElement("div");
    todoName.className = "todo-name";
    todoName.textContent = `${name}`;

    const todoDateBtns = document.createElement("div");
    todoDateBtns.className = "todo-date-btns";

    const todoDate = document.createElement("div");
    todoDate.className = "todo-date";
    todoDate.textContent = `${date}`;

    const editBtn = document.createElement("i");
    editBtn.className = "far fa-edit";

    const deleteBtn = document.createElement("i");
    deleteBtn.className = "fas fa-times";

    if (isCompleted) {
      checkbox.setAttribute("checked", "checked");
      todoEl.classList.toggle("todo-opaque");
      todoDateBtns.classList.toggle("todo-date-btns-disabled");
      todoName.classList.toggle("todo-name-events-disabled");
    }

    todoNameCheckBox.append(checkbox, todoName);
    todoDateBtns.append(todoDate, editBtn, deleteBtn);
    todoEl.append(todoNameCheckBox, todoDateBtns);
    UISelectors.todosContainer.insertBefore(todoEl, UISelectors.todoAddBtn);
  });
}

function populateTodoEditModal(todoObj) {
  const { name, description, date, priority } = todoObj;
  UISelectors.currentTodoName.textContent = `${name}`;
  UISelectors.todoNameEditInput.value = name;
  UISelectors.todoDescriptionEditInput.value = description;
  UISelectors.todoDateEditInput.value = date;
  UISelectors.todoPriorityEditInput.value = priority;
}

function clearTodoList() {
  const todos = document.querySelectorAll(".todo");
  todos.forEach((todo) => todo.remove());
}

function clearTodoInput() {
  UISelectors.todoModalEl.reset();
}

function clearProjectInput() {
  setTimeout(() => {
    UISelectors.projectNameInput.value = "";
  }, 1000);
}

function getProjectIndex(event) {
  const projectIndex = event.target.parentElement.getAttribute("data-index");
  return projectIndex;
}

function getTodoIndex(event) {
  const todoIndex = event.target.closest(".todo").getAttribute("data-index");
  return todoIndex;
}

export default {
  getUISelectors,
  toggleSidebar,
  toggleProjectModal,
  getProjectName,
  renderSidebar,
  getProjectIndex,
  renderCurrentProjectName,
  toggleTodoModal,
  getTodoInput,
  renderCurrentProjectTodos,
  getTodoIndex,
  toggleTodoEditModal,
  populateTodoEditModal,
  getEditTodoInput,
  restrictPreviousDate,
  toggleTodoDetailsModal,
  populateTodoDetails,
  addTodoBtnDisable,
  addTodoBtnEnable,
};
