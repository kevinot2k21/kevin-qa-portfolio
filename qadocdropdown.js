const button = document.getElementById("qaButton");
const menu = document.getElementById("qaMenu");

    button.addEventListener("click", function () {
      menu.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".qa-dropdown")) {
        menu.classList.remove("show");
      }
    });