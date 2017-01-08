function getManageType(missionType) {

	if (missionType == 0) {
		return "登录";
	} else if (missionType == 1) {
		return "新增";
	} else if (missionType == 2) {
		return "修改";
	} else if (missionType == 3) {
		return "删除";
	} else if (missionType == 4) {
		return "查询";
	} 
}

/*根据条件查询数据*/
function query_search(currentPage){
	
	var beginIndex = (currentPage - 1) * PAGE_SIZE;
	var beginNumber = (currentPage - 1) * PAGE_SIZE + 1;
	var endNumber = beginNumber + PAGE_SIZE - 1;

	$("#begin_number").html(beginNumber);
	$("#end_number").html(endNumber);

							
					var queryUserName = $("input[id=user_name]").val();
					var queryManageIp = $("input[id=manage_ip]").val();

					var queryManageType = $("select[id=manage_type]").val();
				
					var queryBeginTime = $("input[id=begin_time]").val();
					var queryEndTime = $("input[id=end_time]").val();

					$.ajax({
								type : "POST",
								url : "./querySelectList",
								async : false,
								contentType : "application/x-www-form-urlencoded; charset=UTF-8",
								data : {
									start : beginIndex,
									length : PAGE_SIZE,
									queryUserName:queryUserName,
									queryManageIp:queryManageIp,
									queryManageType:queryManageType,
									queryBeginTime:queryBeginTime,
									queryEndTime:queryEndTime
								},
								dataType : "json",
								success : function(result) {
									var data = result.data;
									var totalCount = result.recordsTotal;

									var html = "";

									for (var i = 0; i < data.length; i++) {
										html += "<tr userId='"
												+ data[i].logId
												+ "' ondblclick='dbclick(this)'>"
												+ "<td>" + (i + 1)
												+ "</td>" + "<td>"
												+ data[i].userName
												+ "</td>" + "<td>"
												+ data[i].manageIp
												+ "</td>" + "<td>"
												+ getManageType(data[i].manageType)
												+ "</td>" + "<td>"
												+ data[i].content + "</td>"
												+ "<td>"
												+ data[i].manageTime
												+ "</td>"

												+ "</tr>";

									}
									$("#search_tbody").html(html);

									$("#total_count").html(totalCount);
									var totalPage = Math.ceil(totalCount
											/ PAGE_SIZE);
									if (totalPage == 0) {
										totalPage = 1;
									}

									var options = {
										bootstrapMajorVersion : PAGINATOR_BOOTSTRAP_VERSION,
										currentPage : currentPage,
										totalPages : totalPage,
										numberOfPages : PAGINATOR_NUMBER_OF_PAGE,
										onPageClicked : function(e,
												originalEvent, type, page) {
											query_search(page);
										}
									};

									$('#paginator').bootstrapPaginator(
											options);
								},
								error : function() {
									;
								}
							});

				

}

function start_search(currentPage) {

	var beginIndex = (currentPage - 1) * PAGE_SIZE;
	var beginNumber = (currentPage - 1) * PAGE_SIZE + 1;
	var endNumber = beginNumber + PAGE_SIZE - 1;

	$("#begin_number").html(beginNumber);
	$("#end_number").html(endNumber);
	
	$.ajax({
		type : "POST",
		url : "./selectList",
		async : false,
		contentType : "application/x-www-form-urlencoded; charset=UTF-8",
		data : {
			start : beginIndex,
			length : PAGE_SIZE
		},
		dataType : "json",
		success : function(result) {
			var data = result.data;
			var totalCount = result.recordsTotal;

			var html = "";

			for (var i = 0; i < data.length; i++) {
				html += "<tr userId='"
						+ data[i].logId
						+ "' ondblclick='dbclick(this)'>"
						+ "<td>" + (i + 1)
						+ "</td>" + "<td>"
						+ data[i].userName
						+ "</td>" + "<td>"
						+ data[i].manageIp
						+ "</td>" + "<td>"
						+ getManageType(data[i].manageType)
						+ "</td>" + "<td>"
						+ data[i].content + "</td>"
						+ "<td>"
						+ data[i].manageTime
						+ "</td>"

						+ "</tr>";

			}
			$("#search_tbody").html(html);

			$("#total_count").html(totalCount);
			var totalPage = Math.ceil(totalCount
					/ PAGE_SIZE);
			if (totalPage == 0) {
				totalPage = 1;
			}

			var options = {
				bootstrapMajorVersion : PAGINATOR_BOOTSTRAP_VERSION,
				currentPage : currentPage,
				totalPages : totalPage,
				numberOfPages : PAGINATOR_NUMBER_OF_PAGE,
				onPageClicked : function(e,
						originalEvent, type, page) {
					start_search(page);
				}
			};

			$('#paginator').bootstrapPaginator(
					options);
		},
		error : function() {
			;
		}
	});

}

$(function() {
	start_search(1);

	$("#resetButton").click(function() {
		$("input[id=user_name]").val("");
		$("input[id=manage_ip]").val("");
		$("select[id=manage_type]").val("");
		$("input[id=begin_time]").val("");
		$("input[id=end_time]").val("");
	});

	$("#logQuery").click(function() {
		query_search(1);
		});
	/*	$("#begin_time").datepicker({	
			  //picker is a button to fire date picker up.
			  picker: "<button class='glyphicon glyphicon-calendar'>haha</button>"
			});
		$("#end_time").datepicker({	
			  //picker is a button to fire date picker up.
			  picker: "<button class='glyphicon glyphicon-calendar'>ahaha</button>"
			}); */
	
	
});
