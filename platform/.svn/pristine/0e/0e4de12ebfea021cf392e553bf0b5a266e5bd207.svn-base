<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<style type="text/css">
#tree ul li{
	border: none;
	background: #fff;
}
</style> 
<div class="row">
	<div class="col-md-12">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title" id='cat'>权限树预览</h3>
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
							<div id="tree"></div>
						</div>
					</div>
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
var tree = ${treeData};
function getTree() {
    return tree;
}
 
$('#tree').treeview({
	data: getTree(),
	levels:3,
	emptyIcon:"glyphicon glyphicon-leaf"
	/* enableLinks:true */
	});  

</script>