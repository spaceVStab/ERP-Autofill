
var username = "";
document.getElementById("user_id").addEventListener("click", enterUserFill);
var i = 0;
function enterUserFill(){
	chrome.storage.local.get('username', function(data){
			username = data.username;
		})
	function myloop(){
		setTimeout(function(){
					document.getElementById("user_id").value += username[i];
					i++;
					if(i<username.length){
						myloop();
					}
					else{i=0;}
				},50)
	}
	myloop();
}
var passwords = "";
document.getElementById("password").addEventListener("click", enterPassFill)
var j = 0;
function enterPassFill(){
	chrome.storage.local.get('password', function(pass){
			passwords = pass.password;
		})
	function passloop(){
		setTimeout(function(){
			document.getElementById("password").value += passwords[j];
			j++;
			if(j<passwords.length){
				passloop();
			}
		},50)
	}
	passloop();
}
var myQues1 = "";
chrome.storage.local.get('firQues', function(data){
			myQues1 = data.firQues;
})
var ans1 = "";
chrome.storage.local.get('firAns', function(data){
			ans1 = data.firAns;
})
var myQues2 ="";
chrome.storage.local.get('secQues', function(data){
			myQues2 = data.secQues;
})
var ans2 = "";
chrome.storage.local.get('secAns', function(data){
			ans2 = data.secAns;
})
var myQues3 = "";
chrome.storage.local.get('thiQues', function(data){
			myQues3 = data.thiQues;
})
var ans3="";
chrome.storage.local.get('thiAns', function(data){
			ans3 = data.thiAns;
})
var k = 0;

document.getElementById("answer").addEventListener("click", enterQuesFill)
function enterQuesFill(){
	var ques = document.getElementById("question").innerHTML;
	if(ques == myQues1){
		function ansloop(){
		setTimeout(function(){
			document.getElementById("answer").value += ans1[k];
			k++;
			if(k<ans1.length){
				ansloop();
			}
		},50)
		}
		ansloop();
	}
	
	if(ques == myQues2){
		function ansloop(){
		setTimeout(function(){
			document.getElementById("answer").value += ans2[k];
			k++;
			if(k<ans2.length){
				ansloop();
			}
		},50)
		}
		ansloop();
	}
	
	if(ques == myQues3){
		function ansloop(){
		setTimeout(function(){
			document.getElementById("answer").value += ans3[k];
			k++;
			if(k<ans3.length){
				ansloop();
			}
		},50)
		}
		ansloop();
	}
}


