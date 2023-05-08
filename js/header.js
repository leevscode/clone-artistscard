document.addEventListener("DOMContentLoaded", () => {
    let countries = ["대한민국 / KRW", "USA / USD", "日本 / JPY", "中国 / CNY", "España / EUR", "Deutschland / EUR", "Indonesia / IDR", "ประเทศไทย / THB", "La France / EUR", "Portugal / BRL", "Australia / AUD", "Canada / CAD", "香港 / HKD", "Malaysia / MYR", "New Zealand / NZD", "Pilipinas / PHP", "Singapore / SGD", "台灣 / TWD", "United Kingdom / GBP", "Việt Nam / VND", "Россия / RUB"];
    let countryContainer = document.querySelector(".header-lang-list");

    countries.forEach((country, index) => {
        let countryItem = `
            <li class="header-lang-item">
                <a href="#">
                    <div class="header-lang-item-container">
                        <img src="images/header/country/${index + 1}.svg" />
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
    });
});
