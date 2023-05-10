const onSearchInput = () => {
    let searchInput = document.querySelector(".search-input-text");
    let searchClearBtn = document.querySelector(".search-clear-btn");
    searchInput.value !== "" ? searchClearBtn.classList.add("show") : searchClearBtn.classList.remove("show");
};

document.addEventListener("DOMContentLoaded", () => {
    let searchSection = document.querySelector(".search");
    let searchInput = document.querySelector(".search-input-text");
    let searchClearBtn = document.querySelector(".search-clear-btn");
    let searchCancelBtn = document.querySelector(".search-cancel-btn");

    searchClearBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchClearBtn.classList.remove("show");
    });

    document.addEventListener("click", (e) => {
        if (e.target === searchCancelBtn || e.target === searchSection) {
            searchSection.classList.remove("show");
        }
    });
});
