function toggleOnClick() {
    this.classList.toggle("open");
    this.classList.toggle("open-active");
};

const elements = document.querySelectorAll(".panel");

elements.forEach(element => element.addEventListener("click", toggleOnClick));