(()=>{"use strict";const e={container:document.querySelector(".container"),sidebar:document.querySelector(".sidebar"),mainContent:document.querySelector(".main-content"),menuBars:document.querySelector(".menu-bars"),projectModalEl:document.querySelector(".form-container-project"),todoModalEl:document.querySelector(".form-container-todo"),addProjectBtn:document.querySelector(".add-project-btn"),projectCancelBtn:document.querySelector(".project-cancel-btn"),projectNameInput:document.querySelector(".project-name-input"),projectSubmitBtn:document.querySelector(".project-submit-btn"),projectsListEl:document.querySelector(".projects"),currentProjectName:document.querySelector(".current-project-name"),todoAddBtn:document.querySelector(".add-todo"),todoCancelBtn:document.querySelector(".todo-cancel-btn"),todoSubmitBtn:document.querySelector(".todo-submit-btn"),todoModalEl:document.querySelector(".form-container-todo"),todoNameInput:document.querySelector(".todo-name-input"),todoDescriptionInput:document.querySelector(".task-description-input"),todoDateInput:document.querySelector(".task-duedate-input"),todoPriorityInput:document.querySelector("#priority"),todosContainer:document.querySelector(".todos-container"),todoEditModalEl:document.querySelector(".form-container-todo-edit"),todoEditCancelBtn:document.querySelector(".todo-cancel-btn-edit")};function t(){setTimeout((()=>{e.projectNameInput.value=""}),1e3)}const o={getUISelectors:function(){return e},toggleSidebar:function(){e.sidebar.classList.toggle("sidebar-toggle"),e.mainContent.classList.toggle("main-content-toggle"),e.menuBars.classList.toggle("change")},toggleProjectModal:function(){e.projectModalEl.classList.toggle("form-container-project-hidden"),e.container.classList.toggle("container-opaque"),t()},getProjectName:function(){return e.projectNameInput.value},renderSidebar:function(o){e.projectsListEl.textContent="",o.forEach(((t,o)=>{const n=t.name,r=document.createElement("li");r.className="project";const c=document.createElement("span");c.className="project-todos-number";const d=document.createElement("p");d.textContent="3";const a=document.createElement("p");a.className="project-name",a.textContent=`${n}`;const s=document.createElement("i");s.id="delete-project-btn",s.className="fas fa-trash",r.setAttribute("data-index",o),c.appendChild(d),r.append(c,a,s),e.projectsListEl.appendChild(r)})),t()},getProjectIndex:function(e){return e.target.parentElement.getAttribute("data-index")},renderCurrentProjectName:function(t){e.currentProjectName.textContent=t.currentProject.name},toggleTodoModal:function(){e.todoModalEl.classList.toggle("form-container-todo-hidden"),e.container.classList.toggle("container-opaque"),e.todoModalEl.reset()},getTodoInput:function(){return{todoName:e.todoNameInput.value,todoDescription:e.todoDescriptionInput.value,todoDate:e.todoDateInput.value,todoPriority:e.todoPriorityInput.value}},renderCurrentProjectTodos:function(t){document.querySelectorAll(".todo").forEach((e=>e.remove())),t.forEach(((t,o)=>{const{name:n,description:r,date:c,priority:d,projectName:a,isCompleted:s}=t,i=document.createElement("div");i.className="todo",i.setAttribute("data-index",o);const l=document.createElement("div");l.className="todo-name-checkbox";const u=document.createElement("input");u.type="checkbox",u.name="isCompleted",u.id="completed",s&&u.checked;const m=document.createElement("div");m.className="todo-name",m.textContent=`${n}`;const p=document.createElement("div");p.className="todo-date-btns";const j=document.createElement("div");j.className="todo-date",j.textContent=`${c}`;const g=document.createElement("i");g.className="far fa-edit";const f=document.createElement("i");f.className="fas fa-times",l.append(u,m),p.append(j,g,f),i.append(l,p),e.todosContainer.insertBefore(i,e.todoAddBtn)}))},getTodoIndex:function(e){return e.target.closest(".todo").getAttribute("data-index")},toggleTodoEditModal:function(){e.todoEditModalEl.classList.toggle("form-container-todo-edit-hidden"),e.container.classList.toggle("container-opaque")}};class n{constructor(e){this.name=e,this.todos=[]}addProject(){c.projects.push(this)}}class r{constructor(e,t,o,n,r){this.name=e,this.description=t,this.date=o,this.priority=n,this.projectName=r,this.isCompleted=!1}}const c={projects:[],currentProject:null},d={data:c,createNewProject:function(e){new n(e).addProject()},deleteProjectFromDataArray:function(e){c.projects.splice(e,1)},setCurrentProject:function(e){c.currentProject=c.projects[e]},createNewTodo:function(e,t){const{todoName:o,todoDescription:n,todoDate:d,todoPriority:a}=e,s=c.currentProject.name,i=new r(o,n,d,a,s);c.projects[t].todos.push(i)},getCurrentProjectIndex:function(){let e=null;return c.projects.forEach(((t,o)=>{t.name===c.currentProject.name&&(e=o)})),e},deleteTodoFromData:function(e,t){c.projects[t].todos.splice(e,1)}};function a(e){const t=o.getProjectName();d.createNewProject(t),o.renderSidebar(d.data.projects),o.toggleProjectModal(),e.preventDefault()}function s(e){const t=o.getTodoInput(),n=d.getCurrentProjectIndex();d.createNewTodo(t,n),o.renderCurrentProjectTodos(d.data.projects[n].todos),o.toggleTodoModal(),e.preventDefault()}function i(e){"far fa-edit"===e.target.className&&o.toggleTodoEditModal()}function l(e){if("delete-project-btn"===e.target.id){const t=o.getProjectIndex(e);d.deleteProjectFromDataArray(t),o.renderSidebar(d.data.projects)}}function u(e){if("fas fa-times"===e.target.className){const t=o.getTodoIndex(e),n=d.getCurrentProjectIndex();d.deleteTodoFromData(t,n),o.renderCurrentProjectTodos(d.data.projects[n].todos)}}function m(e){if("project-name"===e.target.className){const t=o.getProjectIndex(e);d.setCurrentProject(t),o.renderCurrentProjectName(d.data);const n=d.getCurrentProjectIndex();o.renderCurrentProjectTodos(d.data.projects[n].todos),console.log(d.data)}}!function(){const e=o.getUISelectors();e.menuBars.addEventListener("click",o.toggleSidebar),e.addProjectBtn.addEventListener("click",o.toggleProjectModal),e.projectCancelBtn.addEventListener("click",o.toggleProjectModal),e.todoAddBtn.addEventListener("click",o.toggleTodoModal),e.todoCancelBtn.addEventListener("click",o.toggleTodoModal),e.todoEditCancelBtn.addEventListener("click",o.toggleTodoEditModal),e.todoModalEl.addEventListener("submit",s),e.projectModalEl.addEventListener("submit",a),e.projectsListEl.addEventListener("click",l),e.projectsListEl.addEventListener("click",m),e.todosContainer.addEventListener("click",u),e.todosContainer.addEventListener("click",i)}()})();