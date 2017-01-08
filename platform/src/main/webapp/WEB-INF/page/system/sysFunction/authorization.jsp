<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="row">
	<div class="col-md-12">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title" id='cat'>角色授权</h3>
				<div class="box-tools pull-right">
					<button class="btn btn-box-tool" data-widget="collapse" value='0'>
						<i class="fa fa-minus"></i>
					</button>
				</div>
			</div>
			<!-- /.box-header -->
			<div class="box-body">
				<div class="row">
					<div class="col-md-12">
						<div class="modal-body">
							<form id="sysFunction-authorization-form" action="" method="post">
								<div style="height:34px;line-height:34px;">
								    <label style="float: left;vertical-align:middle;margin-right: 10px;">角色</label>
									<select name="roleId" class="form-control" onchange="tbodyLoadBySysRole(this.value)" style="width: 30%;float: left;vertical-align:middle;margin-right: 10px;">
									  <option value="-1">请选择</option>
									  <c:forEach items="${sysRoles }" var="sysRole">
									  		<option value="${sysRole.roleId }">${sysRole.roleName }</option>
									  </c:forEach>
									</select>
									<button type="button" class="btn btn-info" style="float: left;vertical-align:middle;" onclick="doAuthorizeForRole()">授予权限</button>
								</div>
								<table id="permission-table"
									class="table table-bordered table-hover table-striped">
									<thead id="search_thead">
										<tr>
											<th class="text-center" width="20%">
												<input type="checkbox" style="margin-left: -61px;" onclick="checkOrCancelAll(this)"/><span id="check-text">全选</span>  
												父级权限</th>
											<th class="text-center" width="80%">子级权限</th>
										</tr>
								   </thead>
									<tbody id="sysFunction-tbody">
										<c:forEach items="${sysFunctions }" var="sysFunction">
											<tr>
												<td width="20%">
													<label>
													    <input 
													    	id="p_${sysFunction.functionId }"
													    	pid="${sysFunction.parentId }"
													    	name="ids" type="checkbox" style="margin-left: 10px;"
													    	onclick="check(${sysFunction.functionId }, ${sysFunction.parentId },this.checked)"
													    	value="${sysFunction.functionId }"
													    	/> ${sysFunction.functionName }
													</label>
												</td>
												<td width="80%" id="td_${sysFunction.functionId }">
												<c:forEach
														items="${sysFunction.sysFunctions }" var="child">
														  <div style="float: left;width: 15%;">
															   <label>
															     <input 
															     	id="c_${child.functionId }"
															     	pid="${child.parentId }"
															     	name="ids" type="checkbox"
															     	onclick="check(${child.functionId },${sysFunction.functionId },this.checked)"
															     	value="${child.functionId }"
															     	/> ${child.functionName }
															   </label>
													      </div>
													</c:forEach>
												</td>
											</tr>
										</c:forEach>
									</tbody>
								</table>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /.col -->
			<div class="col-md-3">
				<div class="control-group searchControlGroup"
					style="display: inline-block">
					<label class="checkbox" style="margin: 0;"> </label>
				</div>
			</div>
			<!-- /.col -->
		</div>
		<!-- /.row -->
	</div>
	<!-- ./box-body -->
</div>
<!-- /.box -->
</div>
<!-- /.col -->
</div>
<script type="text/javascript">
/**
 * checkbox选中
 */
function check(id,pid,checked) {
	
	if(checked){
		trueCheck(id,pid,checked);
	}else{
		cancelCheck(id,checked);
	}
}
/**
 * 勾选
 */
function trueCheck(id,pid,checked){
	
	if($("#p_"+id).length != 0){
		$("#p_"+id).prop("checked",checked);
	}
	if($("#c_"+id).length != 0){
		$("#c_"+id).prop("checked",checked);
	}
	// 父级选中
	var _pid=$("#p_"+id).attr("pid");
	$("#p_"+pid).prop("checked",checked);
	if(_pid != 0){
		if($("#c_"+pid).length != 0){
			$("#c_"+pid).prop("checked",checked);
		}
	}else{
		return false;
	}
	
	trueCheck(pid,_pid,checked);
	
}
/**
 * 取消勾选
 */
function cancelCheck(id,checked){
	 if($("#p_"+id).length == 0){
		 return false;
	 }
	 $("#p_"+id).prop("checked",checked);
	 $("#c_"+id).prop("checked",checked);
	 $("#td_"+id+" :checkbox:checked").each(function () {
         $(this).prop("checked",checked);
         var _id = $(this).attr("id").split("_")[1];
         cancelCheck(_id,checked);
     });
}
/**
 * 角色授权操作
 */
function doAuthorizeForRole(){
	$.ajax({
		type: "POST",
		datatype: "text",
		url: "authorize.do",
		data: $('#sysFunction-authorization-form').serialize(), // 要提交的表单,必须使用name属性
		async: false,
		success: function(data) {
			alert(data);
		}
	});
}

function tbodyLoadBySysRole(roleId){
	$("#sysFunction-tbody").load("getSysFunctionTbody.do?roleId="+roleId);
}

function checkOrCancelAll(checkboxObj){
	var text;
	// 选中 全选
	if(checkboxObj.checked){
		text = "取消";
	}else{
		// 取消全选
		text = "全选";
	}
	$("#sysFunction-tbody :checkbox").each(function(){
		$(this).prop("checked",checkboxObj.checked);
	});
	$("#check-text").html(text);
}
</script>
