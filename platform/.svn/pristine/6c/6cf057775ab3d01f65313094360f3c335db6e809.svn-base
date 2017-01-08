/*根据条件查询数据*/
var serverId;
function getServerState(serverState) {
	if (serverState == 1) {
		return "正常";
	} else if (serverState == 0) {
		return "不正常";
	} 
}
function start_search(currentPage) {
	var beginIndex = (currentPage - 1) * PAGE_SIZE;
	var beginNumber = (currentPage - 1) * PAGE_SIZE + 1;
	var endNumber = beginNumber + PAGE_SIZE - 1;

	var searchValue=$("input[name=server_name]").val();
	var searchValue=$("input[name=server_ip]").val();
	$("#begin_number").html(beginNumber);
	$("#end_number").html(endNumber);
	serverName= $("input[name='serverName']").val();
	serverIP=$("input[name='serverIP']").val();
	$.ajax({
		type : "POST",
		url : "./selectList",
		data : {
			start : beginIndex,
			length : PAGE_SIZE,
			"serverName":serverName,
			"serverIP":serverIP
			
		},
		dataType : "json",
		success : function(result) {
			var data = result.data;
			var totalCount = result.recordsTotal;
			//alert(data.length);
			var html = "";
			for(var i = 0; i < data.length; i++) {
			//	alert(data[i].serverName);
				html += "<tr serverId='" + data[i].serverId + "' ondblclick='dbclick(this)'>"
					  + "<td>" + (i + 1) + "</td>" 
					  + "<td>" + data[i].serverName + "</td>"
					  +"<td>"+data[i].serverIp+"</td>"
					  +"<td>"+getServerState(data[i].serverState)+"</td>"
					  + "</tr>";
				//alert(1);
						
			}
			$("#search_tbody").html(html);
			
			$("#total_count").html(totalCount);
			var totalPage = Math.ceil(totalCount / PAGE_SIZE);
			if(totalPage == 0) {
				totalPage = 1;
			}
			var options = {
				bootstrapMajorVersion : PAGINATOR_BOOTSTRAP_VERSION,
				currentPage : currentPage,
				totalPages : totalPage,
				numberOfPages : PAGINATOR_NUMBER_OF_PAGE,
				onPageClicked : function(e, originalEvent, type, page) {
					start_search(page);
				}
			};

			$('#paginator').bootstrapPaginator(options);
		},
		error : function() {
			;
		}
	});
}
function getLastSelectedRowData() {
	var sid = $('.success');
	var lastSelected = 0;
	for (var i = 0; i < sid.length; i++) {
		if (sid[i].getAttribute('data-num') > sid[lastSelected]
				.getAttribute('data-num')) {
			lastSelected = i;
		}
	}
	return sid[lastSelected];
}
function init() {
	$("#serverName").val("");
	$("#serverIP").val("");
	$("#serverDetail").val("");

}

