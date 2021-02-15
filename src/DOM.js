// Sidebar functionality
const sideBarToggle = (function () {
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");
  const menuBars = document.querySelector(".menu-bars");

  function toggleSidebar() {
    sidebar.classList.toggle("sidebar-toggle");
    mainContent.classList.toggle("main-content-toggle");
    menuBars.classList.toggle("change");
  }

  menuBars.addEventListener("click", toggleSidebar);
})();

export { sideBarToggle };
