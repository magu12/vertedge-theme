jQuery(document).ready(function ($) {
    $("#tsparticles")
        .particles()
        .init({
            background: {
                color: "#FDFCFF"
            },
            interactivity: {
                events: {
                    onClick: { enable: true, mode: "push" },
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    push: { quantity: 4 },
                    repulse: { distance: 100, duration: 0.2 }
                }
            },
            particles: {
                color: { value: "#523EE5" },
                move: {
                    bounce: false,
                    direction: "none",
                    enable: true,
                    outModes: "out",
                    random: false,
                    speed: 2,
                    straight: false
                },
                number: { density: { enable: true, area: 800 }, value: 200 },
                opacity: {
                    value: 0.7
                },
                links: {
                    enable: true,
                    color: "#523EE5"
                },
                size: {
                    value: 2
                }
            }
        });

    var swiperDiscover = new Swiper(".discover__slider", {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $('.modal-open').on('click', function (e) {
        e.preventDefault();
        $('.modal').addClass('active');
    });

    $('.modal .close').on('click', function () {
        $('.modal').removeClass('active');
    });

    $(window).scrollTop(0);

});