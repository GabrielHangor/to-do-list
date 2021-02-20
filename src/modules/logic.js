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
  console.log(data.projects);

  return newProject;
}

function deleteProjectFromDataArray(index) {
  data.projects.splice(index, 1);
}

export default { data, createNewProject, deleteProjectFromDataArray };
