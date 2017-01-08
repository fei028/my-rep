
/**
 * 初始化检查
 */
function time_check(){

	var startTime = $('#day_start_time').val();
	var endTime = $('#day_end_time').val();
	if(startTime=="" || endTime==""){
		alert("请选择时间区间！");
		return 0;
	}
	if(startTime > endTime){
		alert("起始时间必须大于结束时间！");
		return 0;
	}
	

	return 1;
}

function start_search(){
	if( time_check()==1){

		statType = 2;
		statDate1 = $("#day_start_time").val();
		statDate2 = $("#day_end_time").val();

		
		//获取选中的应用层协议
		$.ajax({
			type : "post",
			url : "./selectList",
			async : false,
			data : {
				statType : statType,
				statDate1 : statDate1,
				statDate2 : statDate2
			},
			dataType : "json",
			success : function(result) {
				var data = result.data.data;
				var forumNames = result.forumName;
				var subForumNames = result.subForumName;
				var contentNames = result.contentName;
				
				var totalCount = result.data.recordsTotal;
				var forumStat = new Map();
				var subForumStat = new Map();
				var contentStat = new Map();
				
				for(var i=0;i<data.length;i++){
					
					var d = data[i];
					if(d.forumId==0){
						continue;
					}

					if(!forumStat[d.forumId]){
						forumStat[d.forumId] = d.statValue;
					}
					else{
						forumStat[d.forumId] = forumStat[d.forumId] + d.statValue;
					}

					if(!subForumStat[d.subForumId]){
						subForumStat[d.subForumId] = d.statValue;
					}
					else{
						subForumStat[d.subForumId] = subForumStat[d.subForumId] + d.statValue;
					}

					var id = d.subForumId+"_"+d.contentId;
					if(!contentStat[id]){
						contentStat[id] = d.statValue;
					}
					else{
						contentStat[id] = contentStat[id] + d.statValue;
					}
					
				}

				//展示各版块分布
				var forumSeries = new Array();
				var forumLegend = new Array();
				for(f in forumStat){
					forumLegend.push(forumNames[f]);
					forumSeries.push({name:forumNames[f],value:forumStat[f]});
				}
				showChart1(forumLegend,forumSeries);

				
				//展示各子版块访问量排行
				var subForumSeries = new Array();
				var subForumLegend = new Array();
				for(f in subForumStat){
					subForumLegend.push(subForumNames[f]);
					subForumSeries.push(subForumStat[f]);
				}
				var bubbleResult = bubbleSort(0,subForumSeries, subForumLegend);
				subForumSeries = bubbleResult[0];
				subForumLegend = bubbleResult[1];
				showChart2(subForumLegend,subForumSeries);
				
				//展示各各文章访问量排行
				var contentId = new Array();
				var contentNum = new Array();
				for(f in contentStat){
					contentId.push(f);
					contentNum.push(contentStat[f]);
				}
				var bubbleResult = bubbleSort(1,contentNum, contentId);
				contentNum = bubbleResult[0];
				contentId = bubbleResult[1];
				var html = "";
				for (var i = 1; i <= contentId.length; i++) {
					var a = contentId[i-1].split('_');
					var sfId = a[0];
					var ctId = a[1];
					var url = $('#portalUrl').val().trim()+"/page/"+sfId+"/"+ctId+".html";
					html += "<tr contentId="+ctId+" subForumId="+sfId+">"
							+ "<td>" + i
							+ "</td>" + "<td>"
							+ "<a href="+url+" target='_blank' >"
							+ contentNames[ctId]
							+ "</a></td>" + "<td>"
							+ contentNum[i-1]
							+ "</td>"
							+ "</tr>";
				}
				$("#search_tbody").html(html);
				$("#total_count").html(totalCount);
			},
			error : function() {
				alert("系统异常，请稍后重试！");
			}
		});
	 }
}

function showChart1(legendData,seriesData){
	option = {
		    title : {
		        text: '版块访问量分布',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "版块名称：{b}<br /> 访问量： {c}&nbsp;({d})%",
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        data: legendData
		    },
		    series : [
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:seriesData,
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};


		forumChart = echarts.init(document.getElementById('forumChart'));
		forumChart.clear();
		forumChart.setOption(option,true);
}

function showChart2(legendData,seriesData){
	option = {		    
			title : {
		        text: '子版块访问量排行',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'axis',
		        formatter: "子版块名称：{b}<br /> 访问量： {c}",
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    }, 
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    yAxis : [
		        {
		            type : 'category',
		            data : legendData
		        }
		    ],
		    series : [
		        {
		            type:'bar',
		            stack: '总量',
		            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
		            data:seriesData
		        },
		        
		    ]
		};

	subForumChart = echarts.init(document.getElementById('subForumChart'));
	subForumChart.clear();
	subForumChart.setOption(option,true);
}

function resetButton(method){

	$('#day_start_time').val("");
	$('#day_end_time').val("");

}

function formatDate(date,type){
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	month = month<10?"0"+month:month;

	if(type==1){	
		var day = date.getDate();
		day = day<10?"0"+day:day;
		return year+"-"+month+"-"+day;
	}
	if(type==2){
		return year+"-"+month;
	}
}

function bubbleSort(type,array1,array2){
	var i = 0,
    len = array1.length,
    j, d;
    for (; i < len; i++) {
        for (j = 0; j < len; j++) {
            if (type==0 && array1[i] < array1[j]) {
                d = array1[j];
                array1[j] = array1[i];
                array1[i] = d;
                d = array2[j];
                array2[j] = array2[i];
                array2[i] = d;
            }
            if (type==1 && array1[i] > array1[j]) {
                d = array1[j];
                array1[j] = array1[i];
                array1[i] = d;
                d = array2[j];
                array2[j] = array2[i];
                array2[i] = d;
            }
        }
    }
    return [array1,array2];
}

function showPreview() {
	var rowData = getLastSelectedRowData();
	if($('.success').length==0){
		alert('请选择数据项');
	}else{
		var subForumId=rowData.getAttribute('subForumId');
		var contentId=rowData.getAttribute('contentId');
		var url = $('#portalUrl').val()+"/page/"+subForumId+"/"+contentId+".html";
		window.open(url);
	}
}
//双击事件
/*$('#example2 tbody').on( 'dblclick', 'tr', function () {
	var subForumId=$(this).attr('subForumId');
	var contentId=$(this).attr('contentId');
	var url = $('#portalUrl').val()+"/page/"+subForumId+"/"+contentId+".html";
	window.open(url);
    
} );*/

$(window).load(function(){

	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth()+1;
	month = month<10?"0"+month:month;
	var day = myDate.getDate();
	day = day<10?"0"+day:day;
	$("#day_start_time").val(year+"-"+month+"-"+day);
	$("#day_end_time").val(year+"-"+month+"-"+day);
	start_search();
});


