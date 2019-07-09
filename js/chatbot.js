/* chatbot.js v1.0 | 2019.07.02 | UX/UI, HyunHyun Lee */

// Full Popup [가이드]
$(document).ready(function() {
    $(".btn_help").click(function() {
        $(".guide_wrap").addClass("action");
        $("body").css({
            overflow: 'hidden'
        }).bind('touchmove', function(e) {
            e.preventDefault()
        });
    });
    $(".btn_guide_close").click(function() {
        $(".guide_wrap").removeClass("action");
        $("body").css({
            overflow: 'auto'
        }).unbind('touchmove');
        $(".guide_area").removeClass("showScroll");
        $(".guide_area").scrollTop(0);
    });
});

$('.guide_area').scroll(function() {
    var $el = $('.guide_area');

    if ($(this).scrollTop() >= 20) $el.addClass('showScroll');
    else $el.removeClass('showScroll');
});

// Full Popup [이미지 확대]
$(document).ready(function() {
    $(".carousel_card_img").click(function() {
        $("#LayerFull_imgView").css('display', 'block');
        $("body").css({
            overflow: 'hidden'
        }).bind('touchmove', function(e) {
            e.preventDefault()
        });
    });
    $(".btn_img_close").click(function() {
        $("#LayerFull_imgView").css('display', 'none');
        $("body").css({
            overflow: 'auto'
        }).unbind('touchmove');
    });
});

// Full Popup [상담원 채팅 대기]
$(document).ready(function() {
    $(".connect").click(function() {
        $("#LayerFull_customerService").css('display', 'block');
        $("body").css({
            overflow: 'hidden'
        }).bind('touchmove', function(e) {
            e.preventDefault()
        });
    });
    $(".popConBtn .close").click(function() {
        $("#LayerFull_customerService").css('display', 'none');
        $("body").css({
            overflow: 'auto'
        }).unbind('touchmove');
    });
});

// Full Popup [상담원 채팅 종료]
$(document).ready(function() {
    $(".btn_end").click(function() {
        $("#LayerFull_logout").css('display', 'block');
        $("body").css({
            overflow: 'hidden'
        }).bind('touchmove', function(e) {
            e.preventDefault()
        });
    });
    $(".popConBtn .cancel").click(function() {
        $("#LayerFull_logout").css('display', 'none');
        $("body").css({
            overflow: 'auto'
        }).unbind('touchmove');
    });
});

// 캐러셀 카드 : SWIPER
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    CSSWidthAndHeight: true,
    slidesOffsetBefore: 47,
    slidesOffsetAfter: 47,
    spaceBetween: 7,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 캐러셀 카드 : 슬라이드시 챗봇 아이콘 제어
$(window).load(function() {
    $(".swiper-wrapper").swipe({
        swipeStatus: function(event, phase, direction, distance, duration, fingers) {
            if (direction == "left") {
                $(this).parent(".carousel").prevAll(".character").css('display', 'none');
                return false;
            }
        },
        threshold: 200,
        excludedElements: "" // a 태그 스왑문제 재정의
    });
    $(".swiper-container").swipe({
        swipeStatus: function(event, phase, direction, distance, duration, fingers) {
            if (direction == "right") {
                swiper.on('reachBeginning', function() { //화면의 처음[reachBeginning]으로 돌아가면 아이콘 나타남
                    $(".character").css('display', 'block');
                })
                return false;
            }
        },
        threshold: 200,
        excludedElements: "" // a 태그 스왑문제 재정의
    });
});

// 캐러셀 카드 : 버튼 클릭시 아이콘 제어
$(document).ready(function() {
    $(".swiper-button-next").click(function() {
        $(this).parent(".carousel").prevAll(".character").css('display', 'none');
    });
});