$(document).ready(function () {
	//header selected
    $('.dropdown-toggle').dropdown();
	
	//iframe setting	
	var iframeWidth=$(document).width()-$('#sidebar').width();
    $('#mainIframe').width(iframeWidth);
    setIframeHeight(document.getElementById('mainIframe'));

    //sidebar
    $('#menu-toggle').click(function () {
    	
        if (!$('body').hasClass('sidebar-collapse')) {
        	
            $('body').addClass('sidebar-collapse');
			//remove a collapse attributes
			$("#sidebar-menu a").each(function(){ 
				if('false'==($(this).attr('aria-expanded'))){
					 $(this).click();
				}              				
            }); 
			//change iframe width
			iframeWidth=$(document).width()-$('#sidebar').width();
            $('#mainIframe').width(iframeWidth);
        } else {
        	
			$('body').removeClass('sidebar-collapse');
			// add a collapse attributes
			// $("#sidebar-menu a").each(function(){
                // $(this).attr('data-toggle', 'collapse');           
            // }); 
			//change iframe width
			iframeWidth=$(document).width()-$('#sidebar').width();
            $('#mainIframe').width(iframeWidth);
        }
        
        // 是否要添加padding-left 
        // $('body').hasClass('sidebar-collapse')为false时，添加padding-left为左部二级菜单
    	changeLeftMenuStyle(!$('body').hasClass('sidebar-collapse'));
    });	
   
   // 显示菜单
   showMenu(null,'top');
   // 加载完首页触发菜单[菜单上有class = active]点击事件
   $("#topMenu li a[class='active']").trigger('click');
	
});
function setIframeHeight(iframe) {
    if (iframe) {
      var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
      if (iframeWin.document.body) {
        iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
      }
    }
};
/**
 * 改变左部二级菜单样式
 * @param isAddLeftMemuPaddingLeft 是否要添加padding-left
 */
function changeLeftMenuStyle(isAddLeftMemuPaddingLeft){
	var paddingLeft = isAddLeftMemuPaddingLeft == false ? '0px' : '22px';
	// 将左侧菜单margin-left去掉
	$("#sidebar-menu > li > a").css('padding-left',paddingLeft);
}
/**
 * 展示菜单
 * @param obj 点击的顶部菜单
 * @param position 菜单位置 left [左部菜单] or top [顶部导航菜单]
 */
function showMenu(obj,position){
	
	 $("#topMenu li a[class='active']").removeClass('active');
	 $(obj).addClass('active');
	 // 上一次点击过,下一次点击湖绿
	 /*if($(obj).hasClass('active')){
		 return false;
	 }*/
	 // 当查找顶部菜单时，将parentId设为0
	 var parentId = position == 'top' ? 0 : $(obj).attr('functionId');
	 
	 $.ajax({
	    	type: "POST",
	    	datatype: "json",
	    	url: "./menu/getMenu.do",
	    	data: {
	    		parentId: parentId
	    	},
	    	async: false,
	    	success: function(data) {
	    		
	    		// 左部菜单
	    		if(position == 'left'){
	    			showLeftMenu(data);
	    			// 调整左部菜单的padding-left
	    			changeLeftMenuStyle(!$('body').hasClass('sidebar-collapse'));
	    			return;
	    		}
	    		
	    		// 顶部菜单
	    		if(position == 'top'){
	    			showTopMenu(data);
	    			return;
	    		}

	    	}
	    });
}
/**
 * 左部菜单展示
 * @param data 与展示菜单有关的数据
 */
function showLeftMenu(data){
	// 显示点击顶部导航菜单名称
	$('#topMenuName').html($("#topMenu li a[class='active']").html());
	
	var leftMenuHtml = '';
	
	if(data != null && data.length > 0){
		
		for(var i = 0;i < data.length;i++){
			
			// 有子菜单
			if(data[i].functionUrl == null || $.trim(data[i].functionUrl) == ""){
				leftMenuHtml += getSingleMenuHtml(data[i],true);
			}else{ // 没有子菜单
				leftMenuHtml += getSingleMenuHtml(data[i],false);
			}
			
		}
	}
	
	$('#sidebar-menu').html(leftMenuHtml);
	
	menuClick("welcome.do","");
}

