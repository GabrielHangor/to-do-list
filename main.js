(()=>{"use strict";const e={container:document.querySelector(".container"),sidebar:document.querySelector(".sidebar"),mainContent:document.querySelector(".main-content"),menuBars:document.querySelector(".menu-bars"),projectModalEl:document.querySelector(".form-container-project"),addProjectBtn:document.querySelector(".add-project-btn"),projectCancelBtn:document.querySelector(".project-cancel-btn")},t={getUISelectors:function(){return e},toggleSidebar:function(){e.sidebar.classList.toggle("sidebar-toggle"),e.mainContent.classList.toggle("main-content-toggle"),e.menuBars.classList.toggle("change")},toggleProjectModal:function(){e.projectModalEl.classList.toggle("form-container-project-hidden"),e.container.classList.toggle("container-opaque")}};!function(){const e=t.getUISelectors();e.menuBars.addEventListener("click",t.toggleSidebar),e.addProjectBtn.addEventListener("click",t.toggleProjectModal),e.projectCancelBtn.addEventListener("click",t.toggleProjectModal)}()})();