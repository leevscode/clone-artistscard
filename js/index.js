document.addEventListener("DOMContentLoaded", () => {
    let goTop = document.querySelector(".go-top");
    let currentScroll = window.scrollY;

    window.onscroll = () => {
        let scroll = window.scrollY;

        if (currentScroll > scroll) {
            goTop.style.display = "flex";
        } else {
            goTop.style.display = "none";
        }

        currentScroll = scroll;
    };

    goTop.addEventListener("click", () => {
        window.scrollTo({ top: 0 });
    });
});
