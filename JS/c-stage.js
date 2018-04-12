var stage=(function(){
	function show(){
		$(app.config.appContainer).append('<div class="admin-app_stage"></div>')
	}
	//根据路由信息加载相应的panel 
	//router：路由字符串
	function load(router){
		var panel=parsePanel(router);
	}
	//将路由信息解析成panel名称
	//router 路由字符串
	//return string panel
	function parsePanel(router){
		return '';
	}
	return {show:show,load:load};
})();