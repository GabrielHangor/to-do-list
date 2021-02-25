import DOM from "./modules/DOM.js";
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
  UISelectors.todoModalEl.addEventListener("submit", todoAddSubmit);
  UISelectors.projectModalEl.addEventListener("submit", projectAddSubmit);
  UISelectors.projectsListEl.addEventListener("click", deleteProject);
  UISelectors.projectsListEl.addEventListener("click", displayCurrentProject);
  UISelectors.todosContainer.addEventListener("click", deleteTodo);
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

  DOMCtrl.toggleTodoModal();
  e.preventDefault();
}

// возможность создания новых тасков будет только внутри страниц проектов, не на главной/отсортированной

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
    DOM.renderCurrentProjectTodos(Logic.data.projects[currentProjectIndex].todos);
  }
}

function displayCurrentProject(e) {
  if (e.target.className === "project-name") {
    const index = DOMCtrl.getProjectIndex(e);
    Logic.setCurrentProject(index);
    DOMCtrl.renderCurrentProjectName(Logic.data);
    const currentProjectIndex = Logic.getCurrentProjectIndex();
    DOMCtrl.renderCurrentProjectTodos(Logic.data.projects[currentProjectIndex].todos);
    console.log(Logic.data);
  }
}

function init() {
  loadEventListeners();
}

init();
