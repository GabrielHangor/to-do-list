(()=>{"use strict";const e={container:document.querySelector(".container"),sidebar:document.querySelector(".sidebar"),mainContent:document.querySelector(".main-content"),menuBars:document.querySelector(".menu-bars"),projectModalEl:document.querySelector(".form-container-project"),addProjectBtn:document.querySelector(".add-project-btn"),projectCancelBtn:document.querySelector(".project-cancel-btn"),projectNameInput:document.querySelector(".project-name-input"),projectSubmitBtn:document.querySelector(".project-submit-btn")},t={getUISelectors:function(){return e},toggleSidebar:function(){e.sidebar.classList.toggle("sidebar-toggle"),e.mainContent.classList.toggle("main-content-toggle"),e.menuBars.classList.toggle("change")},toggleProjectModal:function(){e.projectModalEl.classList.toggle("form-container-project-hidden"),e.container.classList.toggle("container-opaque")},getProjectName:function(){return e.projectNameInput.value}};class o{constructor(e){this.name=e,this.todos=[]}addProject(){n.push(this)}}const n=[],c=function(e){const t=new o(e);return t.addProject(),console.log(n),t};function r(){const e=t.getProjectName(),o=c(e);console.log(o),t.toggleProjectModal()}!function(){const e=t.getUISelectors();e.menuBars.addEventListener("click",t.toggleSidebar),e.addProjectBtn.addEventListener("click",t.toggleProjectModal),e.projectCancelBtn.addEventListener("click",t.toggleProjectModal),e.projectSubmitBtn.addEventListener("click",r)}()})();