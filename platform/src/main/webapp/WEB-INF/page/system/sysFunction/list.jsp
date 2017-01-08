<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="row">
	<div class="col-md-12">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title" id='cat'>权限列表</h3>
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
						<table id="example2"
							class="table table-bordered table-hover table-striped">
							<thead id="search_thead">
								<tr>
									<th class="text-center">#</th>
									<th class="text-center">功能名称</th>
									<th class="text-center">功能代码</th>
									<th class="text-center">父级功能名称</th>
									<th class="text-center">功能URL</th>
									<th class="text-center">功能类型</th>
									<th class="text-center">操作</th>
								</tr>
							</thead>
							<tbody id="tbody">
								<c:forEach items="${sysFunctions }" var="sysFunction"
									varStatus="sta">
									<tr>
										<td class="text-center">${sta.index+1 }</td>
										<td class="text-center">${sysFunction.functionName }</td>
										<td class="text-center">${sysFunction.functionCode }</td>
										<td class="text-center">${sysFunction.parentId }</td>
										<td class="text-center">${sysFunction.functionUrl }</td>
										<td class="text-center">${sysFunction.functionType }</td>
										<td class="text-center">
											<a href="javascript:;" onclick="edit(${sysFunction.functionId })"><span class="glyphicon glyphicon-edit" class="red" title="修改"></span></a>
											<a href="javascript:;" onclick="del(${sysFunction.functionId })"><span class="glyphicon glyphicon-trash" title="删除"></span></a>
										</td>
									</tr>
								 </c:forEach>
							</tbody>
						</table>
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