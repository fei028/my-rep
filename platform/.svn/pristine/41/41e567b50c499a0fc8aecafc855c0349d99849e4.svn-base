<%@ page language="java" import="java.util.*" contentType="text/html;charset=utf-8" isELIgnored="false"%>
<!DOCTYPE HTML>
<html lang="en">
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
	                  <h3 class="box-title" id='cat' >用户管理</h3>
	                  <div class="box-tools pull-right">
	                    <button class="btn btn-box-tool" data-widget="collapse" value='0'><i class="fa fa-minus"></i></button>
	                  </div>
	                </div><!-- /.box-header -->
	                <div class="box-body">
	                  <div class="row">
	                    <div class="col-md-3">
	                   		<div class="form-ModalGroup">
		                      <label class="inputGroupLabel" for="dev_name">用户名</label>
		                      <input type="text" id="user_name" name="username" class="form-control inputGroupInput" placeholder="">
		                    </div>
	                    </div><!-- /.col -->
	                  <!--   <div class="col-md-3">
	                    	<div class="form-group">
		                      <label for="inputGroupLabel">处理状态</label>
		                      <select name='dealState' class="form-control inputGroupInput">
		                        <option value=""></option>
					    		<option value=0>未处理</option>
					    		<option value=1>已发送</option>
					    		<option value=2>已处理</option>
		                      </select>
		                    </div>
	                    </div> --><!-- /.col -->
	                    <div class="col-md-3">
	                    	<div class="control-group searchControlGroup" style="display:inline-block">
							<label class="checkbox" style="margin:0;">
			                    <input type="button" value="查询" class="btn btn-info" onclick="start_search(1)" />
						    	<input type="button" value="重置" class="btn btn-success" onclick="resetButton()" />
							</label>
						</div>
	                    </div><!-- /.col -->
	                  </div><!-- /.row -->
	                </div><!-- ./box-body -->
	              </div><!-- /.box -->
	            </div><!-- /.col -->
	          </div>
	          
	          <div class="row">
            	<div class="col-xs-12">
		          <div class="box" style="border-top:none;">
	                <div class="box-header" style="padding: 4px 10px 0px 10px;">
	                   <button type="button" class="btn btn-default"  onclick="btnInsert()"><i class="fa fa-fw fa-plus"></i>新增</button>
	                   <button type="button" class="btn btn-default"  onclick="btnUpdate()"><i class="fa fa-fw fa-edit"></i>修改</button>
	                   <button type="button" class="btn btn-default"  onclick="btnDelete()"><i class="fa fa-fw fa-close"></i>删除</button>
	                   <button type="button" class="btn btn-default"  onclick="btnResetPassword()"><i class="fa fa-fw fa-refresh"></i>重置密码</button>
	                   <button type="button" class="btn btn-default"  onclick="btnLock()"><i class="fa fa-fw fa-unlock"></i>锁定/解锁</button>
	                   <button type="button" class="btn btn-default"  onclick="btnUserGroup()"><i class="fa fa-fw fa-group"></i>用户组</button>
	                   <button type="button" class="btn btn-default"  onclick="btnDetail()"><i class="fa fa-fw fa-chevron-right"></i>详情</button>
	                </div>
	                <div class="box-body">
	                  <div class="row">
	                  	<div class="col-sm-12">
		                   <table id="example2" class="table table-bordered table-hover table-striped">
		                  	 <thead id="search_thead">
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
		                    <tbody id="search_tbody">				
							</tbody>
		                  </table>
	                  	</div>
	                  </div>
	                  <div class="row">
	                    <div class="col-md-3">
	                    	<div class="paginator-info">显示<span id="begin_number">1</span>-<span id="end_number">10</span>条，共<span id="total_count">0</span>条</div>
	                    </div>
	                    <div class="col-md-9 text-right">
	                   		<ul id="paginator"></ul>
	                    </div>
	                  </div>
	                </div><!-- /.box-body -->
	              </div><!-- /.box -->
	            </div>
	          </div>
  	 	</section>	
	</div>
		
	<div class="modal fade bs-example-modal-sm" id="userModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	<div class="modal-dialog">
		    <div class="modal-content">
		  <div class="modal-header">
		  	<h3 id ="userModalLabel" class='modal-title'>修改</h3>
		</div>
	  	<div class="modal-body">	  			         	
	    	<form class="form-horizontal" id="user-modal-form">
				<div class="form-group">
				    <label class="col-sm-2 control-label">用户名</label>
				    <div class="col-sm-10">
				      	<input type="text" name="userName" class="form-control">
				      	<input type="hidden" name="userId" class="form-control">
				    </div>
			  	</div>
			  	<div class="form-group">
				    <label class="col-sm-2 control-label" >姓名</label>
				    <div class="col-sm-10">
				      	<input type="text" name="realName" class="form-control">
				    </div>
				</div>
				<div class="form-group">
				    <label class="col-sm-2 control-label" >电话号码</label>
				    <div class="col-sm-10">
				      	<input type="text" name="userTelephone" class="form-control">
				    </div>
				</div>
				<div class="form-group">
				    <label class="col-sm-2 control-label" >手机号码</label>
				    <div class="col-sm-10">
				      	<input type="text" name="userMobile" class="form-control">
				    </div>
				</div>
				<div class="form-group">
				    <label class="col-sm-2 control-label" >邮箱</label>
				    <div class="col-sm-10">
				      	<input type="text" name="userEmail" class="form-control">
				    </div>
				</div>												
				<div class="form-group">
				    <label class="col-sm-2 control-label" >描述</label>
				    <div class="col-sm-10">
				      	<textarea class="form-control"  name="userDesc" class="form-control"></textarea>
				    </div>
				</div>
				<div class="form-group">
				    <label class="col-sm-2 control-label" >备注</label>
				    <div class="col-sm-10">
				      	<textarea class="form-control"  name="userRemark" class="form-control"></textarea>
				    </div>
				</div>
				<div class="form-group">
				    <label class="col-sm-2 control-label" >用户组</label>
				    <div class="col-sm-10">
				    	<select name='userGroup' class="form-control">
				    		<option value=0></option>
				    	</select>
				    </div>
				</div>
			</form>
	  	</div>
	  	<div class="modal-footer">
	    	<button class="btn" data-dismiss="modal" aria-hidden="true" >关闭</button>
	    	<button class="btn btn-primary" onclick="" id="save" >保存</button>
	  	</div>
	  	</div><!-- /.modal-content -->
		  </div><!-- /.modal-dialog -->
	</div>
	
	<div class="modal fade" id="myModalGroup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
	    	<div class="modal-content">
	      		<div class="modal-header">
	        		<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        		<h4 class="modal-title" id="myModalGroupLabel">配置用户组</h4>
	      		</div>
	      		<div class="modal-body">
	      			<div class="row">
						<div class="col-sm-5">
							<label>可选用户组:</label>
							<select multiple class="form-control h200" id="allList">
							</select>
						</div>
					  	<div class="col-sm-2 multiselect">
					  		<button type="button" id="multiSelectBtn" class="btn btn-primary btn-sm">&nbsp;&gt;&nbsp;</button>
					  		<button type="button" id="multiUnSelectBtn" class="btn btn-primary btn-sm">&nbsp;&lt;&nbsp;</button>
					  		<button type="button" id="allSelectBtn" class="btn btn-primary btn-sm">&gt;&gt;</button>
					  		<button type="button" id="allUnSelectBtn" class="btn btn-primary btn-sm">&lt;&lt;</button>
					  	</div>
					  	<div class="col-sm-5">
					  		<label>已选用户组:</label>
					  		<select multiple class="form-control h200" id="selectedList">
							</select>
						</div>
					</div>       		
	      		</div>
	      		<div class="modal-footer">
	        		<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
	        		<button type="button" class="btn btn-primary" id="btnSaveGroup">保存</button>
	      		</div>
	    	</div>
	  	</div>
	</div>
	
	<%@ include file="../../common/foot.jsp"%>
