(()=>{"use strict";const t={container:document.querySelector(".container"),sidebar:document.querySelector(".sidebar"),mainContent:document.querySelector(".main-content"),menuBars:document.querySelector(".menu-bars"),projectModalEl:document.querySelector(".form-container-project"),todoModalEl:document.querySelector(".form-container-todo"),addProjectBtn:document.querySelector(".add-project-btn"),projectCancelBtn:document.querySelector(".project-cancel-btn"),projectNameInput:document.querySelector(".project-name-input"),projectSubmitBtn:document.querySelector(".project-submit-btn"),projectsListEl:document.querySelector(".projects"),currentProjectName:document.querySelector(".current-project-name"),todoAddBtn:document.querySelector(".add-todo"),todoCancelBtn:document.querySelector(".todo-cancel-btn"),todoSubmitBtn:document.querySelector(".todo-submit-btn"),todoModalEl:document.querySelector(".form-container-todo"),todoNameInput:document.querySelector(".todo-name-input"),todoDescriptionInput:document.querySelector(".task-description-input"),todoDateInput:document.querySelector(".task-duedate-input"),todoPriorityInput:document.querySelector("#priority"),todosContainer:document.querySelector(".todos-container"),todoEditModalEl:document.querySelector(".form-container-todo-edit"),todoEditCancelBtn:document.querySelector(".todo-cancel-btn-edit"),todoNameEditInput:document.querySelector(".todo-name-input-edit"),todoDescriptionEditInput:document.querySelector(".task-description-input-edit"),todoDateEditInput:document.querySelector(".task-duedate-input-edit"),todoPriorityEditInput:document.querySelector("#priority-edit"),currentTodoName:document.querySelector(".current-todo-name"),detailsContainer:document.querySelector(".details-container"),detailsName:document.querySelector(".details-name"),detailsProjectName:document.querySelector(".details-project-name"),detailsDescription:document.querySelector(".details-description"),detailsPriority:document.querySelector(".details-priority")};function e(){document.querySelectorAll(".todo").forEach((t=>t.remove()))}function o(){setTimeout((()=>{t.projectNameInput.value=""}),1e3)}const n={getUISelectors:function(){return t},toggleSidebar:function(){t.sidebar.classList.toggle("sidebar-toggle"),t.mainContent.classList.toggle("main-content-toggle"),t.menuBars.classList.toggle("change")},toggleProjectModal:function(){t.projectModalEl.classList.toggle("form-container-project-hidden"),t.container.classList.toggle("container-opaque"),o()},getProjectName:function(){return t.projectNameInput.value},renderSidebar:function(e){t.projectsListEl.textContent="",e.forEach(((e,o)=>{const n=e.name,r=document.createElement("li");r.className="project";const d=document.createElement("span");d.className="project-todos-number";const a=document.createElement("p");a.textContent=`${e.todos.length}`;const c=document.createElement("p");c.className="project-name",c.textContent=`${n}`;const i=document.createElement("i");i.id="delete-project-btn",i.className="fas fa-trash",r.setAttribute("data-index",o),d.appendChild(a),r.append(d,c,i),t.projectsListEl.appendChild(r)})),o()},getProjectIndex:function(t){return t.target.parentElement.getAttribute("data-index")},renderCurrentProjectName:function(e){t.currentProjectName.textContent=e.currentProject.name},toggleTodoModal:function(){t.todoModalEl.classList.toggle("form-container-todo-hidden"),t.container.classList.toggle("container-opaque"),t.todoModalEl.reset()},getTodoInput:function(){return{todoName:t.todoNameInput.value,todoDescription:t.todoDescriptionInput.value,todoDate:t.todoDateInput.value,todoPriority:t.todoPriorityInput.value}},renderCurrentProjectTodos:function(o){e(),o.forEach(((e,o)=>{const{name:n,date:r,isCompleted:d}=e,a=document.createElement("div");a.className="todo",a.setAttribute("data-index",o);const c=document.createElement("div");c.className="todo-name-checkbox";const i=document.createElement("input");i.type="checkbox",i.name="isCompleted",i.id="completed";const s=document.createElement("div");s.className="todo-name",s.textContent=`${n}`;const l=document.createElement("div");l.className="todo-date-btns";const u=document.createElement("div");u.className="todo-date",u.textContent=`${r}`;const m=document.createElement("i");m.className="far fa-edit";const p=document.createElement("i");p.className="fas fa-times",d&&(i.setAttribute("checked","checked"),a.classList.toggle("todo-opaque"),l.classList.toggle("todo-date-btns-disabled"),s.classList.toggle("todo-name-events-disabled")),c.append(i,s),l.append(u,m,p),a.append(c,l),t.todosContainer.insertBefore(a,t.todoAddBtn)}))},getTodoIndex:function(t){return t.target.closest(".todo").getAttribute("data-index")},toggleTodoEditModal:function(){t.todoEditModalEl.classList.toggle("form-container-todo-edit-hidden"),t.container.classList.toggle("container-opaque")},populateTodoEditModal:function(e){const{name:o,description:n,date:r,priority:d}=e;t.currentTodoName.textContent=`${o}`,t.todoNameEditInput.value=o,t.todoDescriptionEditInput.value=n,t.todoDateEditInput.value=r,t.todoPriorityEditInput.value=d},getEditTodoInput:function(){return{todoName:t.todoNameEditInput.value,todoDescription:t.todoDescriptionEditInput.value,todoDate:t.todoDateEditInput.value,todoPriority:t.todoPriorityEditInput.value}},restrictPreviousDate:function(){const e=(new Date).toISOString().split("T")[0];t.todoDateInput.setAttribute("min",e),t.todoDateEditInput.setAttribute("min",e)},toggleTodoDetailsModal:function(){t.detailsContainer.classList.toggle("details-container-hidden")},populateTodoDetails:function(e){const{name:o,description:n,priority:r,projectName:d}=e;t.detailsName.textContent=`${o}`,t.detailsProjectName.textContent=`Project: ${d}`,t.detailsDescription.textContent=`Description: ${n}`,t.detailsPriority.textContent=`Priority: ${r}`},addTodoBtnDisable:function(o){0!==o.projects.length&&o.currentProject||(t.todoAddBtn.classList.toggle("add-todo-disabled"),t.currentProjectName.textContent="Add New Project Or Select One",e())},addTodoBtnEnable:function(){t.todoAddBtn.classList.remove("add-todo-disabled")}};class r{constructor(t){this.name=t,this.todos=[]}addProject(){a.projects.push(this)}}class d{constructor(t,e,o,n,r){this.name=t,this.description=e,this.date=o,this.priority=n,this.projectName=r,this.isCompleted=!1}}let a={projects:[],currentProject:null,currentTodo:null};function c(){0===a.projects.length&&(a.currentProject=null)}const i={data:a,createNewProject:function(t){new r(t).addProject()},deleteProjectFromDataArray:function(t){a.projects.splice(t,1),c()},setCurrentProject:function(t){a.currentProject=a.projects[t]},createNewTodo:function(t,e){const{todoName:o,todoDescription:n,todoDate:r,todoPriority:c}=t,i=a.currentProject.name,s=new d(o,n,r,c,i);a.projects[e].todos.push(s)},getCurrentProjectIndex:function(){let t=null;return a.projects.forEach(((e,o)=>{e.name===a.currentProject.name&&(t=o)})),t},deleteTodoFromData:function(t,e){a.projects[e].todos.splice(t,1)},setNewTodoProperties:function(t,e,o){const{todoName:n,todoDescription:r,todoDate:d,todoPriority:c}=t;a.projects[e].todos[o].name=n,a.projects[e].todos[o].description=r,a.projects[e].todos[o].date=d,a.projects[e].todos[o].priority=c},setCurrentTodo:function(t,e){a.currentTodo=a.projects[t].todos[e]},getCurrentTodoIndex:function(t){let e=null;return a.projects[t].todos.forEach(((t,o)=>{t.name===a.currentTodo.name&&(e=o)})),e},todoToggleData:function(t,e){a.projects[t].todos[e].isCompleted=!a.projects[t].todos[e].isCompleted},getStorageData:function(){localStorage.getItem("data")?Object.assign(a,JSON.parse(localStorage.getItem("data"))):localStorage.setItem("data",JSON.stringify(a))},updateLocalStorage:function(){localStorage.setItem("data",JSON.stringify(a))},clearCurrentProject:c,deleteInvalidCurrentProject:function(){0===a.projects.filter((t=>t.name===a.currentProject.name)).length&&(a.currentProject=null)}};function s(t){const e=n.getProjectName();i.createNewProject(e),n.renderSidebar(i.data.projects),n.toggleProjectModal(),i.updateLocalStorage(),t.preventDefault()}function l(t){const e=n.getTodoInput(),o=i.getCurrentProjectIndex();i.createNewTodo(e,o),n.renderCurrentProjectTodos(i.data.projects[o].todos),n.renderSidebar(i.data.projects),i.updateLocalStorage(),n.toggleTodoModal(),t.preventDefault()}function u(t){const e=n.getEditTodoInput(),o=i.getCurrentProjectIndex(),r=i.getCurrentTodoIndex(o);i.setNewTodoProperties(e,o,r),n.renderCurrentProjectTodos(i.data.projects[o].todos),i.updateLocalStorage(),n.toggleTodoEditModal(),t.preventDefault()}function m(t){if("far fa-edit"===t.target.className){n.toggleTodoEditModal();const e=i.getCurrentProjectIndex(),o=n.getTodoIndex(t),r=i.data.projects[e].todos[o];i.setCurrentTodo(e,o),n.populateTodoEditModal(r)}}function p(t){if("completed"===t.target.id){const e=i.getCurrentProjectIndex(),o=n.getTodoIndex(t);i.todoToggleData(e,o),n.renderCurrentProjectTodos(i.data.projects[e].todos),i.updateLocalStorage()}}function g(t){if("delete-project-btn"===t.target.id){const e=n.getProjectIndex(t);i.deleteProjectFromDataArray(e),i.deleteInvalidCurrentProject(),n.renderSidebar(i.data.projects),n.addTodoBtnDisable(i.data),i.updateLocalStorage()}}function j(t){if("fas fa-times"===t.target.className){const e=n.getTodoIndex(t),o=i.getCurrentProjectIndex();i.deleteTodoFromData(e,o),n.renderCurrentProjectTodos(i.data.projects[o].todos),n.renderSidebar(i.data.projects),i.updateLocalStorage()}}function f(t){if("project-name"===t.target.className){const e=n.getProjectIndex(t);i.setCurrentProject(e),n.renderCurrentProjectName(i.data);const o=i.getCurrentProjectIndex();n.renderCurrentProjectTodos(i.data.projects[o].todos),n.addTodoBtnEnable(),i.updateLocalStorage()}}function E(t){if("todo-name"===t.target.className){const e=i.getCurrentProjectIndex(),o=n.getTodoIndex(t),r=i.data.projects[e].todos[o];n.populateTodoDetails(r),n.toggleTodoDetailsModal()}}function P(t){"todo-name"===t.target.className&&n.toggleTodoDetailsModal()}!function(){const t=n.getUISelectors();t.menuBars.addEventListener("click",n.toggleSidebar),t.addProjectBtn.addEventListener("click",n.toggleProjectModal),t.projectCancelBtn.addEventListener("click",n.toggleProjectModal),t.todoAddBtn.addEventListener("click",n.toggleTodoModal),t.todoCancelBtn.addEventListener("click",n.toggleTodoModal),t.todoEditCancelBtn.addEventListener("click",n.toggleTodoEditModal),t.todoModalEl.addEventListener("submit",l),t.projectModalEl.addEventListener("submit",s),t.projectsListEl.addEventListener("click",g),t.projectsListEl.addEventListener("click",f),t.todosContainer.addEventListener("click",j),t.todosContainer.addEventListener("click",m),t.todoEditModalEl.addEventListener("submit",u),t.todosContainer.addEventListener("change",p),t.todosContainer.addEventListener("mouseover",E),t.todosContainer.addEventListener("mouseout",P)}(),i.getStorageData(),function(){if(i.data.projects&&n.renderSidebar(i.data.projects),i.data.currentProject&&0!==i.data.projects.length){n.renderCurrentProjectName(i.data);const t=i.getCurrentProjectIndex();n.renderCurrentProjectTodos(i.data.projects[t].todos)}}(),n.addTodoBtnDisable(i.data),n.restrictPreviousDate()})();