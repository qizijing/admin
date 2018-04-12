var login=(function  () {
	var html=''
	+'<div id="admain-app">'
		+'<div class="login">'
			+'<h1>集团后台登录界面</h1>'
			+'<form>'
			   	+'<label>用户名</label>'
				+'<input type="text">'
				+'<br/>'
				+'<label>密　码</label>'
				+'<input type="password">'
				+'<br/>'
				+'<label>验证码</label>'
				+'<input type="text">'
				+'<br/>'
				+'<input type="submit" value="login" class="submit">'
			+'</form>'
		+'</div>'
	+'</div>'
	+'';
	function show(){
		$(app.config.appContainer).html('');
		$(app.config.appContainer).html(html);
	}
	return {show:show};
})();