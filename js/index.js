$(function () {
    $('.menu-container').load('menu.html',function () {
        $('.pop-menu').on('click',function (e) {
            $('.menu').animate({
                left:0
            },1000)
            e.stopPropagation()
        })
        $('.wrapper').click(function (e) {
            $('.menu').animate({
                left:'-100%'
            },1000)
        });
        audioAutoPlay('background-music');
    });

    $('.text-container img，.fm img').addClass('animated bounceIn')

//解决移动端 视频，音频 不能自动播放的问题
    function audioAutoPlay(id){

        var audio = document.getElementById(id);
        var play = function(){
            audio.play();

            document.removeEventListener("touchstart",play, false);
        };
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            play();
        }, false);
        document.addEventListener('YixinJSBridgeReady', function() {
            play();
        }, false);
        document.addEventListener("touchstart",play, false);
    }
})

title='鑫声第十六期'; // 分享标题
desc=''; // 分享描述
link = 'http://weixin.chinaresoft.com/resoftwechat/pages/ResoftMGZ20191231001/pages/page1.html';
imgUrl='http://weixin.chinaresoft.com/resoftwechat/pages/ResoftMGZ20191231001/imgs/share.png'; // // 分享图标

$(function () {
    $.post("http://weixin.chinaresoft.com/resoftwechat/wc/magazine/RWA_updateUIMagazineViewLog?uimgzSN=2020Y(01-03)M01I",null,function (result) {});
});