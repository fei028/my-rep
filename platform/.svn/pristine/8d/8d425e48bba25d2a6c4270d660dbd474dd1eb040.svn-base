<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="s" uri="http://showName.cc/custom/tags"%>
<!DOCTYPE html>
<html>
  <head>
     <%@ include file="../../common/header.jsp" %>
     <!-- Theme style -->
     <link href="${pageContext.request.contextPath }/static/css/pages/system/sysFunction/list.css" rel="stylesheet" type="text/css" />
  </head>
  <body class="fixedbody">
  <div id="navPath" class="nav-path">
    <ul class="nav-breadcrumb">
	  <li><a href="#"><i class="fa fa-home fa-fw" aria-hidden="true" style="font-size: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;</i>系统管理</a></li>
	  <li><a href="#">权限管理</a></li>
	  <li>权限列表</li>
	</ul>
  </div>
  <div id="themeCondition" class="theme-condition">
	  <form class="form-inline" role="form">
		<div class="form-group">
		  <label for="productName">产品名称</label>
		  <input type="text" class="form-control" id="productName" placeholder="请输入产品名称"/>
		</div>
		<button type="submit" class="btn btn-bg">查询</button>
	  </form>
  </div>
  <div class="theme-content">
     <table class="table table-hover">
 		 <thead>
            <th class="text-center"><input type="checkbox"/></th>
		    <th class="text-center">#</th>
		    <th class="text-center">功能名称</th>
		    <th class="text-center">功能代码</th>
		    <th class="text-center">父级功能名称</th>
		    <th class="text-center">功能URL</th>
		    <th class="text-center">功能类型</th>
		    <th class="text-center">操作</th>
		</thead>
		<tbody>
			<c:forEach items="${sysFunctions }" var="sysFunction" varStatus="sta">
			    <tr>
			        <td class="text-center"><input type="checkbox" name=""/></td>
					<td class="text-center">${sta.index+1 }</td>
					<td class="text-center">${sysFunction.functionName }</td>
					<td class="text-center">${sysFunction.functionCode }</td>
					<td class="text-center"><s:showName key="${sysFunction.parentId }" map="${map }"/></td>
					<td class="text-center">${sysFunction.functionUrl }</td>
					<td class="text-center"><s:showName key="${sysFunction.functionType }" map="${funcTypeMap }"/></td>
					<td class="text-center">
						<a href="javascript:;" onclick="edit(${sysFunction.functionId })"><span class="glyphicon glyphicon-edit red" title="修改"></span></a>
						<a href="javascript:;" onclick="del(${sysFunction.functionId })"><span class="glyphicon glyphicon-trash" title="删除"></span></a>
					</td>					
				</tr>
			</c:forEach>
		</tbody>
     </table>	
	
	  <div id="pageDiv" class="page-control">
	    <div class="check-input"><input type="checkbox"/></div>
	    <div class="pageBtn">
		    
		    <button class="btn btn-bg"><span><img src="${pageContext.request.contextPath }/static/image/add_icon.png"/></span>&nbsp;新增</button>
			<button class="btn">删除</button>
			<button class="btn">修改</button>
		</div>
		<div class="pageDiv">
			<span>共有1250条</span>
			<span>每页显示
				<select>
					<option>10</option>
				</select>
			</span>
			<ul class="pagination">
			  <li><a href="#">&laquo;</a></li>
			  <li class="active"><a href="#">1</a></li>
			  <li class="disabled"><a href="#">2</a></li>
			  <li><a href="#">3</a></li>
			  <li><a href="#">4</a></li>
			  <li><a href="#">5</a></li>
			  <li><a href="#">&raquo;</a></li>
			  <li class="page-num"><input type="text"/></li>
			  <li><button class="btn">Go</button></li>
			</ul>
		</div>
	  </div>
     </div>
	</div>
	<%@ include file="../../common/footer.jsp" %>
  </body>
</html>