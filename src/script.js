import DOMCtrl from "./modules/DOM.js";
import Logic from "./modules/logic.js";

function loadEventListeners() {
  const UISelectors = DOMCtrl.getUISelectors();

  UISelectors.menuBars.addEventListener("click", DOMCtrl.toggleSidebar);
  UISelectors.addProjectBtn.addEventListener('click', DOMCtrl.toggleProjectModal);
  UISelectors.projectCancelBtn.addEventListener('click', DOMCtrl.toggleProjectModal);
  UISelectors.projectModalEl.addEventListener("submit", projectAddSubmit);
}

function projectAddSubmit(e) {
  const projectName = DOMCtrl.getProjectName();
  Logic.createNewProject(projectName);
  DOMCtrl.renderSidebar(Logic.data);
  DOMCtrl.toggleProjectModal();

  e.preventDefault();
}

function deleteProject() {
  
}



function init() {
  loadEventListeners();
}

init();
