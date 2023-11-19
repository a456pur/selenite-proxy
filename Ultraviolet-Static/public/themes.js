document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("selenite.theme")) {
        document.body.setAttribute("theme", localStorage.getItem("selenite.theme"));
      } else {
        document.body.setAttribute("theme", "main");
      }
      
})
function setTheme(theme) {
    localStorage.setItem("selenite.theme", theme);
    document.body.setAttribute("theme", theme);
  }