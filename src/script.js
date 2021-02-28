import DOMCtrl from "./modules/DOM.js";
import Logic from "./modules/logic.js";

function loadEventListeners() {
  const UISelectors = DOMCtrl.getUISelectors();

  UISelectors.menuBars.addEventListener("click", DOMCtrl.toggleSidebar);
  UISelectors.addProjectBtn.addEventListener(
    "click",
    DOMCtrl.toggleProjectModal
  );
  UISelectors.projectCancelBtn.addEventListener(
    "click",
    DOMCtrl.toggleProjectModal
  );
  UISelectors.todoAddBtn.addEventListener("click", DOMCtrl.toggleTodoModal);
  UISelectors.todoCancelBtn.addEventListener("click", DOMCtrl.toggleTodoModal);
  UISelectors.todoEditCancelBtn.addEventListener(
    "click",
    DOMCtrl.toggleTodoEditModal
  );
  UISelectors.todoModalEl.addEventListener("submit", todoAddSubmit);
  UISelectors.projectModalEl.addEventListener("submit", projectAddSubmit);
  UISelectors.projectsListEl.addEventListener("click", deleteProject);
  UISelectors.projectsListEl.addEventListener("click", displayCurrentProject);
  UISelectors.todosContainer.addEventListener("click", deleteTodo);
  UISelectors.todosContainer.addEventListener(
    "click",
    togglePopulateTodoEditModal
  );
  UISelectors.todoEditModalEl.addEventListener("submit", todoEditSubmit);
  UISelectors.todosContainer.addEventListener("change", todoToggleCompleted);
}

function projectAddSubmit(e) {
  const projectName = DOMCtrl.getProjectName();
  Logic.createNewProject(projectName);
  DOMCtrl.renderSidebar(Logic.data.projects);
  DOMCtrl.toggleProjectModal();

  e.preventDefault();
}

function todoAddSubmit(e) {
  const todoInput = DOMCtrl.getTodoInput();
  const currentProjectIndex = Logic.getCurrentProjectIndex();
  Logic.createNewTodo(todoInput, currentProjectIndex);
  DOMCtrl.renderCurrentProjectTodos(
    Logic.data.projects[currentProjectIndex].todos
  );
  DOMCtrl.renderSidebar(Logic.data.projects);

  DOMCtrl.toggleTodoModal();
  e.preventDefault();
}

function todoEditSubmit(e) {
  const todoInput = DOMCtrl.getEditTodoInput();
  const currentProjectIndex = Logic.getCurrentProjectIndex();
  const index = Logic.getCurrentTodoIndex(currentProjectIndex);
  Logic.setNewTodoProperties(todoInput, currentProjectIndex, index);
  DOMCtrl.renderCurrentProjectTodos(
    Logic.data.projects[currentProjectIndex].todos
  );

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
  }
}

// возможность создания новых тасков будет только внутри страниц проектов, не на главной/отсортированной
// 1 при клике на чекбокс менять свойство isCompleted на true

function deleteProject(e) {
  if (e.target.id === "delete-project-btn") {
    const index = DOMCtrl.getProjectIndex(e);
    Logic.deleteProjectFromDataArray(index);
    DOMCtrl.renderSidebar(Logic.data.projects);
  }
}

function deleteTodo(e) {
  if (e.target.className === "fas fa-times") {
    const index = DOMCtrl.getTodoIndex(e);
    const currentProjectIndex = Logic.getCurrentProjectIndex();
    Logic.deleteTodoFromData(index, currentProjectIndex);
    DOMCtrl.renderCurrentProjectTodos(
      Logic.data.projects[currentProjectIndex].todos
    );
    DOMCtrl.renderSidebar(Logic.data.projects);
  }
}

function displayCurrentProject(e) {
  if (e.target.className === "project-name") {
    const index = DOMCtrl.getProjectIndex(e);
    Logic.setCurrentProject(index);
    DOMCtrl.renderCurrentProjectName(Logic.data);
    const currentProjectIndex = Logic.getCurrentProjectIndex();
    DOMCtrl.renderCurrentProjectTodos(
      Logic.data.projects[currentProjectIndex].todos
    );
    console.log(Logic.data);
  }
}

function init() {
  loadEventListeners();
}

init();
