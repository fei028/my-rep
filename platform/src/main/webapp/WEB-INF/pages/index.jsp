<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
	<%@ include file="./common/header.jsp" %>    
	<!-- Theme style -->
    <link href="${pageContext.request.contextPath }/static/css/pages/index.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
	<header class="main-header">
		<!-- logo -->
		<a href="#" class="logo">
			<img src="${pageContext.request.contextPath }/static/image/logo.png" alt="Logo"/>
			<span>工控系统漏洞知识库</span>
		</a>
		<!-- Header Navbar: style can be found in header.less -->
		<nav class="navbar navbar-static-top" role="navigation">
			<ul class="menu" id = "topMenu">
				
			</ul>
			<div class="custom-menu">
				<ul class="nav navbar-nav">
					<li><a href="#">帮助指南</a></li>
					<li class="dropdown notification-menu">
						<a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
							<i class="icon icon-bell">&nbsp;&nbsp;&nbsp;&nbsp;</i>
							<span class="label label-warning">5</span>
						</a>
						<ul class="dropdown-menu">
							<li class="header">你有5条通知</li>
							<li>
							    <div>
									<ul>
										<li><a href="#">message1</a></li>
										<li><a href="#">message2</a></li>
										<li><a href="#">message3</a></li>
										<li><a href="#">message4</a></li>
										<li><a href="#">message5</a></li>
									</ul>
								</div>
							</li>
							<li class="footer"><a href="#">view all</a></li>
						</ul>
					</li>
					<li class="dropdown notification-menu">
						<a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
							<span>Soler</span>
							<i class="icon icon-select">&nbsp;&nbsp;</i>
						</a>
						<ul class="dropdown-menu">
							<li>
							    <div>
									<ul>
										<li><a href="./logout.do">退出</a></li>
									</ul>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	</header>
	<div id="wrapper" class="wrap-content">
	    <aside id="sidebar" class="main-sidebar">
			<section id="sidebar-wrapper" class="sidebar">
				<div class="sidebar-nav">
					<div class="sidebar-title" id = "topMenuName">API管理</div>
					<a id="menu-toggle" class="sidebar-toggle" href="#" data-toggle="offcanvas" role="button">
						<img src="${pageContext.request.contextPath }/static/image/show_aside_icon.png"/>
					</a>
				</div>
				<ul id="sidebar-menu" class="sidebar-menu">
					<li class="active">
						<a href="#productManage" data-toggle="collapse">
							<i class="icon icon-sup">&nbsp;&nbsp;&nbsp;&nbsp;</i>
							<span>产品管理<i class="icon-angle-right put-right">&nbsp;&nbsp;&nbsp;&nbsp;</i></span>
							<i class="icon icon-angle-right pull-right"></i>
						</a>
						<ul id="productManage" class="menu-item collapse">
							<li><a href="#">产品分类</a></li>
							<li><a href="#">产品历史生产数据</a></li>
							<li><a href="#">产品生产地查询</a></li>
						</ul>
					</li>
				</ul>
	    </aside>
	    <iframe id="mainIframe" class="main-iframe" src="welcome.do"></iframe>
    </div>
	<%@ include file="./common/footer.jsp" %>
    <script src="${pageContext.request.contextPath }/static/js/pages/index.js" type="text/javascript"></script>
  </body>
  </html>