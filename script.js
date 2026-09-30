const button = document.querySelector("#theme-button");
const icon = button.querySelector("i");

button.addEventListener("click", function() {
        document.documentElement.classList.toggle("light");
        icon.classList.toggle("fa-moon");
        icon.classList.toggle("fa-sun");
});