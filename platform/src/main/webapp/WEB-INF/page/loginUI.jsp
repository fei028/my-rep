<%@ page language="java" import="java.util.*" contentType="text/html;charset=utf-8" pageEncoding="UTF-8" isELIgnored="false"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
<head>
<link href="${pageContext.request.contextPath }/css/bootstrap/bootstrap.min.css" rel="stylesheet" media="screen" type="text/css">
<script type="text/javascript" src="${pageContext.request.contextPath }/js/common/jquery.min.js"></script>
<script type="text/javascript">
function doLogin() {
	$("#loginForm").attr("action","${pageContext.request.contextPath }/login/login.do").submit();
}
</script>
</head>
<body>
<div class="title">登陆验证</div>
<table cellpadding="0" cellspacing="0" class="main">
	<tbody>
		<tr>
			<td class="left"></td>
			<td class="center">
				<div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">欢迎</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form" id="loginForm" method="post">
                            <fieldset>
                                <div class="form-group">
                                    <input class="form-control" id="username" placeholder="用户名" name="username" type="text" value="admin" autofocus>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" id="password" placeholder="密码" name="password" type="password" value="123">
                                </div>
                                <button id="login" type="button" class="btn btn-primary btn-block" onclick="doLogin()">登录</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
			</td>
			<td class="right"></td>
		</tr>
	</tbody>
</table>
</body>
</html>