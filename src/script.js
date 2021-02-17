import DOMCtrl from "./modules/DOM.js";

function loadEventListeners() {
  const UISelectors = DOMCtrl.getUISelectors();

  UISelectors.menuBars.addEventListener("click", DOMCtrl.toggleSidebar);
  UISelectors.addProjectBtn.addEventListener('click', DOMCtrl.toggleProjectModal);
  UISelectors.projectCancelBtn.addEventListener('click', DOMCtrl.toggleProjectModal);
}



function init() {
  loadEventListeners();
}

init();
