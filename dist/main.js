(()=>{"use strict";const t={container:document.querySelector(".container"),sidebar:document.querySelector(".sidebar"),mainContent:document.querySelector(".main-content"),menuBars:document.querySelector(".menu-bars"),projectModalEl:document.querySelector(".form-container-project"),todoModalEl:document.querySelector(".form-container-todo"),addProjectBtn:document.querySelector(".add-project-btn"),projectCancelBtn:document.querySelector(".project-cancel-btn"),projectNameInput:document.querySelector(".project-name-input"),projectSubmitBtn:document.querySelector(".project-submit-btn"),projectsListEl:document.querySelector(".projects"),currentProjectName:document.querySelector(".current-project-name"),todoAddBtn:document.querySelector(".add-todo"),todoCancelBtn:document.querySelector(".todo-cancel-btn"),todoSubmitBtn:document.querySelector(".todo-submit-btn"),todoModalEl:document.querySelector(".form-container-todo"),todoNameInput:document.querySelector(".todo-name-input"),todoDescriptionInput:document.querySelector(".task-description-input"),todoDateInput:document.querySelector(".task-duedate-input"),todoPriorityInput:document.querySelector("#priority"),todosContainer:document.querySelector(".todos-container"),todoEditModalEl:document.querySelector(".form-container-todo-edit"),todoEditCancelBtn:document.querySelector(".todo-cancel-btn-edit"),todoNameEditInput:document.querySelector(".todo-name-input-edit"),todoDescriptionEditInput:document.querySelector(".task-description-input-edit"),todoDateEditInput:document.querySelector(".task-duedate-input-edit"),todoPriorityEditInput:document.querySelector("#priority-edit"),currentTodoName:document.querySelector(".current-todo-name")};function e(){setTimeout((()=>{t.projectNameInput.value=""}),1e3)}const o={getUISelectors:function(){return t},toggleSidebar:function(){t.sidebar.classList.toggle("sidebar-toggle"),t.mainContent.classList.toggle("main-content-toggle"),t.menuBars.classList.toggle("change")},toggleProjectModal:function(){t.projectModalEl.classList.toggle("form-container-project-hidden"),t.container.classList.toggle("container-opaque"),e()},getProjectName:function(){return t.projectNameInput.value},renderSidebar:function(o){t.projectsListEl.textContent="",o.forEach(((e,o)=>{const n=e.name,r=document.createElement("li");r.className="project";const c=document.createElement("span");c.className="project-todos-number";const d=document.createElement("p");d.textContent="3";const a=document.createElement("p");a.className="project-name",a.textContent=`${n}`;const i=document.createElement("i");i.id="delete-project-btn",i.className="fas fa-trash",r.setAttribute("data-index",o),c.appendChild(d),r.append(c,a,i),t.projectsListEl.appendChild(r)})),e()},getProjectIndex:function(t){return t.target.parentElement.getAttribute("data-index")},renderCurrentProjectName:function(e){t.currentProjectName.textContent=e.currentProject.name},toggleTodoModal:function(){t.todoModalEl.classList.toggle("form-container-todo-hidden"),t.container.classList.toggle("container-opaque"),t.todoModalEl.reset()},getTodoInput:function(){return{todoName:t.todoNameInput.value,todoDescription:t.todoDescriptionInput.value,todoDate:t.todoDateInput.value,todoPriority:t.todoPriorityInput.value}},renderCurrentProjectTodos:function(e){document.querySelectorAll(".todo").forEach((t=>t.remove())),e.forEach(((e,o)=>{const{name:n,description:r,date:c,priority:d,projectName:a,isCompleted:i}=e,s=document.createElement("div");s.className="todo",s.setAttribute("data-index",o);const u=document.createElement("div");u.className="todo-name-checkbox";const l=document.createElement("input");l.type="checkbox",l.name="isCompleted",l.id="completed",i&&l.checked;const m=document.createElement("div");m.className="todo-name",m.textContent=`${n}`;const p=document.createElement("div");p.className="todo-date-btns";const j=document.createElement("div");j.className="todo-date",j.textContent=`${c}`;const g=document.createElement("i");g.className="far fa-edit";const E=document.createElement("i");E.className="fas fa-times",u.append(l,m),p.append(j,g,E),s.append(u,p),t.todosContainer.insertBefore(s,t.todoAddBtn)}))},getTodoIndex:function(t){return t.target.closest(".todo").getAttribute("data-index")},toggleTodoEditModal:function(){t.todoEditModalEl.classList.toggle("form-container-todo-edit-hidden"),t.container.classList.toggle("container-opaque")},populateTodoEditModal:function(e){const{name:o,description:n,date:r,priority:c}=e;t.currentTodoName.textContent=`${o}`,t.todoNameEditInput.value=o,t.todoDescriptionEditInput.value=n,t.todoDateEditInput.value=r,t.todoPriorityEditInput.value=c}};class n{constructor(t){this.name=t,this.todos=[]}addProject(){c.projects.push(this)}}class r{constructor(t,e,o,n,r){this.name=t,this.description=e,this.date=o,this.priority=n,this.projectName=r,this.isCompleted=!1}}const c={projects:[],currentProject:null},d={data:c,createNewProject:function(t){new n(t).addProject()},deleteProjectFromDataArray:function(t){c.projects.splice(t,1)},setCurrentProject:function(t){c.currentProject=c.projects[t]},createNewTodo:function(t,e){const{todoName:o,todoDescription:n,todoDate:d,todoPriority:a}=t,i=c.currentProject.name,s=new r(o,n,d,a,i);c.projects[e].todos.push(s)},getCurrentProjectIndex:function(){let t=null;return c.projects.forEach(((e,o)=>{e.name===c.currentProject.name&&(t=o)})),t},deleteTodoFromData:function(t,e){c.projects[e].todos.splice(t,1)}};function a(t){const e=o.getProjectName();d.createNewProject(e),o.renderSidebar(d.data.projects),o.toggleProjectModal(),t.preventDefault()}function i(t){const e=o.getTodoInput(),n=d.getCurrentProjectIndex();d.createNewTodo(e,n),o.renderCurrentProjectTodos(d.data.projects[n].todos),o.toggleTodoModal(),t.preventDefault()}function s(t){if("far fa-edit"===t.target.className){o.toggleTodoEditModal();const e=d.getCurrentProjectIndex(),n=o.getTodoIndex(t),r=d.data.projects[e].todos[n];o.populateTodoEditModal(r)}}function u(t){if("delete-project-btn"===t.target.id){const e=o.getProjectIndex(t);d.deleteProjectFromDataArray(e),o.renderSidebar(d.data.projects)}}function l(t){if("fas fa-times"===t.target.className){const e=o.getTodoIndex(t),n=d.getCurrentProjectIndex();d.deleteTodoFromData(e,n),o.renderCurrentProjectTodos(d.data.projects[n].todos)}}function m(t){if("project-name"===t.target.className){const e=o.getProjectIndex(t);d.setCurrentProject(e),o.renderCurrentProjectName(d.data);const n=d.getCurrentProjectIndex();o.renderCurrentProjectTodos(d.data.projects[n].todos),console.log(d.data)}}!function(){const t=o.getUISelectors();t.menuBars.addEventListener("click",o.toggleSidebar),t.addProjectBtn.addEventListener("click",o.toggleProjectModal),t.projectCancelBtn.addEventListener("click",o.toggleProjectModal),t.todoAddBtn.addEventListener("click",o.toggleTodoModal),t.todoCancelBtn.addEventListener("click",o.toggleTodoModal),t.todoEditCancelBtn.addEventListener("click",o.toggleTodoEditModal),t.todoModalEl.addEventListener("submit",i),t.projectModalEl.addEventListener("submit",a),t.projectsListEl.addEventListener("click",u),t.projectsListEl.addEventListener("click",m),t.todosContainer.addEventListener("click",l),t.todosContainer.addEventListener("click",s)}()})();