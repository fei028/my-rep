var PAGE_SIZE = 10;	/*列表页默认条数*/
var PAGINATOR_NUMBER_OF_PAGE = 5;	/*翻页栏中最多显示的页码数量*/
var PAGINATOR_BOOTSTRAP_VERSION = 3;	/*翻页栏对应的bootstrap版本*/
var LEFT_MENU_WIDTH = 180;	/*左侧菜单宽度*/

/*获取URL中的参数*/
(function($){  
    $.getUrlParam = function(name)  
    {  
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");  
        var r = window.location.search.substr(1).match(reg);  
        if (r!=null) return unescape(r[2]); return null;  
    };
})(jQuery); 

var FORUM_ID_CERT = {"101":"测试", "102":"测试2"};
/*for(var key in FORUM_ID) {
	alert(key)
}*/