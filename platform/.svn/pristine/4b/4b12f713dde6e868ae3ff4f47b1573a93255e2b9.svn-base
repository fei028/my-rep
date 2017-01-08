/*根据条件查询数据*/
function start_search(currentPage) {
	var beginIndex = (currentPage - 1) * PAGE_SIZE;
	var beginNumber = (currentPage - 1) * PAGE_SIZE + 1;
	var endNumber = beginNumber + PAGE_SIZE - 1;

	$("#begin_number").html(beginNumber);
	$("#end_number").html(endNumber);
	
	$.ajax({
		type : "POST",
		url : "./selectList.action",
		data : {
			start : beginIndex,
			length : PAGE_SIZE
		},
		dataType : "json",
		success : function(result) {
			var data = result.data;
			var totalCount = result.recordsTotal;
			
			var html = "";
			for(var i = 0; i < data.length; i++) {
				html += "<tr functionId='" + data[i].functionId + "'>"
					  + "<td>" + (i + 1) + "</td>" 
					  + "<td>" + data[i].functionName + "</td>"
					  + "<td>" + data[i].functionDesc + "</td>"
					  + "<td>" + data[i].functionUrl + "</td>"
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

$(function() {
	start_search(1);
});