<%-- 	<script src="${pageContext.request.contextPath }/js/page/multiSelect.js"></script>
	<script src="${pageContext.request.contextPath }/js/page/sysUser.js" charset="UTF-8"></script> --%>
	<script type="text/javascript">
		$(function(){
			$("#search_tbody").load("${pageContext.request.contextPath }/system/sysUser/getSysUserList.do");
		});
		function init(){
			/*$("select[name=spread]").val(0);*/
				
			$("input[name=userId]").val("");
			$("input[name=userId]").removeAttr("disabled");
			$("input[name=userName]").val("");
			$("input[name=userName]").removeAttr("disabled");
			$("input[name=realName]").val("");
			$("input[name=realName]").removeAttr("disabled");
			$("input[name=userTelephone]").val("");
			$("input[name=userTelephone]").removeAttr("disabled");
			$("input[name=userMobile]").val("");
			$("input[name=userMobile]").removeAttr("disabled");
			$("input[name=userEmail]").val("");
			$("input[name=userEmail]").removeAttr("disabled");
			$("textarea[name=userDesc]").val("");
			$("textarea[name=userDesc]").removeAttr("disabled");
			$("textarea[name=userRemark]").val("");
			$("textarea[name=userRemark]").removeAttr("disabled");
			$("select[name=userGroup]").val(0);
			$("select[name=userId]").removeAttr("disabled");
		}

		function btnInsert(){
			init();
			$("#userModalLabel").html("添加");
			document.getElementById("save").removeAttribute("style");
			document.getElementById("save").setAttribute("onclick", "userAdd();");
			$('#userModal').modal('show');
		}
		
		function userAdd(){
			$("#user-modal-form").attr("method","post")
			                     .attr("action","addSysUser.do")
			                     .submit();
		}
	</script>
</body>
</html>