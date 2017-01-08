/**
 * 重置
 */
function  resetButton(){
	sj_write();
	//Nocheck('dy_all2','dy2');//deviceType
//	$("input[name=srcIP]").attr("value","");
//  $("input[name=ip]").attr("value","");
    $("input[name='dev_name']").val("");
    $("input[name='event_chname']").val("");
   // $("input[name='event_id']").val("");
    $("select[name='dealState']").val("");
    $("select[name='alarm_level']").val("");
    
    
    startSearch(2);
}
/**
 * 時間初始化
 */
function sj_write_mongo() {
	var startsj = document.getElementById("startsj");
	var endsj = document.getElementById("endsj");
	var arr_today = new Array();
	arr_today = todayFormat();		
    startsj.value = "1970-01-01 00:00:00";//arr_today[0]+ " 00:00:00";
    endsj.value = arr_today[0]+" "+arr_today[3]+":"+arr_today[4]+":"+arr_today[5];
	}

/**
 * 初始化检查
 */
function sj_check_mongo(){
	var startsj = document.getElementById("startsj");
	var endsj = document.getElementById("endsj");
	if(startsj.value==""){
		alert("请将自定义开始时间补全！");
		return 0;
	}
	if(endsj.value==""){
		alert("请将自定义开始时间补全!");
		return 0;
	}
	return 1;
}

