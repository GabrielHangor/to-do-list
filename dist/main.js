(()=>{"use strict";const t={container:document.querySelector(".container"),sidebar:document.querySelector(".sidebar"),mainContent:document.querySelector(".main-content"),menuBars:document.querySelector(".menu-bars"),projectModalEl:document.querySelector(".form-container-project"),todoModalEl:document.querySelector(".form-container-todo"),addProjectBtn:document.querySelector(".add-project-btn"),projectCancelBtn:document.querySelector(".project-cancel-btn"),projectNameInput:document.querySelector(".project-name-input"),projectSubmitBtn:document.querySelector(".project-submit-btn"),projectsListEl:document.querySelector(".projects"),currentProjectName:document.querySelector(".current-project-name"),todoAddBtn:document.querySelector(".add-todo"),todoCancelBtn:document.querySelector(".todo-cancel-btn"),todoSubmitBtn:document.querySelector(".todo-submit-btn"),todoModalEl:document.querySelector(".form-container-todo"),todoNameInput:document.querySelector(".todo-name-input"),todoDescriptionInput:document.querySelector(".task-description-input"),todoDateInput:document.querySelector(".task-duedate-input"),todoPriorityInput:document.querySelector("#priority"),todosContainer:document.querySelector(".todos-container"),todoEditModalEl:document.querySelector(".form-container-todo-edit"),todoEditCancelBtn:document.querySelector(".todo-cancel-btn-edit"),todoNameEditInput:document.querySelector(".todo-name-input-edit"),todoDescriptionEditInput:document.querySelector(".task-description-input-edit"),todoDateEditInput:document.querySelector(".task-duedate-input-edit"),todoPriorityEditInput:document.querySelector("#priority-edit"),currentTodoName:document.querySelector(".current-todo-name")};function e(){setTimeout((()=>{t.projectNameInput.value=""}),1e3)}const o={getUISelectors:function(){return t},toggleSidebar:function(){t.sidebar.classList.toggle("sidebar-toggle"),t.mainContent.classList.toggle("main-content-toggle"),t.menuBars.classList.toggle("change")},toggleProjectModal:function(){t.projectModalEl.classList.toggle("form-container-project-hidden"),t.container.classList.toggle("container-opaque"),e()},getProjectName:function(){return t.projectNameInput.value},renderSidebar:function(o){t.projectsListEl.textContent="",o.forEach(((e,o)=>{const n=e.name,r=document.createElement("li");r.className="project";const d=document.createElement("span");d.className="project-todos-number";const c=document.createElement("p");c.textContent=`${e.todos.length}`;const a=document.createElement("p");a.className="project-name",a.textContent=`${n}`;const i=document.createElement("i");i.id="delete-project-btn",i.className="fas fa-trash",r.setAttribute("data-index",o),d.appendChild(c),r.append(d,a,i),t.projectsListEl.appendChild(r)})),e()},getProjectIndex:function(t){return t.target.parentElement.getAttribute("data-index")},renderCurrentProjectName:function(e){t.currentProjectName.textContent=e.currentProject.name},toggleTodoModal:function(){t.todoModalEl.classList.toggle("form-container-todo-hidden"),t.container.classList.toggle("container-opaque"),t.todoModalEl.reset()},getTodoInput:function(){return{todoName:t.todoNameInput.value,todoDescription:t.todoDescriptionInput.value,todoDate:t.todoDateInput.value,todoPriority:t.todoPriorityInput.value}},renderCurrentProjectTodos:function(e){document.querySelectorAll(".todo").forEach((t=>t.remove())),e.forEach(((e,o)=>{const{name:n,description:r,date:d,priority:c,projectName:a,isCompleted:i}=e,s=document.createElement("div");s.className="todo",s.setAttribute("data-index",o);const u=document.createElement("div");u.className="todo-name-checkbox";const l=document.createElement("input");l.type="checkbox",l.name="isCompleted",l.id="completed";const p=document.createElement("div");p.className="todo-name",p.textContent=`${n}`;const m=document.createElement("div");m.className="todo-date-btns";const g=document.createElement("div");g.className="todo-date",g.textContent=`${d}`;const j=document.createElement("i");j.className="far fa-edit";const E=document.createElement("i");E.className="fas fa-times",i&&(l.setAttribute("checked","checked"),s.classList.toggle("todo-opaque"),m.classList.toggle("todo-date-btns-disabled")),u.append(l,p),m.append(g,j,E),s.append(u,m),t.todosContainer.insertBefore(s,t.todoAddBtn)}))},getTodoIndex:function(t){return t.target.closest(".todo").getAttribute("data-index")},toggleTodoEditModal:function(){t.todoEditModalEl.classList.toggle("form-container-todo-edit-hidden"),t.container.classList.toggle("container-opaque")},populateTodoEditModal:function(e){const{name:o,description:n,date:r,priority:d}=e;t.currentTodoName.textContent=`${o}`,t.todoNameEditInput.value=o,t.todoDescriptionEditInput.value=n,t.todoDateEditInput.value=r,t.todoPriorityEditInput.value=d},getEditTodoInput:function(){return{todoName:t.todoNameEditInput.value,todoDescription:t.todoDescriptionEditInput.value,todoDate:t.todoDateEditInput.value,todoPriority:t.todoPriorityEditInput.value}}};class n{constructor(t){this.name=t,this.todos=[]}addProject(){d.projects.push(this)}}class r{constructor(t,e,o,n,r){this.name=t,this.description=e,this.date=o,this.priority=n,this.projectName=r,this.isCompleted=!1}}let d={projects:[],currentProject:null,currentTodo:null};const c={data:d,createNewProject:function(t){new n(t).addProject()},deleteProjectFromDataArray:function(t){d.projects.splice(t,1)},setCurrentProject:function(t){d.currentProject=d.projects[t]},createNewTodo:function(t,e){const{todoName:o,todoDescription:n,todoDate:c,todoPriority:a}=t,i=d.currentProject.name,s=new r(o,n,c,a,i);d.projects[e].todos.push(s)},getCurrentProjectIndex:function(){let t=null;return d.projects.forEach(((e,o)=>{e.name===d.currentProject.name&&(t=o)})),t},deleteTodoFromData:function(t,e){d.projects[e].todos.splice(t,1)},setNewTodoProperties:function(t,e,o){const{todoName:n,todoDescription:r,todoDate:c,todoPriority:a}=t;d.projects[e].todos[o].name=n,d.projects[e].todos[o].description=r,d.projects[e].todos[o].date=c,d.projects[e].todos[o].priority=a},setCurrentTodo:function(t,e){d.currentTodo=d.projects[t].todos[e]},getCurrentTodoIndex:function(t){let e=null;return d.projects[t].todos.forEach(((t,o)=>{t.name===d.currentTodo.name&&(e=o)})),e},todoToggleData:function(t,e){d.projects[t].todos[e].isCompleted=!d.projects[t].todos[e].isCompleted},getStorageData:function(){localStorage.getItem("data")?d=JSON.parse(localStorage.getItem("data")):localStorage.setItem("data",JSON.stringify(d))},updateLocalStorage:function(){localStorage.setItem("data",JSON.stringify(d))}};function a(t){const e=o.getProjectName();c.createNewProject(e),o.renderSidebar(c.data.projects),o.toggleProjectModal(),c.updateLocalStorage(),t.preventDefault()}function i(t){const e=o.getTodoInput(),n=c.getCurrentProjectIndex();c.createNewTodo(e,n),o.renderCurrentProjectTodos(c.data.projects[n].todos),o.renderSidebar(c.data.projects),c.updateLocalStorage(),o.toggleTodoModal(),t.preventDefault()}function s(t){const e=o.getEditTodoInput(),n=c.getCurrentProjectIndex(),r=c.getCurrentTodoIndex(n);c.setNewTodoProperties(e,n,r),o.renderCurrentProjectTodos(c.data.projects[n].todos),c.updateLocalStorage(),o.toggleTodoEditModal(),t.preventDefault()}function u(t){if("far fa-edit"===t.target.className){o.toggleTodoEditModal();const e=c.getCurrentProjectIndex(),n=o.getTodoIndex(t),r=c.data.projects[e].todos[n];c.setCurrentTodo(e,n),o.populateTodoEditModal(r)}}function l(t){if("completed"===t.target.id){const e=c.getCurrentProjectIndex(),n=o.getTodoIndex(t);c.todoToggleData(e,n),o.renderCurrentProjectTodos(c.data.projects[e].todos),c.updateLocalStorage()}}function p(t){if("delete-project-btn"===t.target.id){const e=o.getProjectIndex(t);c.deleteProjectFromDataArray(e),o.renderSidebar(c.data.projects),c.updateLocalStorage()}}function m(t){if("fas fa-times"===t.target.className){const e=o.getTodoIndex(t),n=c.getCurrentProjectIndex();c.deleteTodoFromData(e,n),o.renderCurrentProjectTodos(c.data.projects[n].todos),o.renderSidebar(c.data.projects),c.updateLocalStorage()}}function g(t){if("project-name"===t.target.className){const e=o.getProjectIndex(t);c.setCurrentProject(e),o.renderCurrentProjectName(c.data);const n=c.getCurrentProjectIndex();o.renderCurrentProjectTodos(c.data.projects[n].todos),c.updateLocalStorage(),console.log(c.data)}}!function(){if(function(){const t=o.getUISelectors();t.menuBars.addEventListener("click",o.toggleSidebar),t.addProjectBtn.addEventListener("click",o.toggleProjectModal),t.projectCancelBtn.addEventListener("click",o.toggleProjectModal),t.todoAddBtn.addEventListener("click",o.toggleTodoModal),t.todoCancelBtn.addEventListener("click",o.toggleTodoModal),t.todoEditCancelBtn.addEventListener("click",o.toggleTodoEditModal),t.todoModalEl.addEventListener("submit",i),t.projectModalEl.addEventListener("submit",a),t.projectsListEl.addEventListener("click",p),t.projectsListEl.addEventListener("click",g),t.todosContainer.addEventListener("click",m),t.todosContainer.addEventListener("click",u),t.todoEditModalEl.addEventListener("submit",s),t.todosContainer.addEventListener("change",l)}(),c.getStorageData(),console.log(c.data),console.log(localStorage.getItem("data")),o.renderSidebar(c.data.projects),c.data.currentProject&&o.renderCurrentProjectName(c.data),c.data.currentProject){const t=c.getCurrentProjectIndex();o.renderCurrentProjectTodos(c.data.projects[t].todos)}}()})();