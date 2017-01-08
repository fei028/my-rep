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
	  <li><a href="#">用户管理</a></li>
	  <li>用户列表</li>
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
     <table class="table table-hover" style="border: 1px solid #DDDDDD;">
 		 <thead style="background: #F7F7F7">
            <tr>
				<th class="text-center"><input type="checkbox" name="checkAll"/></th>
				<th class="text-center">序号</th>
				<th class="text-center">用户名</th>
			    <th class="text-center">姓名</th>
				<th class="text-center">移动电话</th> 
				<th class="text-center">邮箱</th>
			    <th class="text-center">用户组</th>
				<th class="text-center">用户状态</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${sysUsers }" var="sysUser" varStatus="sta">
				<tr id="${sysUser.userId }">
					<td class="text-center">
					    <input type="checkbox" name="functionIds"/>
					</td>
					<td class="text-center">${sta.index+1 }</td>
					<td class="text-center">${sysUser.userName }</td>
					<td class="text-center">${sysUser.realName }</td>
					<td class="text-center">${sysUser.userMobile }</td> 
					<td class="text-center">${sysUser.userEmail }</td>
					<td class="text-center">用户组</td>
					<td class="text-center">有效</td>
				</tr>
			</c:forEach>
			<tr>
				<td class="text-center">
					<input class="vertical-center" type="checkbox" onclick="checkAll(this,'functionIds')" title="全选"/>
				</td>
		        <td colspan="7">
		        	<div id="pageDiv" class="page-control vertical-center">
					     <div class="pageBtn">
						    <button class="btn btn-bg"><span><img src="${pageContext.request.contextPath }/static/image/add_icon.png"/></span>&nbsp;新增</button>
							<button class="btn">删除</button>
							<button class="btn">修改</button>
						</div>
						<div class="pageDiv">
							<span>共有1250条</span>
							<span>每页显示
								<select class="box">
									<option>10</option>
									<option>15</option>
									<option>20</option>
									<option>30</option>
									<option>50</option>
								</select>
							</span>
							<ul class="pagination">
							  <li class="prePage"><a class="box" href="#">&laquo;</a></li>
							  <li class="active"><a href="#">1</a></li>
							  <li class="disabled"><a href="#">2</a></li>
							  <li><a href="#">3</a></li>
							  <li><a href="#">4</a></li>
							  <li><a href="#">5</a></li>
							  <li><a href="#">&raquo;</a></li>
							  <li class="page-num"><input class="box" type="text" placeholder="页码"/></li>
							  <li><button class="box">Go</button></li>
							</ul>
						</div>
				  	</div>
			     </div>
		        </td>
     		</tr>
		</tbody>
     </table>	
	</div>
	<%@ include file="../../common/footer.jsp" %>
  </body>
</html>