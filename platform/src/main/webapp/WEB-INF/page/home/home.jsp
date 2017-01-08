<%@ page language="java" import="java.util.*" contentType="text/html;charset=utf-8" pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
<head>
	<%@ include file="../common/head.jsp"%>
	<link href="${pageContext.request.contextPath}/css/page/home.css" rel="stylesheet" type="text/css">	
</head>
<body class="skin-blue sidebar-mini">
 	<div class="wrapper">
 		<header class="main-header">
	        <a href="####" class="logo">
	          <span class="logo-lg"><b>网站管理平台</b></span>
	        </a>
	        <nav class="navbar navbar-static-top" role="navigation">
	          <!-- 一级菜单 -->
		      <ul id="top_menu" class="navigation-header nav navbar-nav">

		      </ul>
	          <div class="navbar-custom-menu">
	          	<a class="welcome-info">欢迎您，<shiro:principal property="userName"/>  <%-- ${activeUser.userName } --%></a>
	            <ul class="nav navbar-nav">
	              <li class="messages-menu">
                	<a target='_blank' href='javascript:void(0);'>帮助</a>
	              </li>
	              <li class="messages-menu">
	                <a href="${pageContext.request.contextPath}/login/logout.do">退出</a>
	              </li>
	            </ul>
	          </div>
	        </nav>
      	</header>
      
		<div id="content" class="row-fluid">
			<!-- 左侧菜单 -->
			<aside id="left" class="main-sidebar" style="float:left; display:none;">
				<div class="sidebar">
					<iframe id="menuFrame" name="menuFrame" src="#" style="overflow:visible;" 
					scrolling="yes" frameborder="yes" width="100%" height="100%"></iframe>
				</div>
			</aside>
			<aside id="right" class="content-wrapper" style="float:left; width:100%">
			<!-- 右侧内容 -->
			<iframe id="mainFrame" name="mainFrame" src="#" style="overflow:visible; padding-bottom:40px;"
				scrolling="yes" frameborder="yes" width="100%" height="100%"></iframe> 
			</aside>
		</div>
 	</div>

	<%@ include file="../common/foot.jsp"%>
    <script src="${pageContext.request.contextPath}/js/page/home.js" charset="UTF-8"></script>
    <script type="text/javascript">
    	$(function(){
    		// 触发点击事件
    		$("#top_menu li a").eq(0).trigger("click");
    	});
    </script>
</body>
</html>