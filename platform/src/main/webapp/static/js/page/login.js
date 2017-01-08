$(document).ready(function() {
	$("#login").click( function() {
		var username = $("#username").val();
		var password = $("#password").val();
		
		if(username.length == 0)
		{
			alert("请输入用户名");
			return;
		}
		
		if(password.length == 0)
		{
			alert("请输入密码");
			return;
		}
		
		$.ajax({
			type: "POST",
			url: "./auth",
			data: {
				username : username,
				password : password
			},
			success: function(msg){
				if(msg.code == 1) {
					window.location.href = "../home/open";
				}
				else {
					alert(msg.msg);
				}
			}
		});
	}); 
	
	$(document).keyup(function(event) {
		if(event.keyCode == 13) {
			$("#login").click();
		}
	});
});