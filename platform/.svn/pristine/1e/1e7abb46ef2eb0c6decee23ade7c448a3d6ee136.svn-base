<%@ page language="java" import="java.util.*" contentType="text/html;charset=utf-8" isELIgnored="false"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<%@ include file="../../common/head.jsp"%>
</head>
<body>
	<div class="content-wrapper row-fluid">
  		<section class="content">
	  		<!-- 查询部分开始 -->
	  		<div class="row">
	            <div class="col-md-12">
	              <div class="box box-info">
	                <div class="box-header with-border">
	                  <h3 class="box-title" id='cat' >权限管理</h3>
	                  <div class="box-tools pull-right">
	                    <button class="btn btn-box-tool" data-widget="collapse" value='0'><i class="fa fa-minus"></i></button>
	                  </div>
	                </div><!-- /.box-header -->
	                <div class="box-body">
	                  <div class="row">
	                    <div class="col-md-12">
	                   		<div class="form-ModalGroup">
	                   			<shiro:hasPermission name="sysFunction:list">
	                   				<button type="button" class="btn btn-info" onclick="btnDoClick(this.innerHTML)">权限列表</button>
	                   			</shiro:hasPermission>
	                   		    <shiro:hasPermission name="sysFunction:add">
	                   				<button type="button" class="btn btn-primary" onclick="btnDoClick(this.innerHTML)">添加权限</button>
	                   			</shiro:hasPermission>
								<button type="button" class="btn btn-success" onclick="btnDoClick(this.innerHTML)">预览权限树</button>
								<button type="button" class="btn btn-warning" onclick="btnDoClick(this.innerHTML)">角色授权</button>
								<!--
								<button type="button" class="btn btn-danger">Danger</button>
								<button type="button" class="btn btn-link">Link</button> -->
		                    </div>
	                    </div><!-- /.col -->
	                    <div class="col-md-3">
	                    	<div class="control-group searchControlGroup" style="display:inline-block">
							<label class="checkbox" style="margin:0;">
							</label>
						</div>
	                    </div><!-- /.col -->
	                  </div><!-- /.row -->
	                </div><!-- ./box-body -->
	              </div><!-- /.box -->
	            </div><!-- /.col -->
	          </div>
	          
	         <div id="load-div"></div>
  	 	</section>	
	</div>
		
    <%@ include file="../../common/foot.jsp"%>
    <script src="${pageContext.request.contextPath }/js/bootstrap/bootstrap-treeview.min.js"></script>
    <script type="text/javascript">
    	$(function() {
			$("#load-div").load("list.do");
		});
    	var lastClickBtnText = "权限列表";
    	function btnDoClick(btnText){
    		if(btnText == lastClickBtnText){
    			return;
    		}
    		lastClickBtnText = btnText;
    		if(btnText == "添加权限"){
    			$("#load-div").load("toAddUI.do");
    		}
    		else if(btnText == "权限列表"){
    			$("#load-div").load("list.do");
    		}
    		else if(btnText == "预览权限树"){
    			$("#load-div").load("tree.do");
    		}
    		else if(btnText == "角色授权"){
    			$("#load-div").load("authorization.do");
    		}
    	}
    	function doAdd(){
    		$.ajax({
    			type: "POST",
    			datatype: "text",
    			url: "add.do",
    			data: $('#sys-function-form').serialize(), // 要提交的表单,必须使用name属性
    			async: false,
    			success: function(data) {
    				alert(data);
    				if(data == "保存成功"){
    					location.reload();
    				}else{
    					$("#functionCode").focus();
    				}
    			}
    		});
    	}
    	// 删除权限
    	function del(functionId){
    		lastClickBtnText = "";
    		if(confirm("你确定要删除吗?")){
    			$("#load-div").load("del.do?functionIds="+functionId);
    		}
    	}
    	function edit(functionId){
    		lastClickBtnText = "";
    		$("#load-div").load("toEditUI.do?functionId="+functionId);
    	}
    	function doEdit(){
    		$.ajax({
    			type: "POST",
    			datatype: "text",
    			url: "edit.do",
    			data: $('#sys-function-edit-form').serialize(), // 要提交的表单,必须使用name属性
    			async: false,
    			success: function(data) {
    				alert(data);
    				if(data == "修改成功"){
    					location.reload();
    				}
    			}
    		});
    	}
    </script>
</body>
</html>