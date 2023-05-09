document.addEventListener("DOMContentLoaded", () => {
    let countryContainer = document.querySelector(".header-lang-list");

    countries.forEach((country, index) => {
        let countryItem = `
            <li class="header-lang-item">
                <a href="#">
                    <div class="header-lang-item-container">
                        <img src="images/country/${index + 1}.svg" />
                        <span>${country}</span>
                    </div>
                </a>
            </li>`;

        countryContainer.insertAdjacentHTML("beforeend", countryItem);
    });

    let selectedCountry = document.querySelector(".header-lang-item-container > span");
    selectedCountry.classList.add("header-lang-item-selected");

    let langSelector = document.querySelector(".header-lang-selector");
    let selectorArrow = document.querySelector(".selector-arrow");
    let langList = document.querySelector(".header-lang-container");

    let sideMenuBtn = document.querySelector(".btn-menu");
    let side = document.querySelector(".side");

    document.addEventListener("click", (e) => {
        let isLangSelectorClicked = e.target === langSelector || e.target.parentElement === langSelector;
        let isLangListClicked = e.target === langList || e.target.parentElement === langList;

        if (isLangSelectorClicked) {
            langList.classList.toggle("show");
            selectorArrow.classList.toggle("transform-180");
        } else if (!isLangListClicked) {
            langList.classList.remove("show");
            selectorArrow.classList.remove("transform-180");
        }

        if (e.target === sideMenuBtn) {
            document.querySelector("body").style.overflow = "hidden";
            side.classList.add("show");
        }
    });
});
