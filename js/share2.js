var title, link, desc, imgUrl, appId, timestamp, nonceStr, signature;


$(function(){
		$.post("http://weixin.chinaresoft.com/resoftwechat/pages/RWA_GetTicketInfo", {
			url : window.location.href.split('#')[0]
		}, function(result) {
			//alert(window.location.href.split('#')[0]);
			//alert(result.rst);
			//alert(result.msg);
			//alert(result.data);
			if (result.rst == "1") {
				data = result.data;
				appId = data.appId;
				//alert(appId);
				timestamp = data.timestamp;
				//alert(timestamp);
				nonceStr = data.nonce_str;
				//alert(nonceStr);
				signature = data.signature;
				//alert(signature);
				wx.config({
					debug : false,
					appId : appId,
					timestamp : timestamp,
					nonceStr : nonceStr,
					signature : signature,
					jsApiList: [ 'onMenuShareTimeline',
							'onMenuShareAppMessage', 'onMenuShareQQ',
							'onMenuShareWeibo', 'showOptionMenu']
				});

				wx.ready(function() {
					wx.showOptionMenu();
					shareThematicDetailPage();
				});
				
				var shareThematicDetailPage = function() {
					// 分享到朋友圈
					wx.onMenuShareTimeline({
						title : title,
						link : 'http://weixin.chinaresoft.com/resoftwechat/pages/ResoftMGZ20180627010/jump.html',
						desc : desc,
						imgUrl : imgUrl,
						success : shareSuccess
					});
					// 分享给朋友
					wx.onMenuShareAppMessage({
						title : title,
                        link : 'http://weixin.chinaresoft.com/resoftwechat/pages/ResoftMGZ20180627010/jump.html',
						desc : desc,
						imgUrl : imgUrl,
						success : shareSuccess
					});
					// 分享到QQ
					wx.onMenuShareQQ({
						title : title,
                        link : 'http://weixin.chinaresoft.com/resoftwechat/pages/ResoftMGZ20180627010/jump.html',
						desc : desc,
						imgUrl : imgUrl,
						success : shareSuccess

					});
					// 分享到腾讯微博
					wx.onMenuShareWeibo({
						title : title,
                        link : 'http://weixin.chinaresoft.com/resoftwechat/pages/ResoftMGZ20180627010/jump.html',
						desc : desc,
						imgUrl : imgUrl,
						success : shareSuccess
					});
				};

				var shareSuccess = function() {
					//alert('分享成功');
				};
			}
		});
	});
