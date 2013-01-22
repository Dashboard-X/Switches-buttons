$(document).ready(function(){
	var jqDockOpts = {duration: 200};
	$('#dock').jqDock(jqDockOpts);
	$('body').css({overflow: "hidden"});
		
	//stacks
	$('.stack>img').toggle(function(){
		var vertical = 0;
		var horizontal = 0;
		$('~ul>li', this).each(function(){
			$(this).animate({top: '-' +vertical + 'px', left: horizontal + 'px'}, 300);
			vertical = vertical + 50;
			horizontal = (horizontal+1)*2;
		});
		$('~ul', this).animate({top: '-50px', left: '10px'}, 300).addClass('openStack');
		$('~ul>li>img', this).animate({width: '50px', marginLeft: '9px'}, 300);
	}, function(){
		//reverse above
		$('~ul',this).removeClass('openStack').children('li').animate({top: '20px', left: '-10px'}, 300);
		$('~ul>li>img',this).animate({width: '79px', marginLeft: '0'}, 300);
		//width: 50px;
	});
	
});