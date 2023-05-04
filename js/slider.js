let swiperSlider = new Swiper(".swiper-slider", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
    },
});

// Slider 슬라이드 추가
for (let i = 0; i < 14; i++) {
    let sliderItem = `
        <div class="swiper-slide">
            <a href="#" class="img-slider">
                <picture>
                    <source class="img-slider-main" srcset="images/slider/mobile/${i + 1}_mobile.webp" media="(max-width: 720px)" />
                    <img class="img-slider-main" src="images/slider/${i + 1}.webp" />
                </picture>
                <div class="img-slider-title">
                    <img src="images/slider/${i + 1}_title.webp" />
                </div>
            </a>
        </div>`;
    swiperSlider.appendSlide(sliderItem);
}
