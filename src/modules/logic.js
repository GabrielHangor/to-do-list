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
  constructor(name, description, date, priority, projectName) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.projectName = projectName;
    this.isCompleted = false;
  }
}

const data = { projects: [], currentProject: null };

function createNewProject(name) {
  const newProject = new Project(name);
  newProject.addProject();
}

function createNewTodo(todoInput, currentProjectIndex) {
  const { todoName, todoDescription, todoDate, todoPriority } = todoInput;
  const projectName = data.currentProject.name;

  const newTodo = new Todo(
    todoName,
    todoDescription,
    todoDate,
    todoPriority,
    projectName
  );


  data.projects[currentProjectIndex].todos.push(newTodo);
}

function deleteProjectFromDataArray(index) {
  data.projects.splice(index, 1);
}

function setCurrentProject(index) {
  data.currentProject = data.projects[index];
}

function getCurrentProjectIndex() {
  let currentProjectIndex = null;

  data.projects.forEach((project, index) => {
    if (project.name === data.currentProject.name) {
      currentProjectIndex = index;
    }
  });

  return currentProjectIndex;
}

export default {
  data,
  createNewProject,
  deleteProjectFromDataArray,
  setCurrentProject,
  createNewTodo,
  getCurrentProjectIndex,
};
