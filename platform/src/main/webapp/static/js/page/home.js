
//当页面大小调整时，重新计算右侧的宽度
$(window).resize(function(){
	if($("#left").is(":visible")){
		$("#right").animate({width:$("#content").width() - LEFT_MENU_WIDTH});	
	}
	else{
		$("#right").animate({width:$("#content").width()});
	}
});
//获取当前用户的权限菜单
$.ajax({
	type: "POST",
	datatype: "json",
	url: "../home/getMenu.do",
	data: {
		parentId: 0
	},
	async: false,
	success: function(data) {
		if(data == null){
			return;
		}
		var html_top_menu = "";
		for(var i = 0; i < data.length; i++) {
			html_top_menu += '<li><a href="javascript:;" functionUrl="' + data[i].functionUrl + '" functionType="' + data[i].functionType + '" functionId="' + data[i].functionId + '">' + data[i].functionName + '</a></li>';
		}
		
		$("#top_menu").html(html_top_menu);
		
		//给导航条第一个赋背景色
		$("#top_menu li").eq(0).attr("class", "active");
		
		//绑定点击事件
		$("#top_menu li a").on('click', function() {
			if($(this).attr("functionType") == 0) {
				$("#right").animate({width: $("#content").width()});
				$("#left").animate({width: 0, opacity: "hide"});
				$("#mainFrame").attr("src", $(this).attr("functionUrl"));
			}
			else {
				$("#left").animate({width: LEFT_MENU_WIDTH, opacity: "show"});
				$("#right").animate({width: $("#content").width() - LEFT_MENU_WIDTH});
				//$("#mainFrame").attr("src", "../page/blank.jsp");
				$("#menuFrame").attr("src", './menu.do?pId=' + $(this).attr("functionId"));
			}
			
			//设置当前菜单的背景色
			$('.navigation-header li').removeClass();
			$(this).parent('li').attr("class", "active");
		});
		
	}
});