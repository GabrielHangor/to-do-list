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
  projectsListEl: document.querySelector(".projects"),
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

function getProjectName() {
  return UISelectors.projectNameInput.value;
}

function renderSidebar(data) {
  UISelectors.projectsListEl.textContent = "";

  data.forEach((project, index) => {
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
};
