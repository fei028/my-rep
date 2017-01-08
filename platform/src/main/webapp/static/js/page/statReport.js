var selectId = new Array();
var interval = 0;

function loading_start() {
	if(interval){
		clearInterval(interval);
	}
    $("#progress-bar").css('width', 0);
    var percent = 0;
    interval = setInterval(
    function(){
        percent += 1;
        if (percent == 100) {
            percent = 99;
        }
        if (percent < 100) {
            $("#progress-bar").css('width', percent + '%');
        }
    }, 1);
}

function loading_complete() {
	$("#progress-bar").css('width', '100%');
	clearInterval(interval);
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
				html += "<tr reportId='" + data[i].reportId
						+ "'reportName='" + data[i].reportName
						+ "' ondblclick='dbclick(this)'>" + "<td>" + (i + 1)
						+ "</td>" + "<td>" + data[i].reportType + "</td>"
						+ "<td>" + data[i].startTime + "</td>" + "<td>"
						+ data[i].endTime + "</td>" + "<td>"
						+ data[i].reportName + "</td>" + "<td>"
						+ data[i].reportDesc + "</td>" + "<td>"
						+ data[i].workStatus + "</td>" + "<td>"
						+ data[i].userName + "</td>" + "<td>"
						+ data[i].createTime + "</td>"

						+ "</tr>";

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
function init() {

	document.getElementById("report").style.display = "inline";
	$("#reportDesc").val("");
}
function time_check() {
	var startTime = $('#startTime').val();
	var endTime = $('#endTime').val();
	if (startTime == "" || endTime == "") {
		alert("请选择时间区间！");
		return 0;
	}
	if (startTime > endTime) {
		alert("起始时间必须大于结束时间！");
		return 0;
	}
	return 1;
}
function birtReport() {
	var reportName = $('#reportName').val();
	if (reportName == "") {
		alert("报表名不为空！");
		return;
	}

	if (time_check() == 1) {

		$('#myModal2').modal('show');
		$("#progress-bar").css('width', 0);
		// $(".progress").css("display","block");
		loading_start();

		statDate1 = $("#startTime").val();
		statDate2 = $("#endTime").val();
		
		var reportDesc = $("#reportDesc").val();

		$.ajax({
			type : "post",
			url : "./insert",
			async : false,
			data : {
				reportName : reportName,
				reportDesc : reportDesc,
				startTime : statDate1,
				endTime : statDate2
			},
			dataType : "json",
			success : function(msg) {
				
				
				if (msg.code == 1) {
				//	alert("报表插入成功！");
					loading_complete();
					$('#myModal2').modal('hide');
					$('#statReportModel').modal('hide');
					window.location.href = "../statReport/open";
					// alert("Insert success!");
				} else {
					alert(msg.msg);
				}

			}
		});

	}

	// &sample=my+parameter
	// window.open("/manage/frameset?__report=/report/statPv.rptdesign&__masterpage=true&__format=doc");

}

 // 下载按钮的方法
$('#reportDownload').click( function() 
{ 
	var num = $('.success');		
	if (num.length == 0) 
	{ 
		alert('请选择数据项'); 
	}
	else if (num.length > 1) 
	{
		alert('请选择一项'); 
	} 
	else { 
		var rowData = $('.success')[0]; 
		var reportName =rowData.getAttribute('reportName');
		//alert(reportName);
		$.ajax({ 
			type : "post",
			url :"./getDownloadPath", 
			async : false,
			data : { reportName : reportName },
			dataType : "json", 
			success : function(result) { 
					var filePath = result.path;
		//			alert(filePath);

					var name=$('.success').attr('name');
					var path=$('.success').attr('path');
					var href='../report/'+reportName+'.pdf.zip';
					//window.location.href=href;
					window.open(href);
			} 
 });
	}
	});

$('#reportDelete').click( function() 
{ 
	
		selectId = $('.success');
		if (selectId.length == 0) {
			alert('请选择数据项');
		} else {
			var str = "确定删除报表：";

			for (var i = 0; i < selectId.length - 1; i++) {
				str = str + ' "'
						+ selectId[i].getAttribute('reportName')
						+ '" 、';
			}
			str = str + ' "'
					+ selectId[i].getAttribute('reportName')
					+ '"';

			var confirmMessage = confirm(str);
			if (confirmMessage == true) {
				reportDelete();
			}
		}
});

 function  reportDelete()
 {
	 var reportDeleteId = "";
		var reportDeleteName = "";
		for (var i = 0; i < selectId.length - 1; i++) {
			reportDeleteId = reportDeleteId + selectId[i].getAttribute('reportId')+ ",";
			reportDeleteName = reportDeleteName + selectId[i].getAttribute('reportName')+ ",";
					}
		reportDeleteId = reportDeleteId + selectId[i].getAttribute('reportId');
		reportDeleteName = reportDeleteName + selectId[i].getAttribute('reportName');
	
		$.ajax({
			type : "POST",
			url : "./delete",
			async : false,
			data : {
				"reportDeleteId" : reportDeleteId,
				"reportDeleteName":reportDeleteName
			},
			success : function(msg) {
				if (msg.code == 1) {
					alert("删除成功!");
					window.location.href = "../statReport/open";
					
				} else {
					alert(msg.msg);
				}
			}
		});
 }
 
 

$(function() {
	start_search(1);

	
	// getAllRole();
	$("#birtReport").click(
			function() {

				init();
				$("#statReportModalLabel").html("生成报表");
				document.getElementById("report").setAttribute("onclick",
						"birtReport();");
				$('#statReportModal').modal('show');

			});

});
