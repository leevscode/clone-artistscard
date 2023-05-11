let onSearchInput;

document.addEventListener("DOMContentLoaded", () => {
    let searchSection = document.querySelector(".search");
    let searchInput = document.querySelector(".search-input-text");
    let searchClearBtn = document.querySelector(".search-clear-btn");
    let searchCancelBtn = document.querySelector(".search-cancel-btn");
    let searchRecentRecommend = document.querySelector(".search-recent-recommend");
    let searchResult = document.querySelector(".search-result");

    onSearchInput = () => {
        if (searchInput.value !== "") {
            searchClearBtn.classList.add("show");
            searchRecentRecommend.classList.add("hide");
            searchResult.classList.add("show");
        } else {
            searchClearBtn.classList.remove("show");
            searchRecentRecommend.classList.remove("hide");
            searchResult.classList.remove("show");
        }
    };

    const resetSearch = () => {
        searchInput.value = "";
        searchClearBtn.classList.remove("show");
        searchRecentRecommend.classList.remove("hide");
        searchResult.classList.remove("show");
    };

    searchClearBtn.addEventListener("click", () => {
        resetSearch();
    });

    document.addEventListener("click", (e) => {
        if (e.target === searchCancelBtn || e.target === searchSection) {
            searchSection.classList.remove("show");
            resetSearch();
        }
    });

    let searchResultList = document.querySelector(".search-result-list");
    let recentSearchList = document.querySelector(".recent-search-list");
    let recommendSearchList = document.querySelector(".recommend-search-list");

    for (let i = 0; i < 15; i++) {
        let searchResultItem = `
            <li class="search-result-item">
                <img src="images/search/result_img.webp" />
                <div class="search-result-item-info">
                    <div class="search-result-item-info-title">
                        <img src="images/search/result_title_img.webp" />
                        <span>Test Title ${i + 1}</span>
                    </div>
                    <span>Test Subtitle ${i + 1}</span>
                </div>
            </li>`;

        let recentSearchItem = `
            <li class="recent-search-item"><span>최근 검색어 ${i + 1}</span></li>`;

        let recommendSearchItem = `
            <li class="recommend-search-item"><img class="recommend-search-item-img" src="images/search/recommend_search.svg" /><span>추천 검색어 ${i + 1}</span></li>`;

        searchResultList.insertAdjacentHTML("beforeend", searchResultItem);

        i > 10 ? "" : recentSearchList.insertAdjacentHTML("beforeend", recentSearchItem);
        i > 9 ? "" : recommendSearchList.insertAdjacentHTML("beforeend", recommendSearchItem);
    }
});
