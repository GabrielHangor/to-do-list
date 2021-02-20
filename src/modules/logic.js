class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addProject() {
    data.projects.push(this);
  }
}

const data = { projects: [], currentProject: null };

function createNewProject(name) {
  const newProject = new Project(name);
  newProject.addProject();
  console.log(data);

  return newProject;
}

function deleteProjectFromDataArray(index) {
  data.projects.splice(index, 1);
}

function setCurrentProject(index) {
  data.currentProject = data.projects[index];
}

export default {
  data,
  createNewProject,
  deleteProjectFromDataArray,
  setCurrentProject,
};
