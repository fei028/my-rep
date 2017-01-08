var roleId;
var selectId = new Array();

function start_search(currentPage) {

	var beginIndex = (currentPage - 1) * PAGE_SIZE;
	var beginNumber = (currentPage - 1) * PAGE_SIZE + 1;
	var endNumber = beginNumber + PAGE_SIZE - 1;
	
	var searchValue=$("input[name=role_name]").val();

	$("#begin_number").html(beginNumber);
	$("#end_number").html(endNumber);

	$.ajax({
		type : "POST",
		url : "./selectList",
		data : {
			"searchValue":searchValue,
			start : beginIndex,
			length : PAGE_SIZE
		},
		dataType : "json",
		success : function(result) {
			var data = result.data;
			var totalCount = result.recordsTotal;
			
			var html = "";
			for (var i = 0; i < data.length; i++) {
				html += "<tr roleId='" + data[i].roleId + "' "
				+ "roleName='" + data[i].roleName + "' " + "' "
				+ "roleDesc='" + data[i].roleDesc + "' " + "' "
				+ "roleRemark='" + data[i].roleRemark + "' "
				+ "ondblclick='dbclick(this)'>" + "<td>" + (i + 1)
				+ "</td>" + "<td>" + data[i].roleName + "</td>"
				+ "<td>" + data[i].roleDesc + "</td>";

			}
			$("#search_tbody").html(html);

			$("#total_count").html(totalCount);
			var totalPage = Math.ceil(totalCount / PAGE_SIZE);
			if (totalPage == 0) {
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

function initCheckbox()
{
	$.ajax({
		type : "get",
		url : "../sysFunction/selectList",
		dataType : "json",
		data : {
			
			start : "0",
			length : "100"
		},
		success : function(data) {
		    //var html = "";
			var authorities = data.data;		
			//html = dispalyCheckbox(authorities.length,authorities,2,"authority_desc","页面权限");
			//$("#authoritiesControls").html(html);
			var setting = {
					check: {
						enable: true
					},
					data: {
						simpleData: {
							enable: true,
							idKey: "functionId",
							pIdKey: "parentId",
							rootPId: 0
						},
						key: {
							name: "functionName",
						}
					}
				};

				var zNodes =authorities;
				
				$.fn.zTree.init($("#treeDemo"), setting, zNodes);
				setCheck();
				$("#py").bind("change", setCheck);
				$("#sy").bind("change", setCheck);
				$("#pn").bind("change", setCheck);
				$("#sn").bind("change", setCheck);
		},	
		error : function() {
			;
		}
	});
}

function check(array)
{
//	var items = document.getElementsByName(id);
//	for(var i=0;i<items.length;i++)
//	{
//		for(var j=0;j<array.length;j++)
//			if(array[j]==items[i].value)
//				items[i].checked=true;
//	}
	var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
	for(var i=0;i<array.length;i++){
		//alert(array[i]);
		var node = treeObj.getNodeByParam("functionId", array[i].functionId, null);//momingqimiao 
		treeObj.checkNode(node, true, false);
	}
}

function init()
{
	$("#roleName").val("");
	$("#roleDesc").val("");
	$("#roleRemark").val("");
	var roleRemark = $("#roleRemark").val();
/*	$("input[name=role_name]").val("");
	$("textarea[name=role_desc]").val("");*/
//	var array=document.getElementById("myModal").getElementsByTagName("span");
//	for(var i=0;i<array.length;i++)
//	{
//		if(array[i].type=="checkbox")
//		{
//			array[i].checked=false;
//		}
//	}
	var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
	treeObj.checkAllNodes(false);
	treeObj.expandAll(false);
}

function reset1() {
	$("input[name=role_name]").val("");
	start_search(1);
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

function checkvalue(obj){
	var treeObj = $.fn.zTree.getZTreeObj(obj);
	var nodes=treeObj.getCheckedNodes(true);
	var checked = "";
	//alert(nodes);
	for(var i=0;i<nodes.length;i++){
		checked += nodes[i].functionId + ",";
	}
	return checked;
}

function roleEdit(rowData) {
/*	roleName = document.getElementById("roleName").value;
	roleDesc = document.getElementById("roleDesc").value;
	roleRemark = document.getElementById("roleRemark").value;
	
	
	var authorityDesc = checkvalue("treeDemo");*/
	var roleName = $("#roleName").val();
	var roleDesc = $("#roleDesc").val();
	var roleRemark = $("#roleRemark").val();
	role_id = document.getElementById("save").getAttribute("role_id");
	
	authorityDesc = checkvalue("treeDemo");
	var flag = 0;
/*	var role_name,authority_desc,role_desc,role_id;
	role_name=$("input[name=role_name]").val();
	role_desc = $("textarea[name=role_desc]").val();
	var authority_desc = checkvalue("treeDemo");*/
	
	if(authorityDesc=="")
	{
		alert("请选择页面权限");
	}
	else
	{
		
		$.ajax({
			type : "post",
			url : "./update",
			/*async:false,*/
			/*contentType: "application/x-www-form-urlencoded *charset=UTF-8",*/
		data : {
			"roleId" : role_id,
			"roleName" : roleName,
			"roleDesc" : roleDesc,
			"roleRemark" : roleRemark,
		    "authorityDesc": authorityDesc
			},
			success : function(msg) {
				if (msg.code == 1) {
					alert("修改成功!");
					$('#groupModal').modal('hide');
					window.location.href = "../sysRole/open";
				} else {
					alert(msg.msg);
				}
			}
		});
/*		start_search(1);
		$('#myModal').modal('hide');*/
	}
}

function dispalyCheckbox(length,array,size,id,str)
{
	html="";
	for(var i=0;i<length;i++)
	{
		if(i%size==0)
		{
			if(i==0)
			{
				html+="<div class='control-group'><label class='control-label' for='inputPassword'>"+str+"</label><div class='controls' >";
			}
			else
				html+="<div class='control-group'><label class='control-label' for='inputPassword'></label><div class='controls' >";
		}
		html+="<label class='checkbox inline'><input type='checkbox'   value='"+array[i].string_oid+"' name='"+id+"' >"+array[i].name+"</label>";
      	if(i%size==(size-1))
      	{
      		html+="</div></div>";
      	}
	}
	return html;
}
//tree_menu
var code;

function setCheck() {
	var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
//	py = $("#py").attr("checked")? "p":"",
//	sy = $("#sy").attr("checked")? "s":"",
//	pn = $("#pn").attr("checked")? "p":"",
//	sn = $("#sn").attr("checked")? "s":"",
	type = { "Y":"ps", "N":"s"}; 
	zTree.setting.check.chkboxType = type;
	//showCode('setting.check.chkboxType = { "Y" : "' + type.Y + '", "N" : "' + type.N + '" };');
}

function roleAdd() {
	var roleName = $("#roleName").val();
	var roleDesc = $("#roleDesc").val();
	var roleRemark = $("#roleRemark").val();
	authorityDesc = checkvalue("treeDemo");

	var flag = 0;
	if(authorityDesc == "")
	{
		alert("请选择页面权限");
		flag = 1;
	}	
	else
	{
		$.ajax({
			type: "post",
			url: "./insert",
			async: false,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			data: {
				"roleName" : roleName,
				"roleDesc" : roleDesc,
		 	    "roleRemark" : roleRemark,
		 	   /*		role_name: role_name,
			    role_desc: role_desc,*/
			    "authorityDesc": authorityDesc
			},
			success : function(msg) {
				if (msg.code == 1) {
					alert("添加角色成功!");
					$('#groupModal').modal('hide');
					window.location.href = "../sysRole/open";
				} else {
					alert(msg.msg+"\n添加角色失败，请重试！");
				}
			}
/*			success: function(data)
			{
				if(data == "no")
				{
					flag = 1;
					alert("添加角色失败，请重试！");
				}	
			}
		});*/
		});
	}
}

function roleDelete() {

	var deleteRoleId = "";
	for (var i = 0; i < selectId.length - 1; i++) {
		deleteRoleId= deleteRoleId+ selectId[i].getAttribute('roleId')+ ","
	}
	deleteRoleId= deleteRoleId+ selectId[i].getAttribute('roleId');

	$.ajax({
		type : "POST",
		url : "./delete",
		data : {
			"deleteRoleId" : deleteRoleId
		},
		success : function(msg) {
			if (msg.code == 1) {
				alert("删除角色成功!");
				window.location.href = "../sysRole/open";
			} else {
				alert(msg.msg);
			}
		}
	});
}



$(function() {
	start_search(1);
	initCheckbox();
	$("#roleInsert").click(function() {
		$("#roleName").removeAttr("readOnly");
		$("#roleDesc").removeAttr("readOnly");
		$("#roleRemark").removeAttr("readOnly");
		
		init();
		$("#groupModalLabel").html("新增角色组");
		$('#groupModal').modal('show');
		document.getElementById("save").removeAttribute("style");
		document.getElementById("save").setAttribute("onclick", "roleAdd();");
	});

	$("#roleUpdate").click(
			function() {
				var rowData = getLastSelectedRowData();
				if ($('.success').length == 0) {
					alert('请选择数据项');
				} else {
					$("#roleName").removeAttr("readOnly");
					$("#roleDesc").removeAttr("readOnly");
					$("#roleRemark").removeAttr("readOnly");
/*					document.getElementById('#roleName').disabled = true;
					init();*/
					$(":input[id='roleName']").attr("readOnly","true");
					init();
					$("#groupModalLabel").html("修改用户组");
					$('#groupModal').modal('show');
					$("#roleName").val(rowData.getAttribute('roleName'));
					$("#roleDesc").val(rowData.getAttribute('roleDesc'));
					$("#roleRemark").val(rowData.getAttribute('roleRemark'));
				     role_id = rowData.getAttribute('roleId');
					/*alert(role_id);*/
					$.ajax({
						type:"post",
						url:"./roleFindById",
						contentType:"application/x-www-form-urlencoded; charset=UTF-8",
						data:{
							"role_id":role_id
							},
							
						success:function(data)
						{
	/*						alert(role_id);*/
							check(data.data);
							//alert(data.authority_desc[0]);
							
						}
					});
					document.getElementById("save").removeAttribute("style");
					roleId = rowData.getAttribute('roleId');
					document.getElementById("save").setAttribute("role_id",
							roleId);
					document.getElementById("save").setAttribute("onclick",
							"roleEdit();");
				}

			});

	$("#roleDelete").click(function() {
						selectId = $('.success');
						if (selectId.length == 0) {
							alert('请选择数据项');
						} else {
							var str = "确定删除角色：\n";

							for (var i = 0; i < selectId.length - 1; i++) {
								str = str + ' "'
										+ selectId[i].getAttribute('roleName')
										+ '" 、';
							}
							str = str + ' "'
									+ selectId[i].getAttribute('roleName')
									+ '"';

							var confirmMessage = confirm(str);
							if (confirmMessage == true) {
								roleDelete();
							}
						}

					});
/*	$("#resetButton").click(function() {
		$("input[name=role_name]").val("");
	});*/
	

	
	$("#roleDetail").click(function() {
		var rowData = getLastSelectedRowData();
		if ($('.success').length == 0) {
			alert('请选择数据项');
		} else {
			$(":input[id='roleName']").attr("readOnly","true");
			$(":input[id='roleDesc']").attr("readOnly","true");
			$(":input[id='roleRemark']").attr("readOnly","true");
			init();
			$('#groupModal').modal('show');
			$("#groupModalLabel").html("用户组详情");
			$("#roleName").val(rowData.getAttribute('roleName'));
			$("#roleDesc").val(rowData.getAttribute('roleDesc'));
			$("#roleRemark").val(rowData.getAttribute('roleRemark'));
			role_id = rowData.getAttribute('roleId');
			$.ajax({
				type:"post",
				url:"./roleFindById",
				contentType:"application/x-www-form-urlencoded; charset=UTF-8",
				data:{
					"role_id":role_id
					},
					
				success:function(data)
				{
/*						alert(role_id);*/
					check(data.data);
					//alert(data.authority_desc[0]);
					
				}
			});
			document.getElementById("save").style.display="none";

		}
	});
});





//配置角色的功能
function btnRoleFunc() { 
	var rowData = getLastSelectedRowData();
	if($('.success').length == 0) {
		alert("请先点击选择待配置功能的数据项!");
	}
	else {
		var roleId = rowData.getAttribute('roleId');
		
		$("#selectedList").html("");
		$("#allList").html("");
  	
		$.ajax({
			type: "POST",
			url: "../sysFunction/selectListByRoleId",
			data: {
				"roleId" : roleId
			},
			success: function(msg){
				for(var i = 0; i < msg.data.length; i++) {
					if(msg.data[i].functionRemark != null) {
						$("#selectedList").append("<option value='" + msg.data[i].functionId + "'>" + msg.data[i].functionName + "</option>");
					}
					else {
						$("#allList").append("<option value='" + msg.data[i].functionId + "'>" + msg.data[i].functionName + "</option>");
					}
				}
			}
		});
		
		//弹出框的保存按钮
		$("#btnSaveFunc").unbind();	//先取消原有的绑定
	    $("#btnSaveFunc").click( function () {
	    	var funcList = new Array();
	    	$("#selectedList option").each(function(){
	    		funcList.push($(this).val());
	        });
	    	
	    	$.ajax({
				type: "POST",
				url: "./updateRoleFunctionByRoleId",
				data: {
					userId : userId,
					functionList : funcList.join(";")
				},
				success: function(msg){
					if(msg.code == 1) {
						alert("角色功能配置成功!");
						$('#myModalFunc').modal('hide');
						dt.ajax.reload();
					}
					else {
						alert("角色功能配置失败，请重新操作!");
					}
				}
			});
	    } );
	    
	    $('#myModalFunc').modal('show');
	}          
} 
