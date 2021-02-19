class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addProject() {
    data.push(this);
  }
}

const data = [];

function createNewProject(name) {
  const newProject = new Project(name);
  newProject.addProject();
  console.log(data);

  return newProject;
}

function deleteProjectFromDataArray(index) {
  data.splice(index, 1);
}

export default { data, createNewProject, deleteProjectFromDataArray };