function startSearch(indicator) {
	if( sj_check_mongo()==1){
		$('#totalPage').css({'display': 'none'});
		$('#refresh_img').css({'display': 'inline'});
//		var src_ip, dst_ip, protocol_al, optime;
		var IP,optime;
		
		if (indicator != 1 && indicator!=3) {
			$('#page-changed-text').attr("name", 1);
			$('#page-changed-text').attr("style","text-align:center;width:45px; margin-top:3px;");
			$('#display2').text("页");
		}
		//alert($("input[name='startsj']").val());
		
		devName = $("input[name='dev_name']").val();
		eventChname = $("input[name='event_chname']").val();
		startsj = $("input[name='startsj']").val();
		endsj = $("input[name='endsj']").val();
		flag = $("select[name='dealState']").val();
		alarm_level = $("select[name='alarm_level']").val();
		$.ajax({
			type : "post",
			url : "getAlarm.action",
			data : {
				alarm_type : $('#type').val(),
				dev_name: devName,
				event_chname : eventChname,
				alarm_level : alarm_level,
				startsj : startsj,
				endsj : endsj,
				flag:flag,
				currentPageNo : $('#page-changed-text').attr("name"),
				pageSize : $('#page-changed-text').attr("title2")
			},
			dataType : "json",
			success : function(d) {
				//alert(d.totalItem);
				var totalPage = d.totalPageNo;
				var totalItem = d.totalItem;
				var currentPageNo = d.currentPageNo;
				var pageSize = d.pageSize;
		     	$('#totalPage').css({'display': 'inline'});
				$('#totalPage').text("共" + totalItem + "条/" + totalPage + " 页");

				if(totalItem==0){
					pageChangedEvent(1, 1);
					html="";
					totalItem=0;
					totalPage=1;
				}
					pageChangedEvent(totalPage, currentPageNo);
					pageAdd();
					var data = d.showdata;
					var html = "";
				
					for (var i = 0; i < data.length; i++) {
						var j = (currentPageNo - 1) * pageSize + i + 1;
						if(data[i].flag==1){
							html += "<tr class='' id='"+data[i]._id+"' ondblclick='dbclick(this)' ><td style=''>" + j + "</td>" +
								"<td style=''> " + data[i].dev_name + "</td>" +
								"<td style=''> " + data[i].relation_dev_name + "</td>" +
								"<td style=''> " + data[i].event_chname + "</td>" +
								"<td style=''> " + data[i].event_level + "</td>" +
								"<td style=''> " + data[i].num + "</td>" +
								"<td><span class='label label-info'>已发送</span></td>" +
								//"<td><a href='#checkPassModal' role='button' class='btn btn-mini btn-primary' data-toggle='modal' onclick=changeCheckPass('"+data[i]._id+"')>"+"处理"+"</a></td>"+
								//"<td><a href='#checkModal' role='button' class='btn btn-mini btn-primary' data-toggle='modal' onclick=changeCheckPass('"+data[i]._id+"',1)>处理"+
								"<td style=''>" + data[i].optime  + 
								//"</td><td><a href='#checkModal' role='button' class='btn btn-mini btn-primary' data-toggle='modal' onclick=changeCheckPass('"+data[i]._id+"',2)>删除"+
								//"</td><td><a href='#' role='button' class='btn btn-mini btn-primary'  onclick=confirmDelete('"+data[i]._id+"')>删除"+
								"</td></tr>";
						}else if(data[i].flag==0){
							html += "<tr class='' id='"+data[i]._id+"' ondblclick='dbclick(this)' ><td style=''>" + j + "</td>" +
								"<td style=''> " + data[i].dev_name + "</td>" +
								"<td style=''> " + data[i].relation_dev_name + "</td>" +
								"<td style=''> " + data[i].event_chname + "</td>" +
								"<td style=''> " + data[i].event_level + "</td>" +
								"<td style=''> " + data[i].num + "</td>" +
								"<td><span class='label label-danger'>未处理</span></td>" +
								//"<td><div role='button' id='action' class='btn btn-mini btn-primary' disabled='true'>"+"处理"+"</div></td>"+
								"<td style=''> " + data[i].optime  + 
								//"</td><td><a href='#checkModal' role='button' class='btn btn-mini btn-primary' data-toggle='modal' onclick=changeCheckPass('"+data[i]._id+"',2)>删除"+
								//"</td><td><a href='#' role='button' class='btn btn-mini btn-primary'  onclick=confirmDelete('"+data[i]._id+"')>删除"+
								"</td></tr>";
						}else{
							html += "<tr class='' id='"+data[i]._id+"' ondblclick='dbclick(this)' ><td style=''>" + j + "</td>" +
							"<td style=''> " + data[i].dev_name + "</td>" +
							"<td style=''> " + data[i].relation_dev_name + "</td>" +
							"<td style=''> " + data[i].event_chname + "</td>" +
							"<td style=''> " + data[i].event_level + "</td>" +
							"<td style=''> " + data[i].num + "</td>" +
							"<td><span class='label label-success'>已处理</span></td>" +
							"<td style=''> " + data[i].optime  + 
							//"</td><td><a href='#checkModal' role='button' class='btn btn-mini btn-primary' data-toggle='modal' onclick=changeCheckPass('"+data[i]._id+"',2)>删除"+
							//"</td><td><a href='#' role='button' class='btn btn-mini btn-primary'  onclick=confirmDelete('"+data[i]._id+"')>删除"+
							"</td></tr>";
						}
					}
					
				
				$("#searche_tbody").html(html);
				$('#refresh_img').css({'display': 'none'});
				
			},
			error : function() {
			//	setTimeout(startSearch(indicator), 1000);
			}
		});
	 }
}
function changeCheckPass(event){
	document.getElementById("checkpass").setAttribute("onclick", "checkPassword("+event+")");
}
function checkPassword(event)
{
	pwd = $("input[name=password]").val();
	$.ajax({
		dataType:'json',
 	    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
 	    async:false,
		type: "get",
		data:{pwd:pwd},
		url: "checkPass.action",
		success:function(data){
			if(data=="true"){
				$('#checkModal').modal('hide');
				$("input[name=password]").val('');

				if(event==1)handlerData();
				else if(event==2)deleteData();
			}else{
				alert("密码错误，操作无法完成");
				$('#checkModal').modal('hide');
				$("input[name=password]").val('');
			}
		},
		error:function(data){
			
		}
	});
	
}
function LockScreen(){
	
}
function deal(id){
	
	
	$.ajax({
		type : "post",
		url : "updateFlag.action",
		data : {
			id:id
		},
		dataType : "json",
		success : function(data) {
			startSearch(0);
		},
		error : function() {
		}
	});
}
/*function confirmDelete(id)  
{  
	var r=confirm("确认删除此告警？"); 
		if (r==true)  
	    {  
			AlarmDelete(id);
	    } 
}*/
var countNum=0;
function countNum(){
	countNum++;
}