//保存修改
function serverEdit(id){
	var serverId=id;
	var serverName = $("#myServerName").val();
	var serverDetail = $("#myServerDetail").val();

	$.ajax({
		type : "POST",
		url : "./update",
		data : {
			// "groupId" : groupId,
			"serverId" : serverId,
			"serverName" : serverName,
			"serverDetail" : serverDetail,
		/*
		 * "createUser" : createUser, "createTime" : createTime, "updateUser" :
		 * updateUser, "updateTime" : updateTime
		 */
		},
		success : function(msg) {
			if (msg.code == 1) {
				alert("Update success!");
				$('#serverModal').modal('hide');
				start_search(1);
			} else {
				alert(msg.msg);
			}
		}
	});
}
//保存新增
function serverAdd(){
	
	serverName=$("input[name=serverName]").val();
	serverIP=$("input[name=serverIP]").val();	
	serverDetail=$("input[name=serverDetail]").val();
	$.ajax({
		type : "POST",
		url : "./insert",
		async:false,
		data : {
			// "groupId" : groupId,
			"serverName" : serverName,
			"serverIP" : serverIP,
			"serverDetail" : serverDetail,
		/*
		 * "createUser" : createUser, "createTime" : createTime, "updateUser" :
		 * updateUser, "updateTime" : updateTime
		 */
		},
		success : function(msg) {
			if (msg.code == 1) {
				alert("Insert success!");
				$('#serverModal').modal('hide');
				start_search(1);
			} else {
				alert(msg.msg);
			}
		}
	});
}
function serverDelete(Id){
	$.ajax({
		type:"post",
		url:"./delete",
		async:false,
		contentType:"application/x-www-form-urlencoded; charset=UTF-8",
		data:{serverId:Id},
		success : function(msg) {
			if (msg.code == 1) {
				alert("Delete success!");
				start_search(1);	
			} else {
				alert(msg.msg);
			}
		
	}});
	
	
}
function showWin2(flag){
	var f = flag;
	var num = $('.success');
	if(num.length==0){
		alert('请选择数据项');
	}else {changeCheckPass(f);
	$('#checkModal').modal({
		show:true
	});
		
		//changeCheckPass(f);
		//$('#checkModal').modal({
			//show:true
		//})
			
	}
}
function staticPage(){
	$.ajax({
		type:"post",
		url:"./publishPage",
		async:false,
		contentType:"application/x-www-form-urlencoded; charset=UTF-8",
		data:{},
		success:function(data)
		{
			alert(data.code);
		}
	});
}
$(function() {
	start_search(1);
	
	$('#add').click(function(){
		$("#myServerName").val("");
		$("#myServerIP").val("");
		$("#myServerDetail").val("");
		$("#myServerIP").removeAttr("readOnly");
		$("#serverDetail").removeAttr("readOnly");
		init();
			
		/*$("#serverModalLabel").html("新增服务器");*/
		$("#serverModalLabel").html("添加");
		$('#serverModal').modal('show');
		document.getElementById("save").removeAttribute("style");
		document.getElementById("save").setAttribute("onclick", "serverAdd();");
	});
	
	$('#modify').click(function(){
		var rowData = getLastSelectedRowData();
		$("#serverModalLabel").html("修改");
		if ($('.success').length == 0) {
			alert('请选择数据项');
		} else {
			serverId=rowData.getAttribute('serverid');
			$.ajax({
				type : "POST",
				url : "./detail",
				data : {
					// "groupId" : groupId,
					"serverId" : serverId,
				/*
				 * "createUser" : createUser, "createTime" : createTime, "updateUser" :
				 * updateUser, "updateTime" : updateTime
				 */
				},
				success : function(data) {
					$("#myServerName").val(data.data[0].serverName);	
					$("#myServerIP").val(data.data[0].serverIp);
					$("#myServerDetail").val(data.data[0].serverDetail);
					document.getElementById("save").setAttribute("onclick","serverEdit("+serverId+");");
					document.getElementById("myServerIP").setAttribute("readonly","readonly");
					$('#serverModal').modal('show');
					
					
					
					/*if (msg.code == 1) {
						init();
						$('#serverModal').modal('show');

						$("#serverModalLabel").html("修改服务器");

						//$("#serverName").val(rowData.getAttribute('groupName'));
						//$("#groupDesc").val(rowData.getAttribute('groupDesc'));
						//$("#groupRemark").val(rowData.getAttribute('groupRemark'));
						
						document.getElementById("save").setAttribute("onclick",
								"serverEdit();");
						
					} else {
						alert(msg.msg);
					}*/
				}
			});
		}
	});
	
	$('#delete').click(function(){
		var num = $('.success');
		if(num.length==0){
			alert('请选择数据项');
		}else {
			var r=confirm("你确认删除吗？"); 
			if (r==true){
				$('.success').each(function(){
					serverDelete($(this).attr('serverid'));
				});
				
			}
		}
	});
	
	$('#detail').click(function(){
		var rowData = getLastSelectedRowData();
		if ($('.success').length == 0) {
			alert('请选择数据项');
		} else {
			var id=rowData.getAttribute('serverid');
			//$('#myDetail').modal('show');
			//init();
			$.ajax({
				type:"get",
				url:"./detail",
				contentType:"application/x-www-form-urlencoded; charset=UTF-8",
				data:{
					serverId:id
				},
			
				success:function(data)
				{
					$("#myName").val(data.data[0].serverName);
					$("#myDetail").val(data.data[0].serverDetail);
					$("#myIP").val(data.data[0].serverIp);
					$("#myState").val(data.data[0].serverState);
					$("#breakTime").val(data.data[0].lastFaultTime);
					$('#detailModal').modal('show');
					/*var warning_method=data.warningMethod;
					var array = document.getElementsByName("warning_method");
					var warm=parseInt(warning_method) ;
					var index;
					for(var i=array.length-1;i>=0;i--){
						index=warm%10;
						if(index==1){
							array[i].checked=true;
						}else {
							array[i].checked=false;
						}
						warm=Math.floor(warm/10);
					}*/
				}
			});
		}
	});

});






