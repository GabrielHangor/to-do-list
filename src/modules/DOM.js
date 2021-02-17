const UISelectors = {
  container: document.querySelector(".container"),
  sidebar: document.querySelector(".sidebar"),
  mainContent: document.querySelector(".main-content"),
  menuBars: document.querySelector(".menu-bars"),
  projectModalEl: document.querySelector(".form-container-project"),
  addProjectBtn: document.querySelector(".add-project-btn"),
  projectCancelBtn: document.querySelector(".project-cancel-btn"),
  projectNameInput: document.querySelector(".project-name-input"),
  projectSubmitBtn: document.querySelector(".project-submit-btn"),
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
}

function getProjectName() {
  return UISelectors.projectNameInput.value;
}

export default { getUISelectors, toggleSidebar, toggleProjectModal, getProjectName };
