
function todayFormat2() {
	var dates = new Array();
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	month = month < 10 ? ("0" + month) : month;
	var dt = d.getDate();
	dt = dt < 10 ? ("0" + dt) : dt;
	dates[0] = year + month + dt;
	return  year + month + dt;//dates[0];
}

function showDetail(Obj){
	
    $('#refresh_img').css({'display': 'inline'});
	var currentUrl = window.location.href;
	var str = currentUrl.substr(1);
	id_str = str.split("?")[1].split("=")[1];
//	alert("detail.js="+"====="+id_str);

	if(Obj==0){
		var id = id_str;
	}
 	$.ajax({
		type : "post",
		url : "ShowDetailAlarm.action",
		data : {
			id : id
		},
		dataType : "json",
		success : function(data) {
			var d = data.result;
			if(d.ip==null){
				d.ip="";
			}
			text = "<a href='../alarm/alarm_event.jsp?ip="+ 
			d.ip+"&event_chname="+d.event_chname+"&event_type="+d.event_type+"&startsj="+d.optime+"&endsj="+d.time+"'class=''>查看详细事件</a>";
			$('#time').text(d.time);
			$('#alarm_type').text(d.event_type);
			$('#ip').text(d.ip);
			$('#mac').text(d.mac);
			$('#event_source').text(d.event_source);
			$('#event_level').text(d.event_level);
			$('#event_cnname').text(d.event_chname);
			$('#event_enname').text(d.event_enname);
			$('#warning_method').text(d.warning_method);
			$('#num').text(d.num);
			$('#event_summary').text(d.event_summary);
			$('#event_detail').text(d.event_detail);
			$('#dev_id').text(d.dev_id);
			$('#dev_name').text(d.dev_name);
			$('#relation_ip').text(d.relation_ip);
			$('#relation_mac').text(d.relation_mac);
			$('#relation_dev_id').text(d.relation_dev_id);
			$('#relation_dev_name').text(d.relation_dev_name);
			$('#protocol').text(d.protocol);
			$('#data').html(text);
			$('#clear').text(d.clear);
			
		},
		error : function() {
			alert("没有查询到数据");
		}
	}); 
}


function backReferrer(){
	var theRequest = new Object();
	var pre = document.referrer;
	var link;
   
	if(pre.indexOf("search.jsp")!=-1){
		if(pre.lastIndexOf("?")!=-1){
	  	  pre = pre.substring(0, pre.lastIndexOf("?"));
	    }
		var currentUrl = window.location.href;
		var str = currentUrl.substr(1);
	    strs = str.split("&");
	    for(var i = 0; i < strs.length; i ++) {
	       theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
	    }
	    if(theRequest['dst_ip']==null){
	    	theRequest['dst_ip']="";
	    }
	   
	    $("#returnPre").attr("name",link);	
	    $("#returnPre").attr("href",link);	
	}  
}

function reback(){
	window.history.go(-1);
}

$(function() {
	
	showDetail(0);
});