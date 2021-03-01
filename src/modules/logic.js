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

let data = { projects: [], currentProject: null, currentTodo: null };

function getStorageData() {
  localStorage.getItem("data")
    ? Object.assign(data, JSON.parse(localStorage.getItem("data")))
    : localStorage.setItem("data", JSON.stringify(data));
}


function updateLocalStorage() {
  localStorage.setItem("data", JSON.stringify(data));
}

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

function deleteTodoFromData(index, projectIndex) {
  data.projects[projectIndex].todos.splice(index, 1);
}

function setCurrentProject(index) {
  data.currentProject = data.projects[index];
}

function setCurrentTodo(projectIndex, index) {
  data.currentTodo = data.projects[projectIndex].todos[index];
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

function getCurrentTodoIndex(projectIndex) {
  let currentTodoIndex = null;

  data.projects[projectIndex].todos.forEach((todo, index) => {
    if (todo.name === data.currentTodo.name) {
      currentTodoIndex = index;
    }
  });

  return currentTodoIndex;
}

function todoToggleData(projectIndex, index) {
  data.projects[projectIndex].todos[index].isCompleted = !data.projects[
    projectIndex
  ].todos[index].isCompleted;
}

function setNewTodoProperties(todoInput, projectIndex, index) {
  const { todoName, todoDescription, todoDate, todoPriority } = todoInput;
  data.projects[projectIndex].todos[index].name = todoName;
  data.projects[projectIndex].todos[index].description = todoDescription;
  data.projects[projectIndex].todos[index].date = todoDate;
  data.projects[projectIndex].todos[index].priority = todoPriority;
}

export default {
  data,
  createNewProject,
  deleteProjectFromDataArray,
  setCurrentProject,
  createNewTodo,
  getCurrentProjectIndex,
  deleteTodoFromData,
  setNewTodoProperties,
  setCurrentTodo,
  getCurrentTodoIndex,
  todoToggleData,
  getStorageData,
  updateLocalStorage,
};
