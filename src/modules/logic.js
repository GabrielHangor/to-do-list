class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addProject() {
    projects.push(this);
  }
}

const projects = [];

function getProject(name) {
  const newProject = new Project(name);
  newProject.addProject();
  console.log(projects)

  return newProject;
}

export default { Project, getProject };
