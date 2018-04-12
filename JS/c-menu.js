// var menu=(function(){
// 	function show(){
// 		$(app.config.appContainer).append('<div class="admin-app_menu"></div>')
// 	}
// 	return {show:show};
// })();
$(function(){
	var menubar=$('.menu-bar');
	var menuItem=$('.item');
	lastMenuBar=null;
	menubar.click(function(e){
		var menu=$(e.target).parents('li');
		var items=menu.find('.menu-items');
		var display=items.css('display')==='none'?'block':'none';
			items.css('display',display);
			if((lastMenuBar!==null) && (lastMenuBar.get(0)==menu.get(0))){
				lastMenuBar.find('.menu-items').css('display','none');
			}
			
			menu.css('display',display);
		}
		lastMenuBar=menu;
		menuItem.click(function(e){
			var item=$(e.current);
		})
	});
});

