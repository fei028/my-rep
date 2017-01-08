$(document).ready(function() {
	$("#multiSelectBtn").click( function () {
		$("#allList option:selected").each(function(){
            $("#selectedList").append("<option value='" + $(this).val() + "'>" + $(this).text() + "</option>");
            $("#allList option[value='" + $(this).val() + "']").remove();
        });
	} );
	
	$("#multiUnSelectBtn").click( function () {
		$("#selectedList option:selected").each(function(){
            $("#allList").append("<option value='" + $(this).val() + "'>" + $(this).text() + "</option>");
            $("#selectedList option[value='" + $(this).val() + "']").remove();
        });
	} );
	
	$("#allSelectBtn").click( function () {
		$("#allList option").each(function(){
            $("#selectedList").append("<option value='" + $(this).val() + "'>" + $(this).text() + "</option>");
            $("#allList option[value='" + $(this).val() + "']").remove();
        });
	} );
	
	$("#allUnSelectBtn").click( function () {
		$("#selectedList option").each(function(){
            $("#allList").append("<option value='" + $(this).val() + "'>" + $(this).text() + "</option>");
            $("#selectedList option[value='" + $(this).val() + "']").remove();
        });
	} );
	
	$("#allList").dblclick( function () {
		$("#allList option:selected").each(function(){
            $("#selectedList").append("<option value='" + $(this).val() + "'>" + $(this).text() + "</option>");
            $("#allList option[value='" + $(this).val() + "']").remove();
        });
	} );
	
	$("#selectedList").dblclick( function () {
		$("#selectedList option:selected").each(function(){
            $("#allList").append("<option value='" + $(this).val() + "'>" + $(this).text() + "</option>");
            $("#selectedList option[value='" + $(this).val() + "']").remove();
        });
	} );
});