
function start_search(currentPage) {
	

	
	var beginIndex = (currentPage - 1) * PAGE_SIZE;
	var beginNumber = (currentPage - 1) * PAGE_SIZE + 1;
	var endNumber = beginNumber + PAGE_SIZE - 1;

	$("#begin_number").html(beginNumber);
	$("#end_number").html(endNumber);
	serverName= $("input[name='serverName']").val();
	serverIP=$("input[name='serverIP']").val();
	
	$.ajax({
		type : "POST",
		url : "./selectList",
		data : {
			start : beginIndex,
			length : PAGE_SIZE,
		},
		dataType : "json",
		
		success : function(result) {
			var data = result.data;
			var totalCount = result.recordsTotal;

			var html = "";
			for(var i = 0; i < data.length; i++) {
				html += "<tr logId='" + data[i].logId + "' >"
					  + "<td>" + (i + 1) + "</td>" 
					  + "<td>" + data[i].operateType + "</td>"
					  +"<td>"+data[i].logContent+"</td>"
					  +"<td>"+data[i].operateStartTime+"</td>"
					  +"<td>"+data[i].operateEndTime+"</td>"
					  + "</tr>";
			}
			$("#search_tbody").html(html);
			
			$("#total_count").html(totalCount);
			var totalPage = Math.ceil(totalCount / PAGE_SIZE);
			if(totalPage == 0) {
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

$('#add').click(function(){

	$('#operateType').val("");
	$('#logContent').val("");
	$('#operateStartTime').val("");
	$('#operateEndTime').val("");
	$("#logModalLabel").html("新增维护日志");
	$('#logModal').modal('show');
	document.getElementById("save").setAttribute("onclick", "logAdd();");
});
//保存新增
function logAdd(){
	var operateType = $("#operateType").val();
	var logContent = $("#logContent").val();
	var operateStartTime = $("#operateStartTime").val();
	var operateEndTime = $("#operateEndTime").val();

	$.ajax({
		type : "POST",
		url : "./insert",
		data : {
			"logMaintenance.operateType" : operateType,
			"logMaintenance.logContent" : logContent,
			"logMaintenance.operateStartTime" : operateStartTime,
			"logMaintenance.operateEndTime" : operateEndTime
		},
		success : function(msg) {
			if (msg.code == 1) {
				alert("新增成功!");
				$('#logModal').modal('hide');
				start_search(1);
			} else {
				alert("新增失败\n");
			}
		}
	});
}


$('#modify').click(function(){
	var rowData = getLastSelectedRowData();
	if ($('.success').length == 0) {
		alert('请选择数据项');
	} else{
		$('#logId').val(rowData.getAttribute("logId"));
		$('#operateType').val(rowData.cells[1].innerHTML);
		$('#logContent').val(rowData.cells[2].innerHTML);
		$('#operateStartTime').val(rowData.cells[3].innerHTML);
		$('#operateEndTime').val(rowData.cells[4].innerHTML);
		$("#logModalLabel").html("修改维护日志");
		$('#logModal').modal('show');
		document.getElementById("save").setAttribute("onclick", "logModify();");
		
	}
});

//
function logModify(){
	var logId = $('#logId').val();
	var operateType = $("#operateType").val();
	var logContent = $("#logContent").val();
	var operateStartTime = $("#operateStartTime").val();
	var operateEndTime = $("#operateEndTime").val();

	$.ajax({
		type : "POST",
		url : "./update",
		data : {
			"logMaintenance.logId" : logId,
			"logMaintenance.operateType" : operateType,
			"logMaintenance.logContent" : logContent,
			"logMaintenance.operateStartTime" : operateStartTime,
			"logMaintenance.operateEndTime" : operateEndTime
		},
		success : function(msg) {
			if (msg.code == 1) {
				alert("修改成功!");
				$('#logModal').modal('hide');
				start_search(1);
			} else {
				alert("修改失败\n");
			}
		}
	});	
}


$('#delete').click(function(){
	var rowData = getLastSelectedRowData();
	if ($('.success').length == 0) {
		alert('请选择数据项');
	} else{
		if(confirm("确定删除选中数据？") == false) {
			return 0;
		}
		var logId = rowData.getAttribute("logId");
		$.ajax({
			type : "POST",
			url : "./delete",
			data : {
				"logMaintenance.logId" : logId
			},
			success : function(msg) {
				if (msg.code == 1) {
					start_search(1);
				} else {
					alert("删除失败\n");
				}
			}
		});	
		
	}
});

$(function(){
	start_search(1);
});