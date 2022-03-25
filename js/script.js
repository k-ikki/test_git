AOS.init({
    delay: 300,
    duration: 1000,
});

$(function() {

    // 変数宣言と代入
    var pageTop = $("#page-top");
    // ボタン非表示
    pageTop.hide();


    // 80pxスクロールしたらボタン表示
    $ (window).scroll(function () {
        if ($(this).scrollTop() > 80) {
        // 0.3秒でフェードイン
        pageTop.fadeIn(300);
    } else {
        // 0.3秒でフェードアウト
        pageTop.fadeOut(300);
    }
    });
    // 0.5秒でページトップへ戻る
    pageTop.click(function () {
        $("body, html").animate({ scrollTop: 0}, 500);
        return false;
    })
});


$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    });
});