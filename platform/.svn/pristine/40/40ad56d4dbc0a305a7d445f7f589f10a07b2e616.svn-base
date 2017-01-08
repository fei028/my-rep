var forumId="";
var subForumId="";
var workStatus="";
var auditStatus="";
var contentTitle="";
var subForumMap = {};

function init(){
	/*$("select[name=spread]").val(0);*/
		
	$("input[name=title]").val("");
	$("input[name=title]").removeAttr("disabled");
	$("input[name=forum]").val("");
	$("input[name=forum]").removeAttr("disabled");
	$("input[name=abstract]").val("");
	$("input[name=abstract]").removeAttr("disabled");
	$("input[name=key]").val("");
	$("input[name=key]").removeAttr("disablshowWin3ed");
	$("input[name=photo]").val("");
	$("input[name=photo]").removeAttr("disabled");
	$("input[name=article]").val("");
	$("input[name=article]").removeAttr("disabled");
	$("input[name=publishTime]").val("");
	$("input[name=publishTime]").removeAttr("disabled");
	$("input[name=showIndex]").val("");
	$("input[name=showIndex]").removeAttr("disabled");
	$("input[name=workStatus]").val(0);
	$("input[name=workStatus]").removeAttr("disabled");
	$("input[name=auditStatus]").val(0);
	$("input[name=auditStatus]").removeAttr("disabled");
	
}

