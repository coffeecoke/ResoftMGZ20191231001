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

title='鑫声第十五期'; // 分享标题
desc='新中国70年华诞，在这金秋十月，在新中国70年华诞，一个声音在融鑫人内心深处唤起：“我爱你，中国！”'; // 分享描述
link = 'http://weixin.chinaresoft.com/resoftwechat/pages/nationalDay/jump.html';
imgUrl='http://weixin.chinaresoft.com/resoftwechat/pages/nationalDay/imgs/share2.png'; // // 分享图标

$(function () {
    $.post("http://weixin.chinaresoft.com/resoftwechat/wc/magazine/RWA_updateUIMagazineViewLog?uimgzSN=2019Y(09-10)M01I",null,function (result) {});
});