function AlarmDelete(id){
	$.ajax({
		type:"post",
		url:"alarmDelete.action",
		async:false,
		contentType:"application/x-www-form-urlencoded; charset=UTF-8",
		data:{id:id},
		success:function(data)
		{
			
			if(data=="删除失败"){
				countNum();
			}	
		}
		});
	startSearch(0);
}
//保存按钮，实现插入功能
function saveSelectCondition(obj) {
	var name_length=0 ,fastQuery ,length=0;
	var name ="";
	if(obj == "0"){
	     name = prompt("请您命名常用查询的名字(2至25字)", "");
	}else{
		 name = prompt("请您命名常用查询的名字(2至25字)", obj);
	}
	
	if(name!=null && name!=""){
	    name_length = name.length;
	    fastQuery = document.getElementsByName("fastQuery");//.length;
		length = fastQuery.length;
	}
	
	if (name_length < 2 || name_length >25) {
		if(name==null || name=="null"){
			return 0;
		}
		alert("请输入指定字节数");
		saveSelectCondition(name);
	
	} else if (length > 4) {
		alert("常用查询数目不能超过五个，可删除一个！");
	} else {
		for (var i = 0; i < length; i++) {
			var testName = fastQuery[i].innerHTML;
			if (testName == name) {
				if(name==null || name=="null"){
					return 0;
				}
				alert("常用查询名字重复，请更换！");
				saveSelectCondition(name);
				return;
			}
		}
		var fastQueryID = length + 1;
		
		$.ajax({
			type : "post",
			url : "unisearchSaveWarnNetAlarm.action",
			data : {
				userId :$('#userAttribute').attr('class'),
				alarm_type : "6",
				dev_name : $("input[name='dev_name']").val(),
				event_chname : $("input[name='event_chname']").val(),
				alarm_level : $("select[name='alarm_level']").val(),
				flag : $("select[name='dealState']").val(),
				startsj : $("input[name='startsj']").val(),
				endsj : $("input[name='endsj']").val(),
				fastQueryName : name,
				page_name : page_name,
				fastQueryID : fastQueryID
			},
			dataType : "json",
			success : function(data) {
				var d = eval("(" + data + ")");
				if (d.flag==true) {
					
					$('#hisQuery').append('<div class="btn-group" style="margin-right: 20px;">'
		                      + '<button name="fastQuery" type="button" class="btn btn-default" onclick="selectAndShow(this)">' + name + '</button>'
		                      + '<button type="button" class="btn btn-default" onclick="delFastQuery(this)" title="删除">'
		                      + '<i class="fa fa-fw fa-times"></i>'
		                      + '</button></div>');
					
					alert("加入常用查询成功！");
				} else {
					alert("加入常用查询异常，请联系管理员");
				}
			},
			error : function() {
				//setTimeout(savaSelectCondition(obj), 1000);
			}
		});
	}
}

//删除快捷方式
function delFastQuery(obj) {
	if(confirm("是否删除该常用查询条件?") == true){
		var fastQueryName = $(obj).parent().find('button').html();
		$(obj).parent().remove();
		$.ajax({
			type : "post",
			url : "unisearchDelQueryFastWarnNetAlarm.action",
			data : {
				fastQueryName : fastQueryName,
				page_name : page_name,
				userId : $('#userAttribute').attr('class')
			},
			dataType : "json",
			success : function(data) {
				var d = eval("(" + data + ")");
				if (d[0] == false) {
					alert("系统异常，请联系管理员del！");
				} else {
					alert("成功删除！");
				}
			},
			error : function() {
//				setTimeout(delFastQuery(obj), 1000);
			}
		});
  }
}

