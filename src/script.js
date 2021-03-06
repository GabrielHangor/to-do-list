import DOMCtrl from "./modules/DOM.js";
import Logic from "./modules/logic.js";

function loadEventListeners() {
  const UISelectors = DOMCtrl.getUISelectors();

  UISelectors.menuBars.addEventListener("click", DOMCtrl.toggleSidebar);
  UISelectors.addProjectBtn.addEventListener("click",DOMCtrl.toggleProjectModal);
  UISelectors.projectCancelBtn.addEventListener("click",DOMCtrl.toggleProjectModal);
  UISelectors.todoAddBtn.addEventListener("click", DOMCtrl.toggleTodoModal);
  UISelectors.todoCancelBtn.addEventListener("click", DOMCtrl.toggleTodoModal);
  UISelectors.todoEditCancelBtn.addEventListener("click",DOMCtrl.toggleTodoEditModal);
  UISelectors.todoModalEl.addEventListener("submit", todoAddSubmit);
  UISelectors.projectModalEl.addEventListener("submit", projectAddSubmit);
  UISelectors.projectsListEl.addEventListener("click", deleteProject);
  UISelectors.projectsListEl.addEventListener("click", displayCurrentProject);
  UISelectors.todosContainer.addEventListener("click", deleteTodo);
  UISelectors.todosContainer.addEventListener("click",togglePopulateTodoEditModal);
  UISelectors.todoEditModalEl.addEventListener("submit", todoEditSubmit);
  UISelectors.todosContainer.addEventListener("change", todoToggleCompleted);
  UISelectors.todosContainer.addEventListener("mouseover", displayTodoDetails);
  UISelectors.todosContainer.addEventListener("mouseout", hideTodoDetails);
}

function projectAddSubmit(e) {
  const projectName = DOMCtrl.getProjectName();
  Logic.createNewProject(projectName);
  DOMCtrl.renderSidebar(Logic.data.projects);
  DOMCtrl.toggleProjectModal();
  Logic.updateLocalStorage();

  e.preventDefault();
}

function todoAddSubmit(e) {
  const todoInput = DOMCtrl.getTodoInput();
  const currentProjectIndex = Logic.getCurrentProjectIndex();
  Logic.createNewTodo(todoInput, currentProjectIndex);
  DOMCtrl.renderCurrentProjectTodos(Logic.data.projects[currentProjectIndex].todos);
  DOMCtrl.renderSidebar(Logic.data.projects);
  Logic.updateLocalStorage();
  DOMCtrl.toggleTodoModal();
  e.preventDefault();
}

function todoEditSubmit(e) {
  const todoInput = DOMCtrl.getEditTodoInput();
  const currentProjectIndex = Logic.getCurrentProjectIndex();
  const index = Logic.getCurrentTodoIndex(currentProjectIndex);
  Logic.setNewTodoProperties(todoInput, currentProjectIndex, index);
  DOMCtrl.renderCurrentProjectTodos(Logic.data.projects[currentProjectIndex].todos);
  Logic.updateLocalStorage();
  DOMCtrl.toggleTodoEditModal();
  e.preventDefault();
}

function togglePopulateTodoEditModal(e) {
  if (e.target.className === "far fa-edit") {
    DOMCtrl.toggleTodoEditModal();
    const currentProjectIndex = Logic.getCurrentProjectIndex();
    const index = DOMCtrl.getTodoIndex(e);
    const todoObj = Logic.data.projects[currentProjectIndex].todos[index];
    Logic.setCurrentTodo(currentProjectIndex, index);
    DOMCtrl.populateTodoEditModal(todoObj);
  }
}

function todoToggleCompleted(e) {
  if (e.target.id === "completed") {
    const currentProjectIndex = Logic.getCurrentProjectIndex();
    const index = DOMCtrl.getTodoIndex(e);
    Logic.todoToggleData(currentProjectIndex, index);
    DOMCtrl.renderCurrentProjectTodos(Logic.data.projects[currentProjectIndex].todos);
    Logic.updateLocalStorage();
  }
}

function deleteProject(e) {
  if (e.target.id === "delete-project-btn") {
    const index = DOMCtrl.getProjectIndex(e);
    Logic.deleteProjectFromDataArray(index);
    Logic.deleteInvalidCurrentProject();
    DOMCtrl.renderSidebar(Logic.data.projects);
    DOMCtrl.addTodoBtnDisable(Logic.data);
    Logic.updateLocalStorage();
  }
}

function deleteTodo(e) {
  if (e.target.className === "fas fa-times") {
    const index = DOMCtrl.getTodoIndex(e);
    const currentProjectIndex = Logic.getCurrentProjectIndex();
    Logic.deleteTodoFromData(index, currentProjectIndex);
    DOMCtrl.renderCurrentProjectTodos(Logic.data.projects[currentProjectIndex].todos);
    DOMCtrl.renderSidebar(Logic.data.projects);
    Logic.updateLocalStorage();
  }
}

function displayCurrentProject(e) {
  if (e.target.className === "project-name") {
    const index = DOMCtrl.getProjectIndex(e);
    Logic.setCurrentProject(index);
    DOMCtrl.renderCurrentProjectName(Logic.data);
    const currentProjectIndex = Logic.getCurrentProjectIndex();
    DOMCtrl.renderCurrentProjectTodos(Logic.data.projects[currentProjectIndex].todos);
    DOMCtrl.addTodoBtnEnable();
    Logic.updateLocalStorage();
  }
}

function displayTodoDetails(e) {
  if (e.target.className === "todo-name") {
    const currentProjectIndex = Logic.getCurrentProjectIndex();
    const index = DOMCtrl.getTodoIndex(e);
    const todo = Logic.data.projects[currentProjectIndex].todos[index];
    DOMCtrl.populateTodoDetails(todo);
    DOMCtrl.toggleTodoDetailsModal();
  }
}

function hideTodoDetails(e) {
  if (e.target.className === "todo-name") {
    DOMCtrl.toggleTodoDetailsModal();
  }
}

function onLoadRender() {
  if (Logic.data.projects) {
    DOMCtrl.renderSidebar(Logic.data.projects);
  }

  if (Logic.data.currentProject && Logic.data.projects.length !== 0) {
    DOMCtrl.renderCurrentProjectName(Logic.data);
    const currentProjectIndex = Logic.getCurrentProjectIndex();
    DOMCtrl.renderCurrentProjectTodos(Logic.data.projects[currentProjectIndex].todos);
  }
}

function init() {
  loadEventListeners();
  Logic.getStorageData();
  onLoadRender();
  DOMCtrl.addTodoBtnDisable(Logic.data);
  DOMCtrl.restrictPreviousDate();
}

init();
