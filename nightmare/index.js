var loginUrl="https://portal.miun.se/c/portal/login?p_l_id=1060514&_miunRedirect=https%3A%2F%2Fportal.miun.se%2Fgroup%2Fstudent";
var schemaUrl="https://portal.miun.se/group/student/my-schedule";

var Nightmare = require('nightmare');

var grpRoom = new Nightmare()
	/*
	* Settings
	*/
	.viewport(1000,1000)
	.useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
	/*
	* Go to the bok group room page.
	*/
	.goto(loginUrl)
	.wait(1000)
	.type("input[id='username']", 'xxx')
	.type("input[id='password']", 'xxx')
	.click("input[name='submit']")
	.wait(1000)
	.goto(schemaUrl)
	.wait(7000)
	.evaluate(function(){ // adds attribute to the booking room button for eazier access
		document.getElementsByClassName("tab")[3].childNodes[1].setAttribute("data-menu", "book-group-room");
	})
	.click("a[data-menu='book-group-room']")
	.wait(3000)
	.select("select[class='aui-field-select']",'svl') // choice campus.
	.wait(3000)
	/*
	* Change date below.
	*/
	.inject('js', 'jQuery.js')
	.evaluate(function(){
		var dateMani = new Date();
		dateMani.setDate(dateMani.getDate()+12);
		var toSet = ""+(dateMani.getMonth()+1)+'/'+dateMani.getDate()+'/'+dateMani.getFullYear()+"";
		document.getElementById("calInput").value=toSet;
		document.getElementById("calInput").click();
		setTimeout(function(){},500);
		$("td:contains('"+dateMani.getDate()+"')").click();
	})
	.wait(2000)
	/*
	* pick and select room below
	*/
	.evaluate(function(){
		//Select all the "time intervals" for room.
		var elemArr = document.getElementById("M101").getElementsByTagName("td");
		for(var i = 0; i < elemArr.length; i++){
			elemArr[i].className += " selected"
		}
		document.getElementById("resRoom").innerHTML = "M101";
		document.getElementById("resStartTime").innerHTML = "08:00";
		document.getElementById("resEndTime").innerHTML = "19:00";
		/*
		*
		* BELOW IS THE PROBLEM (buttom clicking), if this is fixed automated study room booking will work.
		* All the "clicking" in the comments below (until end of file) works in the browser, but not in nightmare somehow.
		*
		*/
		//$("button:contains('Utför bokning')").click(); // More suggestions for clicking button is below (comment out).
		//document.getElementsByTagName("button")[1].click();
		//document.getElementsByTagName("button")[1].setAttribute("data-menu", "doItLikaALady");
		/*var bTags = document.getElementsByTagName("button");
		var searchText = "Utför bokning";
		for (var i = 0; i < bTags.length; i++) {
			if (bTags[i].innerHTML == searchText) {
				bTags[i].setAttribute('date-menu', 'doItLikaALady');
				break;
			}
		}*/
		/*
		var bTags = document.getElementsByTagName("button");
		var searchText = "Utför bokning";

		for (var i = 0; i < bTags.length; i++) {
			if (bTags[i].innerHTML == searchText) {
				bTags[i].click();
				break;
			}
		}
		*/
	})
	//.click("button[data-menu='doItLikaALady']")
	.wait(10000)
	.screenshot("progresspicture.png")
	.run(function(){console.log("Done!")})
	.end();