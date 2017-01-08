function init(){
	/*$("select[name=spread]").val(0);*/
		
	$("input[name=userId]").val("");
	$("input[name=userId]").removeAttr("disabled");
	$("input[name=userName]").val("");
	$("input[name=userName]").removeAttr("disabled");
	$("input[name=realName]").val("");
	$("input[name=realName]").removeAttr("disabled");
	$("input[name=userTelephone]").val("");
	$("input[name=userTelephone]").removeAttr("disabled");
	$("input[name=userMobile]").val("");
	$("input[name=userMobile]").removeAttr("disabled");
	$("input[name=userEmail]").val("");
	$("input[name=userEmail]").removeAttr("disabled");
	$("textarea[name=userDesc]").val("");
	$("textarea[name=userDesc]").removeAttr("disabled");
	$("textarea[name=userRemark]").val("");
	$("textarea[name=userRemark]").removeAttr("disabled");
	$("select[name=userGroup]").val(0);
	$("select[name=userId]").removeAttr("disabled");
}

/*根据条件查询数据*/
function start_search(currentPage) {
	var beginIndex = (currentPage - 1) * PAGE_SIZE;
	var beginNumber = (currentPage - 1) * PAGE_SIZE + 1;
	var endNumber = beginNumber + PAGE_SIZE - 1;

	$("#begin_number").html(beginNumber);
	$("#end_number").html(endNumber);
	
	$.ajax({
		type : "POST",
		url : "./getList.do",
		data : {
			start : beginIndex,
			length : PAGE_SIZE
		},
		dataType : "json",
		success : function(result) {
			var data = result.data;
			var totalCount = result.recordsTotal;
			
			var html = "";
			for(var i = 0; i < data.length; i++) {
				html += "<tr userId='" + data[i].userId + "' userName='" + data[i].userName + "' userStatus='" + data[i].userStatus + "' realName='" + data[i].realName + "' userTelephone='" + data[i].userTelephone + "' userMobile='" + data[i].userMobile + "' userEmail='" + data[i].userEmail + "' userDesc='" + data[i].userDesc + "' userRemark='" + data[i].userRemark + "' ondblclick='dbclick(this)'>"
					  + "<td>" + (i + 1) + "</td>" 
					  + "<td>" + data[i].userName + "</td>"
					  + "<td>" + data[i].realName + "</td>"
					  + "<td>" + data[i].userMobile + "</td>"
					  + "<td>" + data[i].userEmail + "</td>"
					  + "</tr>";
						
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

function btnInsert(){
	init();
	$("#userModalLabel").html("添加");
	document.getElementById("save").removeAttribute("style");
	document.getElementById("save").setAttribute("onclick", "userAdd();");
	$('#userModal').modal('show');
}

function userAdd(){
	userName=$("input[name=userName]").val();
	realName=$("input[name=realName]").val();	
	userTelephone=$("input[name=userTelephone]").val();
	userMobile=$("input[name=userMobile]").val();
	userEmail=$("input[name=userEmail]").val();
	userDesc=$("textarea[name=userDesc]").val();
	userRemark=$("textarea[name=userRemark]").val();
	userGroup=$("select[name=userGroup]").val();
	
	$.ajax({
		type : "post",
		url : "insert.action",
		async:false,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		data : {
			"sysUser.userName":userName,
			"sysUser.realName":realName,
			"sysUser.userTelephone":userTelephone,
			"sysUser.userMobile":userMobile,
			"sysUser.userEmail":userEmail,
			"sysUser.userDesc":userDesc,
			"sysUser.userRemark":userRemark
		    },
		success:function(msg)
		{
			if(msg.code == 1) {
				alert("添加成功!");
				$('#userModal').modal('hide');
				start_search(1);
			}
			else {
				alert(msg.msg+"\n添加失败，请重新操作!");
			}
		}
	});
}

function getLastSelectedRowData(){
	var sid=$('.success');
	var lastSelected=0;
    for(var i=0;i<sid.length;i++){
    	if(sid[i].getAttribute('data-num')>sid[lastSelected].getAttribute('data-num')){
    		lastSelected=i;
    	}
    }
    return sid[lastSelected];
}

function btnUpdate(){
	start_search(1);
	var rowData = getLastSelectedRowData();
	if($('.success').length==0){
		alert('请选择数据项');
	}else{
		$("#userModalLabel").html("修改");
		document.getElementById("save").removeAttribute("style");
		document.getElementById("save").setAttribute("onclick", "userEdit();");
		init();
		$('#userModal').modal('show');			
								
		$("input[name=userId]").val(rowData.getAttribute('userId'));
		$("input[name=userName]").val(rowData.getAttribute('userName'));
		$("input[name=realName]").val(rowData.getAttribute('realName'));
		$("input[name=userTelephone]").val(rowData.getAttribute('userTelephone'));
		$("input[name=userMobile]").val(rowData.getAttribute('userMobile'));
		$("input[name=userEmail]").val(rowData.getAttribute('userEmail'));
		$("textarea[name=userDesc]").val(rowData.getAttribute('userDesc'));
		$("textarea[name=userRemark]").val(rowData.getAttribute('userRemark'));
		$("input[name=userName]").attr("readOnly","true");
	}

}

function userEdit(){
	userId=$("input[name=userId]").val();
	userName=$("input[name=userName]").val();
	realName=$("input[name=realName]").val();	
	userTelephone=$("input[name=userTelephone]").val();
	userMobile=$("input[name=userMobile]").val();
	userEmail=$("input[name=userEmail]").val();
	userDesc=$("textarea[name=userDesc]").val();
	userRemark=$("textarea[name=userRemark]").val();

	$("#userName").removeAttr("readOnly");
	$.ajax({
		type:"post",
		url:"update.action",
		async:false,
		contentType:"application/x-www-form-urlencoded; charset=UTF-8",
		data:{
			"sysUser.userId":userId,
			"sysUser.userName":userName,
			"sysUser.realName":realName,
			"sysUser.userTelephone":userTelephone,
			"sysUser.userMobile":userMobile,
			"sysUser.userEmail":userEmail,
			"sysUser.userDesc":userDesc,
			"sysUser.userRemark":userRemark
		},
		success:function(msg)
		{
			if(msg.code == 1) {
				alert("修改成功!");
				$('#userModal').modal('hide');
				start_search(1);
			}
			else {
				alert("修改失败，请重新操作!");
			}
		}
	});
}

var failNum=0;
function failCount(){
	failNum++;
}

function btnDelete(){
	start_search(1);
	var rowData = $('.success');
	if(rowData.length==0){
		alert('请选择数据项');		
	}
	else{
		var r=confirm("确认删除？"); 
		if (r==true) {		
			for(var i=0;i<rowData.length;i++){
				userDelete(rowData[i].getAttribute('userId'),rowData[i].getAttribute('userName'));
			}
			if(failNum==0){
				alert("删除成功");
			}else {
				var num = rowData.length-failNum;
				alert("删除成功"+num+"个,失败"+failNum+"个");
			}			
			failNum=0;
			start_search(1);
		}
	}
}

function userDelete(userId,userName){
	$.ajax({
		type:"post",
		url:"delete.action",
		async:false,
		contentType:"application/x-www-form-urlencoded; charset=UTF-8",
		data:{
			userId:userId,
			userName:userName
			
		},
		success:function(msg)
		{   			
			if(msg.code != 1) {
				failCount();
			}									
		}
	});
	start_search(1);	
}

function btnResetPassword(){
	var rowData = $('.success');
	if(rowData.length==0){
		alert('请选择数据项');		
	}
	else{
		var r=confirm("确认重置密码？"); 
		if (r==true) {		
			for(var i=0;i<rowData.length;i++){
				userResetPassword(rowData[i].getAttribute('userId'));
			}
			if(failNum==0){
				alert("重置成功");
			}else {
				var num = rowData.length-failNum;
				alert("重置成功"+num+"个,失败"+failNum+"个");
			}			
			failNum=0;
		}
	}
}

function btnLock(){
	start_search(1);
	var rowData = getLastSelectedRowData();
	if($('.success').length==0){
		alert('请选择数据项');
	}else{
		var r=confirm("确认锁定/解锁？"); 
		if (r==true) {				
			if (rowData.getAttribute('userStatus')==1) {															
				userStatusChange(rowData.getAttribute('userId'),0);
			}else{
				userStatusChange(rowData.getAttribute('userId'),1);
			}											
		}
	}

}

function userStatusChange(userId,userStatus){
	$.ajax({
		type:"post",
		url:"update.action",
		async:false,
		contentType:"application/x-www-form-urlencoded; charset=UTF-8",
		data:{
			"sysUser.userId":userId,
			"sysUser.userStatus":userStatus
		},
		success:function(msg)
		{
			if(msg.code == 1) {
				alert("修改成功!");
				start_search(1);
			}
			else {
				alert("修改失败，请重新操作!");
			}
		}
	});
}

function userResetPassword(userId){
	$.ajax({
		type:"post",
		url:"resetPassword.action",
		async:false,
		contentType:"application/x-www-form-urlencoded; charset=UTF-8",
		data:{
			"sysUser.userId":userId
		},
		success:function(msg)
		{   			
			if(msg.code != 1) {
				failCount();
			}									
		}
	});
	start_search(1);	
}

//用户组配置按钮
function btnUserGroup() { 
	var rowData = getLastSelectedRowData();
	if($('.success').length == 0) {
		alert("请先点击选择待配置用户组的数据项!");
	}
	else {
		var userId = rowData.getAttribute('userId');
		var userName = rowData.getAttribute('userName');
		
		$("#selectedList").html("");
		$("#allList").html("");
    	
		$.ajax({
			type: "POST",
			url: "../sysGroup/selectListByUserId",
			data: {
				"userId" : userId
			},
			success: function(msg){
				for(var i = 0; i < msg.data.length; i++) {
					if(msg.data[i].groupRemark != null) {
						$("#selectedList").append("<option value='" + msg.data[i].groupId + "'>" + msg.data[i].groupName + "</option>");
					}
					else {
						$("#allList").append("<option value='" + msg.data[i].groupId + "'>" + msg.data[i].groupName + "</option>");
					}
				}
			}
		});
		
		//弹出框的保存按钮
		$("#btnSaveGroup").unbind();	//先取消原有的绑定
	    $("#btnSaveGroup").click( function () {
	    	var groupList = new Array();
	    	var groupNameList = new Array();
	    	$("#selectedList option").each(function(){
	            groupList.push($(this).val());
	            groupNameList.push($(this).text());
	        });
	    	
	    	$.ajax({
				type: "POST",
				url: "./updateGroupUserByUserId",
				data: {
					userId : userId,
					userName:userName,
					groupList : groupList.join(";"),
					groupNameList : groupNameList.join(";"),
				},
				success: function(msg){
					if(msg.code == 1) {
						alert("用户角色配置成功!");
						$('#myModalGroup').modal('hide');
						dt.ajax.reload();
					}
					else {
						alert("用户角色配置失败，请重新操作!");
					}
				}
			});
	    } );
	    
	    $('#myModalGroup').modal('show');
	}          
} 

function btnDetail(){
	start_search(1);
	var rowData = getLastSelectedRowData();
	if($('.success').length==0){
		alert('请选择数据项');
	}else{
		document.getElementById("save").style.display="none";  
		$('#userModal').modal('show');			
		init();
		$("#userModalLabel").html("详情");
		
		$("input[name=userId]").val(rowData.getAttribute('userId'));
		$("input[name=userName]").val(rowData.getAttribute('userName'));
		$("input[name=userName]").attr("disabled","disabled");
		$("input[name=realName]").val(rowData.getAttribute('realName'));
		$("input[name=realName]").attr("disabled","disabled");
		$("input[name=userTelephone]").val(rowData.getAttribute('userTelephone'));
		$("input[name=userTelephone]").attr("disabled","disabled");
		$("input[name=userMobile]").val(rowData.getAttribute('userMobile'));
		$("input[name=userMobile]").attr("disabled","disabled");
		$("input[name=userEmail]").val(rowData.getAttribute('userEmail'));
		$("input[name=userEmail]").attr("disabled","disabled");
		$("textarea[name=userDesc]").val(rowData.getAttribute('userDesc'));
		$("textarea[name=userDesc]").attr("disabled","disabled");
		$("textarea[name=userRemark]").val(rowData.getAttribute('userRemark'));
		$("textarea[name=userRemark]").attr("disabled","disabled");
	}
}

function dbclick(rowData){
	start_search(1);
	document.getElementById("save").style.display="none";  
	$('#userModal').modal('show');			
	init();
	$("#userModalLabel").html("详情");
	
	$("input[name=userId]").val(rowData.getAttribute('userId'));
	$("input[name=userName]").val(rowData.getAttribute('userName'));
	$("input[name=userName]").attr("disabled","disabled");
	$("input[name=realName]").val(rowData.getAttribute('realName'));
	$("input[name=realName]").attr("disabled","disabled");
	$("input[name=userTelephone]").val(rowData.getAttribute('userTelephone'));
	$("input[name=userTelephone]").attr("disabled","disabled");
	$("input[name=userMobile]").val(rowData.getAttribute('userMobile'));
	$("input[name=userMobile]").attr("disabled","disabled");
	$("input[name=userEmail]").val(rowData.getAttribute('userEmail'));
	$("input[name=userEmail]").attr("disabled","disabled");
	$("textarea[name=userDesc]").val(rowData.getAttribute('userDesc'));
	$("textarea[name=userDesc]").attr("disabled","disabled");
	$("textarea[name=userRemark]").val(rowData.getAttribute('userRemark'));
	$("textarea[name=userRemark]").attr("disabled","disabled");
}

$(function() {
	start_search(1);
});