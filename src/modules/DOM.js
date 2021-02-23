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
};

function getUISelectors() {
  return UISelectors;
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

function renderSidebar(projects) {
  UISelectors.projectsListEl.textContent = "";

  projects.forEach((project, index) => {
    const name = project.name;

    const projectEl = document.createElement("li");
    projectEl.className = "project";
    const todosNumberElSpan = document.createElement("span");
    todosNumberElSpan.className = "project-todos-number";
    const todosNumberElP = document.createElement("p");
    todosNumberElP.textContent = "3";
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

function renderMainContent(data) {
  UISelectors.currentProjectName.textContent = data.currentProject.name;
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

export default {
  getUISelectors,
  toggleSidebar,
  toggleProjectModal,
  getProjectName,
  renderSidebar,
  getProjectIndex,
  renderMainContent,
  toggleTodoModal,
  getTodoInput,
};
