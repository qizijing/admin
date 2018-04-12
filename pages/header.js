$(function(){
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
})