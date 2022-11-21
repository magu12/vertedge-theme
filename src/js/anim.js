$(document).ready(function () {

    // how items logic  
    $(window).scroll(function () {
        if ($(this).width() > 768) {
            if ($(this).scrollTop() > $('.how').offset().top && $(this).scrollTop() < $('.how').offset().top + $('.how').height()) {
                $('.how .wrap').addClass('fixed');
                let itemCurrent = $(`.how__item[index="${parseInt($('.how__item.active').attr('current-index'))}"]`);
                let itemActive = $('.how__item.active');
                let itemDublicate = $('.how__item.dublicate');
                let itemNext = $(`.how__item[index="${parseInt($('.how__item.active').attr('current-index')) + 1}"]`);
                let itemPrev = $(`.how__item[index="${parseInt($('.how__item.active').attr('current-index')) - 1}"]`);
                let distance;
                if ($(itemNext).length == 0) {
                    distance = $('.how').offset().top + $('.how').height() - $(itemCurrent).offset().top;
                } else {
                    distance = $(itemNext).offset().top - $(itemCurrent).offset().top;
                }
                let distanceMove = $(itemActive).offset().top - $(itemCurrent).offset().top;
                let distanceUnit = distance / 100;
                let distanceMovePercent = distanceMove / distanceUnit;
                if ($(itemNext).length != 0)
                    if (distanceMovePercent > 100) {
                        if ($(itemDublicate).hasClass('hide')) {
                            $(itemDublicate).html($(itemNext).html());
                            $(itemActive).addClass('leave').attr('current-index', $(itemNext).attr('index'));
                            $(itemDublicate).removeClass('hide').attr('current-index', $(itemNext).attr('index'));
                            setTimeout(() => {
                                $(itemActive).removeClass('leave').addClass('hide');
                            }, 500)
                        } else {
                            $(itemActive).html($(itemNext).html());
                            $(itemDublicate).addClass('leave').attr('current-index', $(itemNext).attr('index'));
                            $(itemActive).removeClass('hide').attr('current-index', $(itemNext).attr('index'));
                            setTimeout(() => {
                                $(itemDublicate).removeClass('leave').addClass('hide');
                            }, 500)
                        }
                    }
                if ($(itemPrev).length != 0)
                    if (distanceMovePercent < 0) {
                        if ($(itemDublicate).hasClass('hide')) {
                            $(itemDublicate).html($(itemPrev).html());
                            $(itemActive).addClass('leave').attr('current-index', $(itemPrev).attr('index'));
                            $(itemDublicate).removeClass('hide').attr('current-index', $(itemPrev).attr('index'));
                            setTimeout(() => {
                                $(itemActive).removeClass('leave').addClass('hide');
                            }, 500)
                        } else {
                            $(itemActive).html($(itemPrev).html());
                            $(itemDublicate).addClass('leave').attr('current-index', $(itemPrev).attr('index'));
                            $(itemActive).removeClass('hide').attr('current-index', $(itemPrev).attr('index'));
                            setTimeout(() => {
                                $(itemDublicate).removeClass('leave').addClass('hide');
                            }, 500)
                        }
                    }
            } else if ($(this).scrollTop() - parseFloat($('.how').css('padding-top')) < $('.how').offset().top) {
                $('.how .wrap').removeClass('fixed');
            }
        }
    });

    // anim steps logic



    var circlesProcPrev = 0; // for step-3 circles for

    $(window).scroll(function () {

        if ($(this).width() > 768) {
            let itemActive = $('.how__item.active');
            let itemNext = $(`.how__item[index="${parseInt($('.how__item.active').attr('current-index')) + 1}"]`);
            let itemPrev = $(`.how__item[index="${parseInt($('.how__item.active').attr('current-index')) - 1}"]`);
            let itemCurrent = $(`.how__item[index="${parseInt($('.how__item.active').attr('current-index'))}"]`);
            let distance;
            if ($(itemNext).length == 0) {
                distance = $('.how').offset().top + $('.how').height() - $(itemCurrent).offset().top;
            } else {
                distance = $(itemNext).offset().top - $(itemCurrent).offset().top;
            }
            let distanceMove = $(itemActive).offset().top - $(itemCurrent).offset().top;
            let distanceUnit = distance / 100;
            let distanceMovePercent = distanceMove / distanceUnit;
            if ($(itemActive).attr('current-index') == '1') {

                if (distanceMovePercent < 15 && $('#doc-1').hasClass('move')) {
                    $('#doc-1').removeClass('move');
                }

                if (distanceMovePercent > 15 && distanceMovePercent < 30 && !$('#doc-2').hasClass('move')) {
                    $('#doc-1').addClass('move');
                } else if (distanceMovePercent > 15 && distanceMovePercent < 30 && $('#doc-2').hasClass('move')) {
                    $('#doc-2').removeClass('move');
                }

                if (distanceMovePercent > 30 && distanceMovePercent < 45 && !$('#doc-3').hasClass('move')) {
                    $('#doc-2').addClass('move');
                } else if (distanceMovePercent > 30 && distanceMovePercent < 45 && $('#doc-3').hasClass('move')) {
                    $('#doc-3').removeClass('move');
                }

                if (distanceMovePercent > 45 && distanceMovePercent < 60 && !$('#doc-4').hasClass('move')) {
                    $('#doc-3').addClass('move');
                } else if (distanceMovePercent > 45 && distanceMovePercent < 60 && $('#doc-4').hasClass('move')) {
                    $('#doc-4').removeClass('move');
                }

                if (distanceMovePercent > 60 && distanceMovePercent < 75 && !$('.docs svg').hasClass('hide')) {
                    $('#doc-4').addClass('move');
                } else if (distanceMovePercent > 60 && distanceMovePercent < 75 && $('.docs svg').hasClass('hide')) {
                    $('.docs svg').removeClass('hide');
                }

                if (distanceMovePercent > 75 && distanceMovePercent < 90 && !$('#step-1').hasClass('leave')) {
                    $('.docs svg').addClass('hide');
                } else if (distanceMovePercent > 75 && distanceMovePercent < 90 && $('#step-1').hasClass('leave')) {
                    $('#step-1').removeClass('leave');
                    $('#step-2').removeClass('active');
                }

                if (distanceMovePercent > 90) {
                    $('#step-1').addClass('leave');
                    $('#step-2').addClass('active');/* 
                $('#step-2 .line').addClass('active'); */

                }
            }

            if ($(itemActive).attr('current-index') == '2') {/* 
                $(window).scrollTop($(itemActive).offset.top); */


                if (-144 + distanceMovePercent * 2.6 < 0) {
                    $('.line').attr('style', `stroke-dashoffset: ${-144 + distanceMovePercent * 2.6}%;`);
                }

                if (distanceMovePercent < 40 && $('#gear-1').hasClass('active')) {
                    $('#gear-1').removeClass('active');
                }

                if (distanceMovePercent > 25 && distanceMovePercent < 40 && !$('#gear-2').hasClass('active')) {
                    $('#gear-1').addClass('active');
                } else if (distanceMovePercent > 25 && distanceMovePercent < 40 && $('#gear-2').hasClass('active')) {
                    $('#gear-2').removeClass('active');
                }

                if (distanceMovePercent > 40 && distanceMovePercent < 55 && !$('#gear-3').hasClass('active')) {
                    $('#gear-2').addClass('active');
                } else if (distanceMovePercent > 40 && distanceMovePercent < 55 && $('#gear-3').hasClass('active')) {
                    $('#gear-3').removeClass('active');
                }

                if (distanceMovePercent > 55 && distanceMovePercent < 65 && !$('.dots circle').eq(0).hasClass('active')) {
                    $('#gear-3').addClass('active');
                } else if (distanceMovePercent > 55 && distanceMovePercent < 65 && $('.dots circle').eq(0).hasClass('active')) {
                    $('.dots circle').eq(0).removeClass('active');
                }

                if (distanceMovePercent > 65 && distanceMovePercent < 70 && !$('.dots circle').eq(1).hasClass('active')) {
                    $('.dots circle').eq(0).addClass('active');
                } else if (distanceMovePercent > 65 && distanceMovePercent < 70 && $('.dots circle').eq(1).hasClass('active')) {
                    $('.dots circle').eq(1).removeClass('active');
                }

                if (distanceMovePercent > 70 && distanceMovePercent < 75 && !$('.dots circle').eq(2).hasClass('active')) {
                    $('.dots circle').eq(1).addClass('active');
                } else if (distanceMovePercent > 70 && distanceMovePercent < 75 && $('.dots circle').eq(2).hasClass('active')) {
                    $('.dots circle').eq(2).removeClass('active');
                }

                if (distanceMovePercent > 75 && distanceMovePercent < 80 && !$('.dots circle').eq(3).hasClass('active')) {
                    $('.dots circle').eq(2).addClass('active');
                } else if (distanceMovePercent > 75 && distanceMovePercent < 80 && $('.dots circle').eq(3).hasClass('active')) {
                    $('.dots circle').eq(3).removeClass('active');
                }

                if (distanceMovePercent > 80 && distanceMovePercent < 85 && !$('.dots circle').eq(4).hasClass('active')) {
                    $('.dots circle').eq(3).addClass('active');
                } else if (distanceMovePercent > 80 && distanceMovePercent < 85 && $('.dots circle').eq(4).hasClass('active')) {
                    $('.dots circle').eq(4).removeClass('active');
                }

                if (distanceMovePercent > 85 && distanceMovePercent < 90 && !$('#step-1').hasClass('overflow')) {
                    $('.dots circle').eq(4).addClass('active');
                } else if (distanceMovePercent > 85 && distanceMovePercent < 90 && $('#step-1').hasClass('overflow')) {
                    $('#step-1').addClass('active');
                    $('#step-1').removeClass('overflow');
                    $('.dot').removeClass('active');
                }

                if (distanceMovePercent > 90 && distanceMovePercent < 100 && !$('#step-3').hasClass('active')) {
                    $('#step-1').removeClass('active');
                    $('#step-1').addClass('overflow');
                    $('.dot').addClass('active');
                } else if (distanceMovePercent > 90 && distanceMovePercent < 100 && $('#step-3').hasClass('active')) {
                    $('#step-2').removeClass('leave');
                    $('#step-2').removeClass('overflow');
                    $('#step-3').removeClass('active');
                }

            }


            if ($(itemActive).attr('current-index') == '3') {
                $('#step-2').addClass('leave');
                $('#step-2').addClass('overflow');
                $('#step-3').addClass('active');
                let circles = $('.circles path').length;
                let roundDistance = Math.round(distanceMovePercent * 1.2)
                let circlesProc = Math.round(circles / 100 * roundDistance);
                if (distanceMovePercent > 90)
                    circlesProc = circles / 100 * 100;

                let timer = 1;
                for (let i = circlesProcPrev; i < circlesProc; i = i + 2) {
                    setTimeout(() => {
                        $('.circles path').eq(i).addClass('active');
                        $('.circles path').eq(i + 1).addClass('active');
                    }, timer * 10);
                    timer++;
                }

                for (let i = circlesProc * 2; i < $('.circles path').length; i = i + 2) {
                    setTimeout(() => {
                        $('.circles path').eq(i).removeClass('active');
                        $('.circles path').eq(i + 1).removeClass('active');
                    }, timer * 10);
                    timer++;
                }

                /* if (distanceMovePercent < 15 && $('.circles path').eq(0).hasClass('active')) {
                    let timer = 1;
                    console.log('s');
                    for (let i = 0; i < $('.circles path').length; i = i - 2) {
                        setTimeout(() => {
                            $('.circles path').eq(i).removeClass('active');
                            $('.circles path').eq(i + 1).removeClass('active');
                            $('.circles path').eq(i + 2).removeClass('active');
                            $('.circles path').eq(i + 3).removeClass('active');
                        }, timer * 10);
                        timer++;
                    }
                } */

                if (distanceMovePercent < 95 && $('#step-3 .lines').hasClass('active')) {
                    $('#step-3 .lines').removeClass('active');
                }

                if (distanceMovePercent > 95 && distanceMovePercent < 100 && !$('#step-4').hasClass('active')) {
                    $('#step-3 .lines').addClass('active');
                } else if (distanceMovePercent > 95 && distanceMovePercent < 100 && $('#step-4').hasClass('active')) {
                    $('#step-3').removeClass('hide');
                    $('#step-4').removeClass('active');
                    $('#step-2').addClass('active');
                }

                circlesProcPrev = circlesProc;
            }


            if ($(itemActive).attr('current-index') == '4') {
                if (distanceMovePercent > 10 && distanceMovePercent < 20 && !$('#step-4 .added .lines').hasClass('hide')) {
                    $('#step-3').addClass('hide');
                    $('#step-4').addClass('active');
                    $('#step-2').removeClass('active');
                } else if (distanceMovePercent > 10 && distanceMovePercent < 20 && $('#step-4 .added .lines').hasClass('hide')) {
                    $('#step-4 .added .lines').removeClass('hide');
                }

                if (distanceMovePercent > 20 && distanceMovePercent < 50 && !$('#step-4 .added .circles circle').hasClass('hide')) {
                    $('#step-4 .added .lines').addClass('hide');
                } else if (distanceMovePercent > 20 && distanceMovePercent < 50 && $('#step-4 .added .circles circle').hasClass('hide')) {
                    $('#step-4 .added .circles circle').removeClass('hide');
                }


                if (distanceMovePercent > 40 && distanceMovePercent < 50 && !$('#step-4').hasClass('scale')) {
                    $('#step-4 .added .circles circle').addClass('hide');
                } else if (distanceMovePercent > 40 && distanceMovePercent < 50 && $('#step-4').hasClass('scale')) {
                    $('#step-4').removeClass('scale');
                }

                if (distanceMovePercent > 50 && distanceMovePercent < 55 && !$('#step-4 .added .circles circle').eq(0).hasClass('hiden')) {
                    $('#step-4').addClass('scale');
                } else if (distanceMovePercent > 50 && distanceMovePercent < 55 && $('#step-4 .added .circles circle').eq(0).hasClass('hiden')) {
                    for (let i = 0; i < $('#step-4 .added .circles circle').length; i++) {
                        setTimeout(() => { $('#step-4 .added .circles circle').eq(i).removeClass('hiden'); }, i * 30);
                    }
                }

                if (distanceMovePercent > 55 && distanceMovePercent < 70 && !$('#step-4 .original .lines').hasClass('hide')) {
                    for (let i = 0; i < $('#step-4 .added .circles circle').length; i++) {
                        setTimeout(() => { $('#step-4 .added .circles circle').eq(i).addClass('hiden'); }, i * 30);
                    }
                } else if (distanceMovePercent > 55 && distanceMovePercent < 70 && $('#step-4 .original .lines').hasClass('hide')) {
                    $('#step-4 .original .lines').removeClass('hide');
                }

                if (distanceMovePercent > 70 && distanceMovePercent < 90 && !$('#step-4 .original .circles circle').eq(0).hasClass('hide')) {
                    $('#step-4 .original .lines').addClass('hide');
                } else if (distanceMovePercent > 70 && distanceMovePercent < 90 && $('#step-4 .original .circles circle').eq(0).hasClass('hide')) {
                    for (let i = 0; i < $('#step-4 .original .circles circle').length; i++) {
                        setTimeout(() => { $('#step-4 .original .circles circle').eq(i).removeClass('hide'); }, i * 30);
                    }
                }

                if (distanceMovePercent > 90 && distanceMovePercent < 95 && !$('#step-4').hasClass('hide')) {
                    for (let i = 0; i < $('#step-4 .original .circles circle').length; i++) {
                        setTimeout(() => { $('#step-4 .original .circles circle').eq(i).addClass('hide'); }, i * 30);
                    }
                } else if (distanceMovePercent > 90 && distanceMovePercent < 95 && $('#step-4').hasClass('hide')) {
                    $('#step-4').removeClass('hide');
                }


                if (distanceMovePercent > 95 && !$('#step-5').hasClass('active')) {
                    $('#step-4').addClass('hide');
                } else if (distanceMovePercent > 95 && $('#step-5').hasClass('active')) {
                    $('#step-5').removeClass('active');
                }


            }


            if ($(itemActive).attr('current-index') == '5') {
                if (distanceMovePercent > 5 && distanceMovePercent < 20 && !$('.claims circle').eq(0).hasClass('active')) {
                    $('#step-5').addClass('active');
                } else if (distanceMovePercent > 5 && distanceMovePercent < 20 && $('.claims circle').eq(0).hasClass('active')) {
                    let j = 1;
                    for (let i = $('.claims circle').length - 2; i >= 0; i--) {
                        setTimeout(() => { $('.claims circle').eq(i).removeClass('active'); }, j * 30);
                        if (j == $('.claims circle').length - 3) {
                            setTimeout(() => { $('.claims circle').eq($('.claims circle').length - 1).removeClass('active'); }, j * 60);
                            setTimeout(() => { $('.claims circle').eq($('.claims circle').length - 2).removeClass('active'); }, j * 120);
                        }
                        j++;
                    }
                }
                if (distanceMovePercent > 10 && distanceMovePercent < 20 && !$('.physicians path').eq(0).hasClass('active')) {
                    let j = 1;
                    for (let i = $('.claims circle').length - 2; i >= 0; i--) {
                        setTimeout(() => { $('.claims circle').eq(i).addClass('active'); }, j * 30);
                        if (j == $('.claims circle').length - 3) {
                            setTimeout(() => { $('.claims circle').eq($('.claims circle').length - 1).addClass('active'); }, j * 60);
                            setTimeout(() => { $('.claims circle').eq($('.claims circle').length - 2).addClass('active'); }, j * 120);
                        }
                        j++;
                    }
                } else if (distanceMovePercent > 10 && distanceMovePercent < 20 && $('.physicians path').eq(0).hasClass('active')) {
                    let j = 1;
                    for (let i = $('.physicians path').length; i >= 0; i = i - 4) {
                        setTimeout(() => {
                            $('.physicians path').eq(i).removeClass('active');
                            $('.physicians path').eq(i - 1).removeClass('active');
                            $('.physicians path').eq(i - 2).removeClass('active');
                            $('.physicians path').eq(i - 3).removeClass('active');
                        }, j * 30);
                        j++;
                    }
                }

                if (distanceMovePercent > 20 && distanceMovePercent < 30 && !$('.providers circle').eq(0).hasClass('active')) {

                    let j = 1;
                    for (let i = $('.physicians path').length; i >= 0; i = i - 4) {
                        setTimeout(() => {
                            $('.physicians path').eq(i).addClass('active');
                            $('.physicians path').eq(i - 1).addClass('active');
                            $('.physicians path').eq(i - 2).addClass('active');
                            $('.physicians path').eq(i - 3).addClass('active');
                        }, j * 30);
                        j++;
                    }
                } else if (distanceMovePercent > 20 && distanceMovePercent < 30 && $('.providers circle').eq(0).hasClass('active')) {

                    let j = 1;
                    for (let i = $('.providers circle').length; i >= 0; i--) {
                        setTimeout(() => {
                            $('.providers circle').eq(i).removeClass('active');
                        }, j * 30);
                        j++;
                    }
                }


                if (distanceMovePercent > 30 && distanceMovePercent < 40 && !$('#step-5 .lines').hasClass('active')) {
                    let j = 1;
                    for (let i = $('.providers circle').length; i >= 0; i--) {
                        setTimeout(() => {
                            $('.providers circle').eq(i).addClass('active');
                        }, j * 30);
                        j++;
                    }
                } else if (distanceMovePercent > 30 && distanceMovePercent < 50 && $('#step-5 .lines').hasClass('active')) {
                    $('#step-5 .lines').removeClass('active');
                }

                if (distanceMovePercent > 50) {
                    $('#step-5 .lines').addClass('active');
                }
            }
        }
    });


});