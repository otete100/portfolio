
$(function(){

	//画像フェードイン
	$('.work_sec_img').addClass('showup');

	// ハンバーガー
	$('.nav_toggle, .hamburger_nav').on('click', function () {
		$('.nav_toggle, .hamburger_nav, body, .hamburger_bg').toggleClass('show');
	  });

	//スクロールローディング
	$(window).on('load scroll',function (){
		$('.sec_content').each(function(){
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});

	//logoの表示
	$(window).on('load',function(){
		$("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
		$("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
	});

});
