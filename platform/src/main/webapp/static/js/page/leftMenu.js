$(document).ready(function() {
	var pId = $.getUrlParam("pId");
	
	//获取当前用户的权限菜单
	$.ajax({
		type: "post",
		datatype: "json",
		url: "../home/getMenu.do",
		data: {
			"parentId": pId
		},
		async: false,
		success: function(data){
			//获取父页面当前选中的菜单文字
			var topMenu = $("#top_menu li.active a", window.top.document).html();
			
			var html = '<a href="javascript:;"><i class="fa fa-files-o"></i><span>' + topMenu + '</span>'
            		 + '<i class="fa fa-angle-left pull-right"></i></a><ul class="treeview-menu">';
			
			for(var i = 0; i < data.length; i++) {
				html += '<li><a href="'+ data[i].functionUrl +'" target="mainFrame"><i class="fa fa-circle-o"></i>' + data[i].functionName + '</a></li>';
			}
			html += '</ul>';
			$("#treeview").html(html);
			
			$('.sidebar-menu li ul li').eq(0).addClass('active');
			$("#mainFrame", window.top.document).attr('src', $('#nav-sidebar li ul li a').eq(0).attr('href'));
			
			//左侧二级菜单点击添加.active类
			$(".treeview-menu li a").click(function(){
				$('.treeview-menu li').removeClass("active");
				$(this).parent('li').addClass('active');
			});
		}
	});
});