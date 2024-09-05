const webS = new Swiper('.web_s', {
    loop: true,
    autoplay:{delay:2000},
    navigation:{
        prevEl:'.project01 .pj01_in .swiper-button-prev',
        nextEl:'.project01 .pj01_in .swiper-button-next',
    },
});
    const ports = new Swiper(".main",{
        direction:'vertical',
        mousewheel:true,
        speed:1000,
    })
    const swiperEl = document.querySelector('swiper-container');
    const swiper = swiperEl.swiper;