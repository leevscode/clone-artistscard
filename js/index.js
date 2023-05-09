let countries = ["대한민국 / KRW", "USA / USD", "日本 / JPY", "中国 / CNY", "España / EUR", "Deutschland / EUR", "Indonesia / IDR", "ประเทศไทย / THB", "La France / EUR", "Portugal / BRL", "Australia / AUD", "Canada / CAD", "香港 / HKD", "Malaysia / MYR", "New Zealand / NZD", "Pilipinas / PHP", "Singapore / SGD", "台灣 / TWD", "United Kingdom / GBP", "Việt Nam / VND", "Россия / RUB"];

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
