

	//获取cookie
	function getCookie (key) {
		var strArr = document.cookie.split(";");
		console.log(strArr)
		for (var i = 0; i < strArr.length; i++) {
			var c = strArr[i].split("=");
			console.log(c)
			if (c[i] == key) {
				return key + "=" + c[i];
			}
		}
	}
//创建cookie
	 var createCookie = function(key,value,time) {
		var d = new Date();
		d.setDate(d.getDate() + time);
		document.cookie = key + "=" + value + ";expires=" + d;
	}
//删除cookie
	function deleteCookie(key){
		var d = new Date();
		d.setDate(d.getDate() - 1);
		document.cookie = getCookie (key) + ";expires=" + d;
	}

	createCookie("dog","wangwang",2)

	alert(getCookie("dog"));

	deleteCookie("dog");

	alert(getCookie("dog"))

