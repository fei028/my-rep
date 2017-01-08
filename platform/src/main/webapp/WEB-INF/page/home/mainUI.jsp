<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<!-- Required Stylesheets -->
<link href="${pageContext.request.contextPath }/css/bootstrap/bootstrap.min.css" rel="stylesheet">
 
<!-- Required Javascript -->
<script src="${pageContext.request.contextPath }/js/common/jquery.min.js"></script>
<script src="${pageContext.request.contextPath }/js/bootstrap/bootstrap-treeview.min.js"></script>
<style type="text/css">
body{
	background: #fff;
}
#tree ul li{
	border: none;
	background: #fff;
}
</style> 
</head>
<body>
<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				 <h3>后台管理</h3>
			</div>
		</div>
		<div class="row" style="margin-top: 2px;">
			<div class="col-md-3">
				<div id="tree"></div>  
			</div>
			<div class="col-md-1">
				 
			</div>
			<div class="col-md-8">
				权限集合:${permissions }
			</div>
		</div>
</div>
<script type="text/javascript">
var tree = [
	  {
          text: "系统管理",
	      nodes: [
	      {
	    	  text: "权限管理",
	          href:"${pageContext.request.contextPath}/login/loginUI.do",
	      }
	    ]
	  },
	  {
	    text: "Parent 2"
	  }
	];
function getTree() {
    // Some logic to retrieve, or generate tree structure
    return tree;
}
 
$('#tree').treeview({
	data: getTree(),
	enableLinks:true
	});   
$('#tree').on('nodeChecked', function(event, data) {
	  alert(data.href);
	}); 
</script>
</body>
</html>