
/**
 * 复选框全选(取消全选)操作
 * @param obj 负责全选(取消全选)的复选框
 * @param checkBoxName
 */
function checkAll(obj,checkBoxName){
	
	$("input[type='checkbox'][name='"+checkBoxName+"']").prop("checked", obj.checked);
	$(obj).attr('title',obj.checked == true ? '取消全选' : '全选');
}