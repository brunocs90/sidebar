const toggleMenu = document.getElementById("btn-menu");
const sidebar = document.getElementById("sidebar");

toggleMenu.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
});
