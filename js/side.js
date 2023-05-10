document.addEventListener("DOMContentLoaded", () => {
    let sideCloseBtn = document.querySelector(".side-close-btn");
    let sideLangSelector = document.querySelector(".side-lang-selector");
    let sideMain = document.querySelector(".side-main");

    let sideLangBack = document.querySelector(".side-lang-back");
    let sideLang = document.querySelector(".side-lang");
    let sideLangList = document.querySelector(".side-lang-list");

    document.addEventListener("click", (e) => {
        if (e.target === sideCloseBtn || e.target === sideMain) {
            document.querySelector("body").style.overflow = "auto";
            sideMain.classList.remove("show");
        }

        if (e.target === sideLangSelector || e.target.parentElement === sideLangSelector) {
            sideLang.classList.add("show");
        }

        if (e.target === sideLangBack || e.target === sideLang) {
            sideLang.classList.remove("show");
        }
    });

    countries.forEach((country, index) => {
        let countryItem = `
            <li class="side-lang-item">
                <a href="#">
                    <img class="lang-list-country-img" src="images/country/${index + 1}.svg" />
                    <span>${country}</span>
                    <img class="selector-arrow-img" src="images/side/side_arrow.svg" />
                </a>
            </li>`;

        sideLangList.insertAdjacentHTML("beforeend", countryItem);
    });
});
