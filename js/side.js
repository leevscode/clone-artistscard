document.addEventListener("DOMContentLoaded", () => {
    let sideCloseBtn = document.querySelector(".side-close-btn");
    let side = document.querySelector(".side");

    document.addEventListener("click", (e) => {
        if (e.target === sideCloseBtn || e.target === side) {
            document.querySelector("body").style.overflow = "auto";
            side.classList.remove("show");
        }
    });
});
