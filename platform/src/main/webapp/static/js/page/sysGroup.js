var groupId;
var selectId = new Array();
var groupName = "";
var roleNames = "";
var selectList = "";
var selectListId = "";
var length = 0;

function init() {
	$("#groupName").val("");
	$("#groupDesc").val("");
	$("#groupRemark").val("");
	$("#groupNameLabel").html("组名");
	
	$("#groupName").removeAttr("readOnly");
	$("#groupDesc").removeAttr("readOnly");
	$("#groupRemark").removeAttr("readOnly");
	
	selectList = "groupRole";
	selectListId = "#groupRole";
	roleNames = "";
	document.getElementById("save").style.display = "inline";

	document.getElementById(selectList).innerHTML = "";
	$(selectListId).trigger("chosen:updated");
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


function getSelectedRole(count) {
	roleNames = "";
	var chosenChoices = document.getElementsByClassName("chosen-choices");
//	console.log(chosenChoices);
	var searchChoice = chosenChoices[count].childNodes;
	console.log(searchChoice);
	for (var i = 0; i < searchChoice.length - 1; i++) {
		var roleName = searchChoice[i].childNodes[0].innerHTML;
		roleNames = roleNames + roleName + ","

	}
	var length = roleNames.length - 1;
	roleNames = roleNames.substring(0, length);

}

function start_search(currentPage) {

	var beginIndex = (currentPage - 1) * PAGE_SIZE;
	var beginNumber = (currentPage - 1) * PAGE_SIZE + 1;
	var endNumber = beginNumber + PAGE_SIZE - 1;

	var searchValue = $("input[name=group_name]").val();

	$("#begin_number").html(beginNumber);
	$("#end_number").html(endNumber);

	$.ajax({
		type : "POST",
		url : "./selectList",
		async : false,
		data : {
			"searchValue" : searchValue,
			start : beginIndex,
			length : PAGE_SIZE
		},
		dataType : "json",
		success : function(result) {
			var data = result.data;
			var totalCount = result.recordsTotal;

			var html = "";
			for (var i = 0; i < data.length; i++) {
				html += "<tr groupId='" + data[i].groupId + "' "
						+ "groupName='" + data[i].groupName + "' " + "' "
						+ "groupDesc='" + data[i].groupDesc + "' " + "' "
						+ "groupRemark='" + data[i].groupRemark + "' "
						+ "ondblclick='dbclick(this)'>" + "<td>" + (i + 1)
						+ "</td>" + "<td>" + data[i].groupName + "</td>"
						+ "<td>" + data[i].groupDesc + "</td>";
				/*
				 * + "<td>" + data[i].groupRemark + "</td>" + "<td>" +
				 * data[i].createUser + "</td>" + "<td>" +
				 * data[i].createTime + "</td>" + "</tr>";
				 */

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

function getAllRole() {
	$.ajax({
		type : "POST",
		url : "../sysRole/selectList",
		async : false,
		data : {
			"searchValue" : "",
		},
		dataType : "json",
		success : function(result) {
			var data = result.data;
			for (var i = 0; i < data.length; i++) {
//				alert(i);
				$(selectListId).append(
						"<option value='" + data[i].roleName + "'>"
								+ data[i].roleName + "</option>");
			}
			$('.chosen-select').chosen();
			$(selectListId).trigger("chosen:updated");
			$(selectListId + "_chosen").width(420);
		}
	});
}

function getOtherRole() {
	// alert(groupName);
	$.ajax({
		type : "POST",
		url : "../sysRoleGroup/getOtherRole",
		async : false,
		data : {
			"groupName" : groupName,

		},
		success : function(msg) {
			var roleNames = new Array();
			// alert(msg.roleNames)
			roleNames = msg.roleNames.split(',');
			for (var i = 0; i < roleNames.length; i++) {

				// alert(roleNames[i]);
				$(selectListId).append(
						"<option value='" + roleNames[i] + "'>" + roleNames[i]
								+ "</option>");
			}
			$(selectListId + "_chosen").width(420);
			$(selectListId).trigger("chosen:updated");
			// $('.chosen-select').chosen();
		}
	});
}

function groupRole() {

	$.ajax({
		type : "POST",
		url : "../sysRoleGroup/selectGroupRole",
		async : false,
		data : {
			"groupName" : groupName,

		},
		success : function(msg) {
			var roleNames = new Array();		
			roleNames = msg.roleNames.split(',');

			for (var i = 0; i < roleNames.length; i++) {

				$(selectListId).append(
						"<option value='" + roleNames[i]
								+ "' selected='selected'>" + roleNames[i]
								+ "</option>");
			}
			// $("#groupRole_chosen").trigger("liszt:updated");
			$(selectListId + "_chosen").width(420);
			$('.chosen-select').chosen();
			$(selectListId).trigger("chosen:updated");

			// for (var i = 0; i < roleNames.length; i++) {
			// $("#groupRole_chosen"+"
			// [value='"+roleNames[i]+"']").attr('selected','selected');
			// }

		}
	});

}

function groupAdd() {
	var groupName = $("#groupName").val();
	var groupDesc = $("#groupDesc").val();
	var groupRemark = $("#groupRemark").val();
	var flag = false;
	// alert("ahahahha");
	/*
	 * 将用户组基本信息写入数据库中
	 */
	// 先将用户组基本信息写入数据库
	$.ajax({
		type : "POST",
		url : "./insert",
		async : false,
		data : {
			// "groupId" : groupId,
			"groupName" : groupName,
			"groupDesc" : groupDesc,
			"groupRemark" : groupRemark,
		},
		success : function(msg) {
			if (msg.code == 1) {
				flag = true;
		//		alert("Insert success!");
			} else {
				alert(msg.msg);
			}
		}
	});
	
	if(!flag)return;
	
	getSelectedRole(0);

	// 将新增用户组的角色添加到数据库中
	$.ajax({
		type : "POST",
		url : "../sysRoleGroup/insert",
		async : false,
		data : {

			"groupName" : groupName,
			"roleNames" : roleNames
		},
		success : function(msg) {
			if (msg.code == 1) {
				alert("新增成功！");
				$('#groupModal').modal('hide');
				window.location.href = "../sysGroup/open";
			} else {
				alert(msg.msg);
			}
		}
	});
}



function changeGroupRole(count)
{
	// 删除用户组的角色信息
	$.ajax({
		type : "POST",
		url : "../sysRoleGroup/delete",
		async : false,
		data : {
			"deleteGroupId" : groupId
		},
		success : function(msg) {
			if (msg.code == 1) {
	//			alert("Delete group role success!");
			} else {
				alert(msg.msg);
			}
		}
	});
	getSelectedRole(count);
	// alert(roleNames);
	// 将新增用户组的角色添加到数据库中
	$.ajax({
		type : "POST",
		url : "../sysRoleGroup/insert",
		async : false,
		data : {

			"groupName" : groupName,
			"roleNames" : roleNames
		},
		success : function(msg) {
			if (msg.code == 1) {
			//	alert("Update group role success!");
			} else {
				alert(msg.msg);
			}
		}
	});
	}


function groupRoleEdit()
{
	//getSelectedRole();
	for(var i= 0; i<length; i++)
 	{
		selectList = "groupRole" + i;
		selectListId = "#groupRole" + i;
		groupId = selectId[i].getAttribute("groupId");
		groupName = selectId[i].getAttribute("groupName");
		changeGroupRole(i+1);
	}
	alert("用户组角色更新成功！");
	window.location.href = "../sysGroup/open";
}



function groupEdit(rowData) {

	groupName = document.getElementById("groupName").value;
	groupDesc = document.getElementById("groupDesc").value;
	groupRemark = document.getElementById("groupRemark").value;

	$("#groupName").removeAttr("readOnly");
	changeGroupRole(0);

	$.ajax({
		type : "POST",
		url : "./update",
		async : false,
		data : {
			"groupId" : groupId,
			"groupName" : groupName,
			"groupDesc" : groupDesc,
			"groupRemark" : groupRemark,
		},
		success : function(msg) {
			if (msg.code == 1) {
	
				alert("用户组修改成功!");
				$('#groupModal').modal('hide');
				window.location.href = "../sysGroup/open";
			} else {
				alert(msg.msg);
			}
		}
	});
}

function groupDelete() {

	var deleteGroupId = "";
	var deleteGroupName = "";
	for (var i = 0; i < selectId.length - 1; i++) {
		deleteGroupId = deleteGroupId + selectId[i].getAttribute('groupId')+ ",";
		deleteGroupName = deleteGroupName + selectId[i].getAttribute('groupName')+ ",";
				}
	deleteGroupId = deleteGroupId + selectId[i].getAttribute('groupId');
	deleteGroupName = deleteGroupName + selectId[i].getAttribute('groupName');
	// 删除用户组的角色信息
	$.ajax({
		type : "POST",
		url : "../sysRoleGroup/delete",
		async : false,
		data : {
			"deleteGroupId" : deleteGroupId
		},
		success : function(msg) {
			if (msg.code == 1) {
		//		alert("删除成功!");
				window.location.href = "../sysGroup/open";
			} else {
				alert(msg.msg);
			}
		}
	});
	// 删除用户组的基本信息
	$.ajax({
		type : "POST",
		url : "./delete",
		async : false,
		data : {
			"deleteGroupId" : deleteGroupId,
			"deleteGroupName":deleteGroupName
		},
		success : function(msg) {
			if (msg.code == 1) {
				alert("删除成功!");
			} else {
				alert(msg.msg);
			}
		}
	});



}

$(function() {
	start_search(1);
	// getAllRole();
	$("#groupInsert").click(function() {

		init();
		getAllRole();

		$("#groupModalLabel").html("新增用户组");
		document.getElementById("save").setAttribute("onclick", "groupAdd();");
		$('#groupModal').modal('show');

	});

	$("#groupUpdate").click(
			function() {

				var rowData = getLastSelectedRowData();
				if ($('.success').length == 0) {
					alert('请选择数据项');
				} else {
					init();

					groupName = rowData.getAttribute('groupName');
					groupRole();
					getOtherRole();
					// $('.chosen-select').chosen();
					// $(selectListId).trigger("chosen:updated");
					// $("#groupRole_chosen").width(420);
					$('#groupModal').modal('show');
					// document.getElementById('#groupName').disabled = true;
					// init();
					$("#groupModalLabel").html("修改用户组");

					$("#groupName").val(rowData.getAttribute('groupName'));
					$("#groupDesc").val(rowData.getAttribute('groupDesc'));
					$("#groupRemark").val(rowData.getAttribute('groupRemark'));

					$(":input[id='groupName']").attr("readOnly","true");
					groupId = rowData.getAttribute('groupId');
					document.getElementById("save").setAttribute("onclick",
							"groupEdit();");
				}

			});

	$("#groupDelete")
			.click(
					function() {
						selectId = $('.success');
						if (selectId.length == 0) {
							alert('请选择数据项');
						} else {
							var str = "确定删除用户组：";

							for (var i = 0; i < selectId.length - 1; i++) {
								str = str + ' "'
										+ selectId[i].getAttribute('groupName')
										+ '" 、';
							}
							str = str + ' "'
									+ selectId[i].getAttribute('groupName')
									+ '"';

							var confirmMessage = confirm(str);
							if (confirmMessage == true) {
								groupDelete();
							}
						}

					});
	$("#resetButton").click(function() {
		$("input[name=group_name]").val("");
	});

	$("#groupDetail").click(function() {
		
		var rowData = getLastSelectedRowData();
		if ($('.success').length == 0) {
			alert('请选择数据项');
		} else {
			init();
			groupName = rowData.getAttribute('groupName');
			

			groupRole();
			$(selectListId + "_chosen").width(420);
		//	 $("#groupRole_chosen").width(420);
			$('#groupModal').modal('show');
			$("#groupNameLabel").html("用户组名");
			$("#groupModalLabel").html("用户组详情");
			$("#groupName").val(rowData.getAttribute('groupName'));
			$("#groupDesc").val(rowData.getAttribute('groupDesc'));
			$("#groupRemark").val(rowData.getAttribute('groupRemark'));
			$(":input[id='groupName']").attr("readOnly","true");
			$(":input[id='groupDesc']").attr("readOnly","true");
			$(":input[id='groupRemark']").attr("readOnly","true");
		
			document.getElementById("save").style.display = "none";
		}
	});

	$("#groupRoleUpdate")
			.click(
					function() {
						selectId = $('.success');
						if (selectId.length == 0) {
							alert('请选择数据项');
						} else {
							var html = "";
							length = selectId.length;
							
							for (var i = 0; i < length; i++) {
								groupName = selectId[i]
										.getAttribute("groupName");
								html = html
										+ "<div class='form-group' style='width: 600px;'><label class='col-sm-2 control-label' placeholder=' ' id = 'groupName"
										+ i
										+ "'>用户组"
										+ groupName
										+ "</label> <div class='col-sm-9'><select id='groupRole"
										+ i
										+ "' data-placeholder='请选择用户组角色' multiple class='chosen-select' tabindex='8'> </select></div></div>";

							}

							document.getElementById("roleUpdate").innerHTML = html;
							
							for (var i = 0; i < length; i++) {
			
								selectList = "groupRole" + i;
								selectListId = "#groupRole" + i;
								
								groupName = selectId[i].getAttribute("groupName");
								groupRole();
								getOtherRole();
							}

							$("#roleModalLabel").html("用户组角色修改");
							$('#roleModal').modal('show');
							
							document.getElementById("roleSave").setAttribute("onclick","groupRoleEdit();");

						}

					});

	// $('.chosen-select').chosen();
	$('.chosen-select-deselect').chosen({
		allow_single_deselect : true
	});

	// $("#groupRole_chosen").trigger("liszt:updated");
	// $('.chosen-container chosen-container-multi').sytle.width="420px";

});