//点击快捷查询，在查询结果显示区域显示出相应查询条件的结果
function selectAndShow(obj) {
	var fastQueryName = obj.innerHTML;
	$.ajax({
		type : "post",
		url : "unisearchShowQueryFastWarnNetAlarm.action",
		data : {
			fastQueryName : fastQueryName,
			page_name : page_name,
			userId : $('#userAttribute').attr('class')
		},
		dataType : "json",
		success : function(data) {
			var d = eval("(" + data + ")");
			if (d[0] == "" || d[0] == null || d[0].condition == "") {
			} else {
				var condition = JSON.parse(d[0]["condition"]);
				startsj=condition["startsj"];
				endsj = condition['endsj'];
				dev_name = condition['dev_name'];
				event_chname = condition['event_chname'];
				flag = condition['flag'];
				event_level = condition['event_level'];
/*				$("input[name='dev_name']").attr("value",dev_name);
			    $("input[name='event_chname']").attr("value",event_chname);
			    $("select[name='alarm_level']").attr("value",event_level);
			    $("select[name='dealState']").attr("value",flag);*/
				$("input[name='dev_name']").val(dev_name);
			    $("input[name='event_chname']").val(event_chname);
			    $("select[name='alarm_level']").val(event_level);
			    $("select[name='dealState']").val(flag);
				//$("input[name='startsj']").attr("value",startsj);
			    $("input[name='startsj']").val(startsj);
				//$("input[name='endsj']").attr("value",endsj);				
			    $("input[name='endsj']").val(endsj);
			}
                //alert($("input[name='startsj']").val());
			    startSearch(2);
		},
		error : function() {
//			setTimeout(selectAndShow(obj), 1000);
		}
	});
}


$(function(){
	//分页自适应
	var num = parseInt((window.screen.height - 170) / 45);
	if(num % 5 != 0){
		num = num - num % 5 ;
	}
	num = (num<5)? 5 : num;
	$('#page-changed-text').attr("title2",num);
});



$('#detail').click(function(){
	var num = $('.success');
	if(num.length==0){
		alert('请选择数据项');
	/*}else if(num.length>1){
		alert('请选择一项');*/
	}else{
//		var sid=$('.success');
//		var j=0;
//        for(var i=0;i<sid.length;i++){
//        	//alert(sid[i]);
//        	if(sid[i].getAttribute('data-num')>sid[j].getAttribute('data-num')){
//        		j=i;
//        	}
//        }
		var id = getSort();
		var href= '../alarm/detailAlarm.jsp?_id='+id;
		window.location.href=href;
	}
	
});

function deleteData(){
	var r=confirm("确认删除此告警？"); 
	if (r==true) {
		
		var num = $('.success');
		if(num.length==0){
			alert('请选择数据项');
		}else {		
			for(var i=0;i<num.length;i++){
				AlarmDelete(num[i]['id']);
			}
			if(countNum==0){
				alert("删除成功");
			}else {
				var num = num.length-countNum;
				var str = "删除成功"+num+"个,失败"+countNum+"个";
				alert(str);
			}
			
			countNum=0;
			
		}
	}
}

function handlerData(){
		$(".success").each(function(){
			if($(this).find("span").attr('class')=="label label-info"){
				deal($(this).attr('id'));
			}
		});
		
}

function showWin(flag){
	var f = flag
	var num = $('.success');
	if(num.length==0){
		alert('请选择数据项');
	}else {
		
		changeCheckPass(f);
		$('#checkModal').modal({
			show:true
		})
			
	}
}

function dbclick(obj){

		var sid=obj.id;
		var href= '../alarm/detailAlarm.jsp?_id='+sid;
		window.location.href=href;

}

$(function() {
	sj_write();
	startSearch(0);
});

