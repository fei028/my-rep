function init() {
	$("#mission_content").val("");
	$("#mission_type").val("");
	$("#mission_status").val("");
	$("#create_time").val("");
	$(":input[id='mission_content']").removeAttr("readOnly");
	$(":input[id='mission_type']").removeAttr("readOnly");
	$(":input[id='mission_status']").removeAttr("readOnly");
	$(":input[id='create_time']").removeAttr("readOnly");
	document.getElementById("save").style.display = "inline";

}

function getMissionType(missionType) {

	if (missionType == 1) {
		return "CERT内容审核";
	} else if (missionType == 2) {
		return "LAB内容审核";
	} 
}

function getMissionStatus(missionStatus) {
	if (missionStatus == 0) {
		return "未处理";
	} else if (missionStatus == 1) {
		return "已处理";
	} 
}
function getLastSelectedRowData() {
	var sid = $('.success');
	var lastSelected = 0;
	for (var i = 0; i < sid.length; i++) {
		if (sid[i].getAttribute('data-num') > sid[lastSelected]
				.getAttribute('data-num')) {
			lastSelected = i;
		}
	}
	return sid[lastSelected];
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
				html += "<tr missionId='" + data[i].missionId + "' "
						+ "missionContent='" + data[i].missionContent + "' "
						+ "missionType='" + data[i].missionType + "' "
						+ "missionStatus='" + data[i].missionStatus + "' "
						+ "createTime='" + data[i].createTime + "' "
						+ "ondblclick='dbclick(this)'>" + "<td>" + (i + 1)
						+ "</td>" + "<td>" + data[i].missionContent + "</td>"
						+ "<td>" + getMissionType(data[i].missionType) + "</td>" + "<td>"
						+ getMissionStatus(data[i].missionStatus) + "</td>" + "<td>"
						+ data[i].createTime + "</td>";

			}
			$("#search_tbody").html(html);

			$("#total_count").html(totalCount);
			var totalPage = Math.ceil(totalCount / PAGE_SIZE);
			if (totalPage == 0) {
				totalPage = 1;
			}

			var options = {
				bootstrapMajorVersion : PAGINATOR_BOOTSTRAP_VERSION,
				currentPage : currentPage,
				totalPages : totalPage,
				numberOfPages : PAGINATOR_NUMBER_OF_PAGE,
				onPageClicked : function(e, originalEvent, type, page) {
					start_search(page);
				}
			};

			$('#paginator').bootstrapPaginator(options);
		},
		error : function() {
			;
		}
	});
}

function query_search(currentPage) {
	var beginIndex = (currentPage - 1) * PAGE_SIZE;
	var beginNumber = (currentPage - 1) * PAGE_SIZE + 1;
	var endNumber = beginNumber + PAGE_SIZE - 1;

	var queryMissionContent = $("input[id=missionContent]").val();
	var queryMissionType = $("select[id=missionType]").val();
	var queryMissionStatus = $("select[id=missionStatus]").val();

	$("#begin_number").html(beginNumber);
	$("#end_number").html(endNumber);

	$.ajax({
		type : "POST",
		url : "./querySelectList",
		async : false,
		data : {
			start : beginIndex,
			length : PAGE_SIZE,
			queryMissionContent : queryMissionContent,
			queryMissionType : queryMissionType,
			queryMissionStatus : queryMissionStatus
		},
		dataType : "json",
		success : function(result) {
			var data = result.data;
			var totalCount = result.recordsTotal;

			var html = "";
			for (var i = 0; i < data.length; i++) {
				html += "<tr missionId='" + data[i].missionId + "' "
				+ "missionContent='" + data[i].missionContent + "' "
				+ "missionType='" + data[i].missionType + "' "
				+ "missionStatus='" + data[i].missionStatus + "' "
				+ "createTime='" + data[i].createTime + "' "
				+ "ondblclick='dbclick(this)'>" + "<td>" + (i + 1)
				+ "</td>" + "<td>" + data[i].missionContent + "</td>"
				+ "<td>" + getMissionType(data[i].missionType) + "</td>" + "<td>"
				+ getMissionStatus(data[i].missionStatus) + "</td>" + "<td>"
				+ data[i].createTime + "</td>";

			}
			$("#search_tbody").html(html);

			$("#total_count").html(totalCount);
			var totalPage = Math.ceil(totalCount / PAGE_SIZE);
			if (totalPage == 0) {
				totalPage = 1;
			}

			var options = {
				bootstrapMajorVersion : PAGINATOR_BOOTSTRAP_VERSION,
				currentPage : currentPage,
				totalPages : totalPage,
				numberOfPages : PAGINATOR_NUMBER_OF_PAGE,
				onPageClicked : function(e, originalEvent, type, page) {
					start_search(page);
				}
			};

			$('#paginator').bootstrapPaginator(options);
		},
		error : function() {
			;
		}
	});
}
$(function() {
	start_search(1);

	$("#resetButton").click(function() {
		$("input[id=missionContent]").val("");
		$("select[id=missionType]").val("");
		$("select[id=missionStatus]").val("");
	});

	$("#missionQuery").click(function() {
		query_search(1);
	});

	$("#missionDetail").click(function() {
		var rowData = getLastSelectedRowData();
		if ($('.success').length == 0) {
			alert('请选择数据项');
		} else {

			init();
			$('#missionModal').modal('show');
			$("#missionModalLabel").html("待办事项详情");

			$("#mission_content").val(rowData.getAttribute('missionContent'));
			$("#mission_type").val(getMissionType(rowData.getAttribute('missionType')));
			$("#mission_status").val(getMissionStatus(rowData.getAttribute('missionStatus')));
			$("#create_time").val(rowData.getAttribute('createTime'));
			$(":input[id='mission_content']").attr("readOnly","true");
			$(":input[id='mission_type']").attr("readOnly","true");
			$(":input[id='mission_status']").attr("readOnly","true");
			$(":input[id='create_time']").attr("readOnly","true");
	
			document.getElementById("save").style.display = "none";

		}
	});

});