class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addProject() {
    data.projects.push(this);
  }
}

class Todo {
  constructor(name, description, date, priority) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

const data = { projects: [], currentProject: null };

function createNewProject(name) {
  const newProject = new Project(name);
  newProject.addProject();

  return newProject;
}

function createNewTodo() {}

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
  createNewTodo,
};
