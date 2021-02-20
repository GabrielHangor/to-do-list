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
  UISelectors.projectModalEl.addEventListener("submit", projectAddSubmit);
  UISelectors.projectsListEl.addEventListener("click", deleteProject);
}

function projectAddSubmit(e) {
  const projectName = DOMCtrl.getProjectName();
  Logic.createNewProject(projectName);
  DOMCtrl.renderSidebar(Logic.data.projects);
  DOMCtrl.toggleProjectModal();

  e.preventDefault();
}

function deleteProject(e) {
  if (e.target.id === "delete-project-btn") {
    const index = DOMCtrl.getProjectIndex(e);
    Logic.deleteProjectFromDataArray(index);
    DOMCtrl.renderSidebar(Logic.data.projects);
  }
}

// вывод окна текущего выбранного проекта

function init() {
  loadEventListeners();
}

init();
