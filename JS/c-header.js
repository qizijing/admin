var header=(function(){
	headerDom=$(''
		+<div class="admin-app">
			<div class="title"><h1></h1></div>
			<div class="acount">
				<div class="logo">
					<span></span>
					<i class="iconfont icon-arrcdown"></i>
				</div>
				<div class="submenu">
					<i class="iconfont icon-arrcdown"></i>
					<span></span>
				</div>
			</div>	
		</div>);
	var title=headerDom.find('.title h1'),
	logo=headerDom.find('.logo');
	title.html(app.config.headerTitle);
	logo.css('background-image',app-config.headerLogo);

	var account=$('.account'),
	menu=$('.submenu'),
	arrow=$('.account span+i');
	account.mouseover(function(){
		account.css('color':'black');
		menu.css('display','block');
		arrow.removeClass('icon-arrowdown');
		arrow.addClass('icon-arrowup');
	});
	account.mouseout(function(){
		account.css('color':'gray');
		menu.css('display','none');
		arrow.removeClass('icon-arrowup');
		arrow.addClass('icon-arrowdown');
	});
	menu.click(function(){
		locaton.hash="#/login";
	});

	function show(){
		$(app.config.appContainer).append('<div class="admin-app_header"></div>')
	}
	return {show:show}
})();