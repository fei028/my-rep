/**
 * 
 */
var forumId="";
var subForumId="";
var workStatus="";
var auditStatus="";
var contentTitle="";
var subForumMap = {};

function getLastSelectedRowData(){
	var sid=$('.success');
	var lastSelected=0;
    for(var i=0;i<sid.length;i++){
    	if(sid[i].getAttribute('data-num')>sid[lastSelected].getAttribute('data-num')){
    		lastSelected=i;
    	}
    }
    return sid[lastSelected];
}

/*根据条件查询数据*/
function selectAudit(num){
	return $('#auditStatus  option[value='+num+']').text();
}
function selectWork(num){
	return $('#workStatus  option[value='+num+']').text();
}

function selectForum(num){
	return $('#forumId  option[value='+num+']').text();
}
function selectSubForum(num){
	return $('#subForumId  option[value='+num+']').text();
}
function getId(num){
	if(num==null || num==0)
		return '';
	return num;
}



$('#audit').click(function(){
	var num = $('.success');
	if(num.length==0){
		alert('请选择数据项');
	}else if(num.length>1){
		alert('请选择一项');
	}else{
		var id=$('.success').attr('contentid');
		$('#auditModal').modal('show');

		$("#save").unbind();	//先取消原有的绑定
		$('#save').click(function(){
			//start_search(getCurrentPage());
			forumId=$("select[name=forumId]").val();	
			subForumId=$("select[name=subForumId]").val();
			
			$.ajax({
				type:"post",
				url:"./update2",
				contentType:"application/x-www-form-urlencoded; charset=UTF-8",
				data:{
					"contentSpider.contentId":id,
					"contentSpider.forumId":forumId,
					"contentSpider.subForumId":subForumId,
				},
				success:function(msg)
				{			
					if(msg.code == 1) {
						alert("审核完成!");
						$('#auditModal').modal('hide');
						start_search(getCurrentPage());
					}
					else {
						alert("审核失败!");
					}
				}
			});
		  }
		);
		
	}
});

//初始化子版块map
{
	var options = $('#subForumId option');
	for(var i=0;i<options.length;i++){
		var key = options.eq(i).val();
		if(key==""){
			continue;
		}
		subForumMap[key]=$('#subForumId  option[value='+key+']').text();
	}
}

function changSubForum(){
	var a = $('#forumId').val();
	$('#subForumId').empty();
	$("#subForumId").append('<option value="">全部</option>');
	for(var o in subForumMap){
		if(o!=""){
			var b=o.substring(0,2);
			if(b==a){
				$("#subForumId").append('<option value='+o+'>'+subForumMap[o]+'</option>');
    		}
		}
	}
	$('#subForumId').val("");
}


function getCurrentPage(){
	return $('#paginator li.active').text();
}


$(function() {
	start_search(1);
});




function start_search(currentPage) {
	var beginIndex = (currentPage - 1) * PAGE_SIZE;
	var beginNumber = (currentPage - 1) * PAGE_SIZE + 1;
	var endNumber = beginNumber + PAGE_SIZE - 1;


	$("#begin_number").html(beginNumber);
	$("#end_number").html(endNumber);
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
				html += "<tr contentId='" + data[i].contentId + "' ondblclick='dbclick(this)'>"
					  + "<td>" + (i + 1) + "</td>" 
					  + "<td>" + data[i].contentTitle + "</td>"
					  + "<td>" + getId(data[i].forumId) + "</td>"
					  + "<td>" + getId(data[i].subForumId) + "</td>"
					  +"<td>"+auditMap[data[i].auditStatus]+"</td>"
					  + "</tr>";
				//alert(1);
						
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


$('#detail').click(function(){
	var num = $('.success');
	if(num.length==0){
		alert('请选择数据项');
	}else if(num.length>1){
		alert('请选择一项');
	}else{
		var id=$('.success').attr('contentid');
		window.open("../page/Detail.html?"+id);
	}
});

$('#delete').click(function(){
	var num = $('.success');
	if(num.length==0){
		alert('请选择数据项');
	}else {
		var r=confirm("你确认删除吗？"); 
		if (r==true){
			$('.success').each(function(){
				deviceDelete($(this).attr('contentid'));
			});
			
		}
	}
});
function deviceDelete(Id)
{
	//$(event.target).closest("tr").remove();
	$.ajax({
		type:"post",
		url:"./delete",
		async:false,
		contentType:"application/x-www-form-urlencoded; charset=UTF-8",
		data:{contentId:Id},
		success:function(data)
		{
			//sj_write();
			if(data.code==1){
				start_search(getCurrentPage());
				return;
			}
			else{
				alert("删除失败");
			}
			
		}
	});
	
	start_search(getCurrentPage());	
}