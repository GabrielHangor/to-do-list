// Sidebar functionality
const sideBarToggle = (function () {
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");
  const hamburgerIcon = document.querySelector("#hamburgerIcon");

  function toggleSidebar() {
    sidebar.classList.toggle("sidebar-toggle");
    mainContent.classList.toggle("main-content-toggle");
  }

  hamburgerIcon.addEventListener("click", toggleSidebar);
})();

export { sideBarToggle };
