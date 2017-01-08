<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="row">
	<div class="col-md-12">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title" id='cat'>权限添加</h3>
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
							<form class="form-horizontal" id="sys-function-form">
								<div class="form-group">
									<label class="col-sm-2 control-label">功能名称</label>
									<div class="col-sm-10">
										<input type="text" name="functionName" class="form-control">
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">功能代码(code)</label>
									<div class="col-sm-10">
										<input type="text" name="functionCode" class="form-control" id = "functionCode">
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">功能URL</label>
									<div class="col-sm-10">
										<input type="text" name="functionUrl" class="form-control">
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">功能类型</label>
									<div class="col-sm-10">
										<select class="form-control" name="functionType">
										  <option value="1">菜单</option>
										  <option value="2">其他权限</option>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">父级功能名称</label>
									<div class="col-sm-10">
										<select class="form-control" name="parentId">
										  <option value="0" selected>顶级权限</option>
										  <c:forEach items="${sysFunctions }" var="sysFunction">
										   		<option value="${sysFunction.functionId }">${sysFunction.functionName }</option>
										  </c:forEach>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">功能备注</label>
									<div class="col-sm-10">
										<textarea class="form-control" name="functionRemark"
											class="form-control"></textarea>
									</div>
								</div>
								<button type="button" class="btn btn-info" style="float: right;" onclick="doAdd()">添加</button>
							</form>
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