/**
 * 获取单个菜单html片段
 * @param menu 当前菜单[有关数据]
 * @param isHasChilds 该菜单下是否有子菜单
 */
function getSingleMenuHtml(menu,isHasChilds){
	
	// 有子菜单则设置'data-toggle="collapse"',没有的时候设置点击事件 // onclick="toggleIcon(this)"
	var aEle = ( isHasChilds ? '<a href="#'+menu.functionId+'" data-toggle="collapse" onclick="doLevel2MenuClick(this)"' : '<a href="javascript:;" onclick="menuClick(\''+menu.functionUrl+'\',\''+menu.functionName+'\');"' ) + ' style="padding-left: 22px;" >';
	// 控制菜单右部图标的显示
	var rightIcon = isHasChilds ? '<i class="icon-angle-right put-right">&nbsp;&nbsp;&nbsp;&nbsp;</i>' : ' ';
	// 有子菜单 则拼接子菜单
	var childMenus = (isHasChilds &&  menu.sysFunctions.length > 0) ?
				'<ul id="'+menu.functionId+'" class="menu-item collapse">' +
					appendChildMenu(menu.functionName, menu.sysFunctions) +
				'</ul>' : '';
					// <i class="fa fa-user-o" aria-hidden="true"></i>
					
	var menuHtml =
	'<li>'+
		aEle+
		    '<i class="fa fa-user-o"></i>' +
			'<span>'+menu.functionName+'</span>' +
			rightIcon +
		'</a>' +
		childMenus +
	'</li>';

	return menuHtml;
}
// 上一次点击的二级菜单
var preClickAObj = null;

/**
 * 二级菜单点击事件
 * @param obj 二级菜单
 */
function doLevel2MenuClick(obj){
	// 右部图标改变
	toggleIcon(obj);
	// 关闭已展开的二级菜单
	closePreMenu(obj);
}
/**
 * 切换图标[动画图片旋转90°]
 * @param obj a标签对象
 */
function toggleIcon(obj){
	
	if($(obj).children(".put-right").hasClass('icon-rotate')){
		$(obj).children(".put-right").removeClass('icon-rotate');
		return;
	}
	$(obj).children(".put-right").addClass('icon-rotate');
	
	closePreMenu(obj);
}

/**
 * 关闭上一个打开的二级菜单
 * @param obj
 */
function closePreMenu(obj){
	
	if(preClickAObj != obj){
		$(preClickAObj).trigger('click');
	}
	preClickAObj = obj;
}
/**
 * 拼接子菜单，返回拼接的字符串
 * @param parentMenuName 父菜单名称
 * @param childMenus 子菜单集合
 * @returns {String} 拼接的字符串
 */
function appendChildMenu(parentMenuName,childMenus){
	
	if(childMenus == null || childMenus.length <= 0){
		return '';
	}
	var childMenuHtml = '';
	
	for(var i = 0; i < childMenus.length; i++){
		var params = "?level1MenuName="+$("#topMenu li a[class='active']").html()+"&level2MenuName="+parentMenuName+"&level3MenuName="+childMenus[i].functionName;
		childMenuHtml += '<li><a href="javascript:;" onclick="menuClick(\''+childMenus[i].functionUrl+params+'\')">'+childMenus[i].functionName+'</a></li>';
	}
	
	return childMenuHtml;
}

/**
 * 菜单点击
 * @param url 菜单url
 */
function menuClick(url,menuName){
	$("#mainIframe").attr('src',url);
}
/**
 * 顶部菜单展示
 * @param data 与展示菜单有关的数据
 */
function showTopMenu(data){
	
	var topMenuHtml = '';
	for(var i = 0;i < data.length;i++){
		topMenuHtml += '<li><a href="javascript:;" functionId="'+data[i].functionId+'">'+data[i].functionName+'</a></li>';
	}
	
	// 菜单展示
	$("#topMenu").html(topMenuHtml);
	
	$("#topMenu li a").eq(0).addClass('active');
	
	// 给顶部菜单注册点击事件
	$("#topMenu > li > a").on('click',function(){
		showMenu(this,'left');
	})

}