/*根据条件查询数据*/
function selectAudit(num){
	if(num==0){
		return "未审核";
	}else if(num==1){
		return "审核通过";
	}else if(num==2){
		return "审核失败";
	}
}
function selectWork(num){
	if(num==0){
		return "正常";
	}else if(num==1){
		return "暂停";
	}else if(num==2){
		return "终止";
	}
}
function selectForum(num){
	return "版块"+(num+1);
}
function start_search(currentPage) {
	

	
	var beginIndex = (currentPage - 1) * PAGE_SIZE;
	var beginNumber = (currentPage - 1) * PAGE_SIZE + 1;
	var endNumber = beginNumber + PAGE_SIZE - 1;

	$("#begin_number").html(beginNumber);
	$("#end_number").html(endNumber);
	contentTitle= $("input[name='contentTitle']").val();
	$.ajax({
		type : "POST",
		url : "./selectList",
		data : {
			start : beginIndex,
			length : PAGE_SIZE,
			contentTitle : contentTitle,
			workStatus : workStatus,
			auditStatus : auditStatus,
			forumId : forumId,
			subForumId : subForumId
		},
		dataType : "json",
		
		success : function(result) {
			var data = result.data;
			var totalCount = result.recordsTotal;
			
			var html = "";
			for(var i = 0; i < data.length; i++) {
				html += "<tr contentId='" + data[i].contentId +  "' workStatus='" + data[i].workStatus + "' auditStatus='" + data[i].auditStatus +"' ondblclick='dbclick(this)'>"
					  + "<td>" + (i + 1) + "</td>" 
					  + "<td>" + data[i].contentTitle + "</td>"
					  +"<td>"+selectForum(data[i].forumId)+"</td>"
					  +"<td>"+data[i].contentIndex+"</td>"
					  + "<td>" + selectWork(data[i].workStatus) + "</td>"
					  + "<td>" + selectAudit(data[i].auditStatus) + "</td>"
					  + "<td>" + data[i].publishTime + "</td>"
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
$('#manage').click(function(){
	getCurrentPage();
	var rowData = getLastSelectedRowData();
	if($('.success').length==0){
		alert('请选择数据项');
	}else{  
		$('#manageModal').modal('show');			
		init();
		alert(rowData.getAttribute('workStatus'))
		$("input[name=manContentId]").val(rowData.getAttribute('contentId'));
		$("select[name=manWorkStatus]").val(rowData.getAttribute('workStatus'));
		$("select[name=manAuditStatus]").val(rowData.getAttribute('auditStatus'));
	}
});

$('#save').click(function(){
	//start_search(getCurrentPage());
	manContentId=$("input[name=manContentId]").val();
	manWorkStatus=$("select[name=manWorkStatus]").val();	
	manAuditStatus=$("select[name=manAuditStatus]").val();
	$.ajax({
		type:"get",
		url:"./update",
		contentType:"application/x-www-form-urlencoded; charset=UTF-8",
		data:{
			"contentLab.contentId":manContentId,
			"contentLab.workStatus":manWorkStatus,
			"contentLab.auditStatus":manAuditStatus
		},
		success:function(msg)
		{			
			if(msg.code == 1) {
				alert("审核通过!");
				$('#manageModal').modal('hide');
				start_search(getCurrentPage());
			}
			else {
				alert("审核失败!\n"+msg.msg);
			}
		}
	});
  }
);

$('#detail').click(function(){
	var num = $('.success');
	if(num.length==0){
		alert('请选择数据项');
	}else if(num.length>1){
		alert('请选择一项');
	}else{
		var id=$('.success').attr('contentid');
		$('#myDetail').modal('show');
		//init();
		$.ajax({
			type:"get",
			url:"./detail",
			contentType:"application/x-www-form-urlencoded; charset=UTF-8",
			data:{
				contentId:id
			},
			success:function(data)
			{
			
				$("input[name=title]").val(data.data[0].contentTitle);
				$("input[name=forum]").val(data.data[0].forumId);
				$("input[name=abstract]").val(data.data[0].contentAbstract);
				$("input[name=key]").val(data.data[0].contentKeywords);
				$("input[name=photo]").val(data.data[0].urlListImg);
				$("input[name=article]").val(data.data[0].contentText);
				$("input[name=publishTime]").val(data.data[0].publishTime);
				$("input[name=showIndex]").val(data.data[0].contentIndex);
				$("input[name=workStatus]").val(data.data[0].workStatus);
				$("input[name=auditStatus]").val(data.data[0].auditStatus);
				
			}
		});
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
			sj_write();
			start_search(1);
		}
	});
	
	start_search(1);	
}
function showWin1(numflag) {
	if(numflag==1)
	{
		window.location.href="../contentLab/openInsert";
	
	}
}

function showWin2(flag){
	var f = flag;
	var num = $('.success');
	if(num.length==0){
		alert('请选择数据项');
	}else {changeCheckPass(f);
	$('#checkModal').modal({
		show:true
	})
		
		//changeCheckPass(f);
		//$('#checkModal').modal({
			//show:true
		//})
			
	}
}

function staticPage(){
	$.ajax({
		type:"post",
		url:"./publishPage",
		async:false,
		contentType:"application/x-www-form-urlencoded; charset=UTF-8",
		data:{},
		success:function(data)
		{
			alert(data.code);
		}
	});
}

$(function() {
	start_search(1);
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

function search(){
	workStatus = $("#workStatus").val();
	auditStatus = $("#auditStatus").val();
	forumId = $("#forumId").val();
	subForumId = $("#subForumId").val();
	contentTitle = $("#contentTitle").val();
	//alert(workStatus+" " +auditStatus+" "+ forumId+" "+contentTitle);
	start_search(1);
}

function resetButton(){
	$("#workStatus").val("");
	$("#auditStatus").val("");
	$("#forumId").val("");
	$("#subForumId").val("");
	$("#contentTitle").val("");
}

function showPreview() {
	var rowData = getLastSelectedRowData();
	if($('.success').length==0){
		alert('请选择数据项');
	}else{
		if(rowData.getAttribute('auditStatus')!=1){
			alert('该文章尚未通过审核，尚未发布');
			return;
		}
		var subForumId=rowData.getAttribute('subForumId');
		var contentId=rowData.getAttribute('contentId');
		var url = $('#portalUrl').val()+"/page/"+subForumId+"/"+contentId+".html";
		window.open(url);
	}
}
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

function getCurrentPage(){
	return $('#paginator li.active').text();
}

