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
  console.log(todoInput);


  DOMCtrl.toggleTodoModal();
  e.preventDefault();
}

function deleteProject(e) {
  if (e.target.id === "delete-project-btn") {
    const index = DOMCtrl.getProjectIndex(e);
    Logic.deleteProjectFromDataArray(index);
    DOMCtrl.renderSidebar(Logic.data.projects);
  }
}

function displayCurrentProject(e) {
  if (e.target.className === "project-name") {
    const index = DOMCtrl.getProjectIndex(e);
    Logic.setCurrentProject(index);
    DOMCtrl.renderMainContent(Logic.data);
    console.log(Logic.data);
  }
}

function init() {
  loadEventListeners();
}

init();
