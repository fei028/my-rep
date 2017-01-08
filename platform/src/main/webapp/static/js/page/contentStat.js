$.ajax({
	type : "POST",
	url : "./selectList",
	data : {
		
	},
	dataType : "json",
	
	success : function(result) {
		var data = result.data;
		var totalCount = result.recordsTotal;
		for(var i=0;i<data.length;i++){
			var td = $('#search_tbody td[value="'+data[i].subForumId+'"]');
			var tdNum = td.next().next();
			tdNum.html(data[i].num);
		}
	},
	error : function() {
		;
	}
});