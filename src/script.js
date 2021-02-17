import DOMCtrl from "./modules/DOM.js";
import Logic from "./modules/logic.js";

function loadEventListeners() {
  const UISelectors = DOMCtrl.getUISelectors();

  UISelectors.menuBars.addEventListener("click", DOMCtrl.toggleSidebar);
  UISelectors.addProjectBtn.addEventListener('click', DOMCtrl.toggleProjectModal);
  UISelectors.projectCancelBtn.addEventListener('click', DOMCtrl.toggleProjectModal);
  UISelectors.projectSubmitBtn.addEventListener("click", projectAddSubmit);
}

function projectAddSubmit() {
  const projectName = DOMCtrl.getProjectName();
  const newProject = Logic.getProject(projectName)
  console.log(newProject);
  DOMCtrl.toggleProjectModal();
}





function init() {
  loadEventListeners();
}

init();
