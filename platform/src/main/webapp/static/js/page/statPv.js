
var methodTab = 0;
/**
 * 初始化检查
 */
function time_check(){
	if(methodTab == 0){
		if($('#hour_time').val()==""){
			alert("请指定日期！");
			return 0;
		}
	}
	else if(methodTab ==1 ){
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
	}
	else if(methodTab ==2 ){
		var startTime = $('#month_start_time').val();
		var endTime = $('#month_end_time').val();
		if(startTime=="" || endTime==""){
			alert("请选择时间区间！");
			return 0;
		}
		if(startTime > endTime){
			alert("起始时间必须大于结束时间！");
			return 0;
		}
	}

	return 1;
}

function start_search(){
	if( time_check()==1){
		/*$('#totalPage').css({'display': 'none'});
		$('#refresh_img').css({'display': 'inline'});*/
		
		/*if (indicator != 1 && indicator!=3) {
			$('#page-changed-text').attr("name", 1);
			$('#page-changed-text').attr("style","text-align:center;width:45px; margin-top:3px;");
			$('#display2').text("页");
		}*/
		if(methodTab==0){
			statType = 1;
			statDate1 = $("#hour_time").val();
			statDate2 = $("#hour_time").val();
		}
		else if(methodTab ==1){
			statType = 2;
			statDate1 = $("#day_start_time").val();
			statDate2 = $("#day_end_time").val();
		}
		else if(methodTab ==2){
			statType = 4;
			statDate1 = $("#month_start_time").val()+"-01";
			statDate2 = $("#month_end_time").val()+"-28";
		}
		else{
			alert("标签索引异常");
		}
		
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
				var data = result.data;
				var totalCount = result.recordsTotal;
				var cal = new Map();
				var seriesData = new Array();
				var legendData = new Array();
				if(methodTab==0){
					for(var i=0;i<data.length;i++){
						var d = data[i];
						cal[d.statHour] = d.statValue;
					}
					
					for(var i=0;i<24;i++){
						legendData.push(i);
						if(!cal[i]){
							seriesData.push(0);
						}else{
							seriesData.push(cal[i]);
						}
					}
					$('#timeUnit').html('小时');
				}else if(methodTab ==1){
					for(var i=0;i<data.length;i++){
						var d = data[i];
						cal[d.statDate] = d.statValue;
					}

					var date1 = new Date(statDate1);
					var date2 = new Date(statDate2);
					while(!(date1.getFullYear()==date2.getFullYear()&&date1.getMonth()==date2.getMonth()&&date1.getDate()==date2.getDate())){
						legendData.push(formatDate(date1,1));
						date1.setDate(date1.getDate()+1);
					}
					legendData.push(formatDate(date1,1));	
					
					for(i in legendData){
						if(!cal[legendData[i]]){
							seriesData.push(0);
						}else{
							seriesData.push(cal[legendData[i]]);
						}
					}
					$('#timeUnit').html('天');
				}else if(methodTab ==2){
					for(var i=0;i<data.length;i++){
						var d = data[i];
						cal[d.statDate.substring(0,7)] = d.statValue;
					}

					statDate1 = statDate1.substring(0,7);
					statDate2 = statDate2.substring(0,7);
					var date1 = new Date(statDate1);
					var date2 = new Date(statDate2);
					while(!(date1.getFullYear()==date2.getFullYear()&&date1.getMonth()==date2.getMonth())){
						legendData.push(formatDate(date1,2));
						date1.setMonth(date1.getMonth()+1);
					}
					legendData.push(formatDate(date1,2));	
					
					for(i in legendData){
						if(!cal[legendData[i]]){
							seriesData.push(0);
						}else{
							seriesData.push(cal[legendData[i]]);
						}
					}
					$('#timeUnit').html('月');
				}
				showChart(legendData,seriesData);
				
				
				var html = "";
				for (var i = 0; i < data.length; i++) {
					html += "<tr stat_id='"
							+ data[i].statId
							+ "' ondblclick='dbclick(this)'>"
							+ "<td>" + (i + 1)
							+ "</td>" + "<td>"
							+ legendData[i]+"时"
							+ "</td>" + "<td>"
							+ seriesData[i]
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

function showChart(legendData,seriesData){
	option = {
		    title : {
		        text: '访问量统计图',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'axis',
		        formatter: "时间：{b}<br />点击次数：{c}",
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        data:['折线图','柱状图'],
		        x:'left'
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            data : legendData
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		   
		    series : [
		        {
		            name:'柱状图',
		            type:'bar',
		            data:seriesData,
		        },
		        {
		            name:'折线图',
		            type:'line',
		          itemStyle:{
		    normal: {
		      label: {show:true, position: 'top', distance:50}
		    }
		  },  
		          data:seriesData,
		            markPoint : {
		                data : [
		                    {type : 'max', name: '最大值'},
		                    {type : 'min', name: '最小值'}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name: '平均值'}
		                ]
		            }
		        }
		    ]
		};


		chart = echarts.init(document.getElementById('pvChart'));
		chart.clear();
		chart.setOption(option,true);


}

function resetButton(method){
	if(methodTab==0){
		$('#hour_time').val("");
	}
	else if(methodTab==1){
		$('#day_start_time').val("");
		$('#day_end_time').val("");
	}
	if(methodTab==2){
		$('#month_start_time').val("");
		$('#month_end_time').val("");
	}
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

$('#myTab li').click(function(){
	methodTab = $(this).index();
} );


$(window).load(function(){
	methodTab = 0;
	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth()+1;
	month = month<10?"0"+month:month;
	var day = myDate.getDate();
	day = day<10?"0"+day:day;
	$('#hour_time').val(year+"-"+month+"-"+day);
	start_search();
});

