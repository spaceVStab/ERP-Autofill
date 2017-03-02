window.onload=function(){	
	document.getElementById('save').onclick=function(){
		var username = document.getElementById('username').value;
		var pass = document.getElementById('password').value;
		var firQues = document.getElementById('firQues').value;
		var secQues = document.getElementById('secQues').value;
		var thiQues = document.getElementById('thiQues').value;
		var firAns = document.getElementById('firAns').value;
		var secAns = document.getElementById('secAns').value;
		var thiAns = document.getElementById('thiAns').value;
		
		if(username==""||pass==""||firAns==""||firQues==""||secAns==""||secQues==""||thiAns==""||thiQues==""){
			alert("Invalid!!");
		}
		else{
		
		chrome.storage.local.set({'username':username,'password':pass,'firQues':firQues,'secQues':secQues,'thiQues':thiQues,'firAns':firAns,'secAns':secAns,
		'thiAns':thiAns}, function(){
			alert("Data Saved!!");
		})}
		
		
	}
}