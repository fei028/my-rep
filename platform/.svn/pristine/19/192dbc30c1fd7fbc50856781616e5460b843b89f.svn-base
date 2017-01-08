var hourLegend = new Array();
var hourSeries = new Array();
var dayLegend = new Array();
var daySeries = new Array();

function start_search(methodTab){
	if(methodTab==0){
		statType = 1;
		day = new Date();
		day.setDate(day.getDate());
		statDate1 = formatDate(day, 1);
		statDate2 = statDate1;
	}
	else if(methodTab ==1){
		statType = 2;
		day = new Date();
		day.setDate(day.getDate());
		statDate2 = formatDate(day, 1);
		day.setDate(day.getDate()-6);
		statDate1 = formatDate(day, 1);
	}
	//获取选中的应用层协议
	$.ajax({
		type : "post",
		url : "../statPv/selectList",
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
			if(methodTab==0){
				for(var i=0;i<data.length;i++){
					var d = data[i];
					cal[d.statHour] = d.statValue;
				}
				
				for(var i=0;i<24;i++){
					hourLegend.push(i);
					if(!cal[i]){
						hourSeries.push(0);
					}else{
						hourSeries.push(cal[i]);
					}
				}
				divId = 'chart2';
				title = statDate1 + '全天访问量统计图';
			}else if(methodTab ==1){
				for(var i=0;i<data.length;i++){
					var d = data[i];
					cal[d.statDate] = d.statValue;
				}

				var date1 = new Date(statDate1);
				var date2 = new Date(statDate2);
				while(!(date1.getFullYear()==date2.getFullYear()&&date1.getMonth()==date2.getMonth()&&date1.getDate()==date2.getDate())){
					dayLegend.push(formatDate(date1,1));
					date1.setDate(date1.getDate()+1);
				}
				dayLegend.push(formatDate(date1,1));	
				
				for(i in dayLegend){
					if(!cal[dayLegend[i]]){
						daySeries.push(0);
					}else{
						daySeries.push(cal[dayLegend[i]]);
					}
				}
				divId ='chart1';
				title = '最近七日访问量统计图';
			}
		},
		error : function() {
			alert("系统异常，请稍后重试！");
		}
	});

}




function showChart1(title,legendData,seriesData){
	//按天统计图表
	option = {
		    title : {
		        text: title,
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


		chart.clear();
		chart.setOption(option,true);

}


//版块统计
function search_forum(){
	statType = 2;
	day = new Date();
	day.setDate(day.getDate());
	statDate2 = formatDate(day, 1);
	day.setDate(day.getDate()-6);
	statDate1 = formatDate(day, 1);

	
	//获取选中的应用层协议
	$.ajax({
		type : "post",
		url : "../statPvPage/selectList",
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
			
			var totalCount = result.data.recordsTotal;
			var forumStat = new Map();
			
			for(var i=0;i<data.length;i++){
				var d = data[i];

				if(!forumStat[d.forumId]){
					forumStat[d.forumId] = d.statValue;
				}
				else{
					forumStat[d.forumId] = forumStat[d.forumId] + d.statValue;
				}
			}

			//展示各版块分布
			var forumSeries = new Array();
			var forumLegend = new Array();
			for(f in forumStat){
				forumLegend.push(forumNames[f]);
				forumSeries.push({name:forumNames[f],value:forumStat[f]});
			}
			showChart2(forumLegend,forumSeries);
		},
		error : function() {
			alert("系统异常，请稍后重试！");
		}
	});
}


function showChart2(legendData,seriesData){
	option = {
		    title : {
		        text: '过去七日各版块访问量分布',
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


		forumChart = echarts.init(document.getElementById('pie'));
		forumChart.clear();
		forumChart.setOption(option,true);
}


/*
 * 首页待办事项
 */
var beginIndex = 0;
var manSysMissionPageSize = 6;
var queryMissionStatus = "0";

$.ajax({
			type : "POST",
			url : "../sysMission/querySelectList",
			async : false,
			data : {
				start : beginIndex,
				length : manSysMissionPageSize,
				queryMissionContent : "",
				queryMissionType :"",
				queryMissionStatus : queryMissionStatus
			},
			dataType : "json",
			success : function(result) {
				var data = result.data;
				var totalCount = result.recordsTotal;
				console.log(data);

				var html = "";
				
				for (var i = 0; i < data.length; i++) {
					var missionContent = "";
		
					html += "<li><span class='handle'> <i class='fa fa-ellipsis-v'></i> <i class='fa fa-ellipsis-v'></i></span> <span class='text'>"
							+ data[i].missionContent
							+ "</span> <small class='label label-info'><i class='fa fa-clock-o'></i>  "
							+ data[i].createTime.substr(5,11) + "</small></li>";
				}

				$("#mainSysMission").html(html);
			}
		});

/*
 * initialize the calendar
 * -----------------------------------------------------------------
 */
// Date for the calendar events (dummy data)
function initCalender(){

	var calEvents = new Array();
	$.ajax({
		type : "POST",
		url : "../logMaintenance/selectList",
		data : {
			start:0,
			length:9999
		},
		async:false,
		dataType : "json",
		
		success : function(result) {
			var data = result.data;
			var totalCount = result.recordsTotal;
			
			for(var i=0;i<data.length;i++){
				var startT = data[i].operateStartTime;
				startT = new Date(startT.replace(/-/g,"/"));
				var endT = data[i].operateEndTime;
				if(endT!=null){
					endT = new Date(endT.replace(/-/g,"/"));
				}
				else{
					endT = "";
				}
				calEvents.push({title:data[i].logContent,start:startT,end:endT});
			}
			
		},
		error : function() {
			;
		}
	});
	
	var date = new Date();
	var d = date.getDate(), m = date.getMonth(), y = date.getFullYear();
	$('#calendar').fullCalendar({
		header : {
			left : 'prev,next,today',
			center : 'title',
			right : ''
		},
		buttonText : {
			today : '当月'
		},
		monthNames:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
		dayNames:['周日','周一','周二','周三','周四','周五','周六'],
		dayNamesShort:['周日','周一','周二','周三','周四','周五','周六'],
		
		
		// Random default events
		events : calEvents,
		editable : true,
		droppable : true, // this allows things to be dropped onto the calendar
							// !!!
		drop : function(date, allDay) { // this function is called when something is
			// dropped
	
			// retrieve the dropped element's stored Event Object
			var originalEventObject = $(this).data('eventObject');
	
			// we need to copy it, so that multiple events don't have a reference to
			// the
			// same object
			var copiedEventObject = $.extend({}, originalEventObject);
	
			// assign it the date that was reported
			copiedEventObject.start = date;
			copiedEventObject.allDay = allDay;
			copiedEventObject.backgroundColor = $(this).css("background-color");
			copiedEventObject.borderColor = $(this).css("border-color");
	
			// render the event on the calendar
			// the last `true` argument determines if the event "sticks"
			// (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
			$('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
	
			// is the "remove after drop" checkbox checked?
			if ($('#drop-remove').is(':checked')) {
				// if so, remove the element from the "Draggable Events" list
				$(this).remove();
			}
	
		}
	});

}
initCalender();

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

$('a[href="#revenue-chart"]').click(function() {
	showChart1("最近七日的访问量统计图",dayLegend,daySeries);
});
$('a[href="#sales-chart"]').click(function() {
	showChart1("今日全天访问量统计图",hourLegend,hourSeries);
});

chart = echarts.init(document.getElementById("chart1"));
start_search(1);
start_search(0);
$('a[href="#revenue-chart"]').click();
search_forum();
