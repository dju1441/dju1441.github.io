let passSave = "admin";


let passCount = 1;
let passMax = 3;

// this is what is called from the onsubmit
function checkPass() {

	// lets get what ever is in the form for password
	let passWord = document.forms["formName"]["password"].value;
	// note that we need both the forms name and the name of the input tha we want to get

	//first check if the user is below the max number of changes
	if (passCount <= passMax) {

		// Check if the passWord is  not correct
		if (passWord != passSave) {
			console.log(passCount);
			// make a var to hold the number of attempts left
			var attemptsLeft = 4 - passCount;

			//inform the user of how its going for them
			document.getElementById("passStatus").innerHTML = "Du har " + attemptsLeft + " försök kvar";

			// update the count for each failed password check
			passCount++;

			// then return false, so that the submit action wont run
			return false;
		} else {
			// if there is something in the password, return true so the submit action happends
			return true;
		}

	} else {
		// if the user is above the max changes for the password check they are locked out
		//inform the user of how its going for them
		document.getElementById("passStatus").innerHTML = "Försök igen";
		// and also make it red
		document.getElementById("passStatus").style.color = "tomato";
		return false;

	}
}

function makeCookie() {
	// this is how you make a cookie
	// its a way to save strings in for a "site"
	document.cookie = "username=Anna Star";
	// 
	//	By default, the cookie is deleted when the browser is closed
	// 	add the expires tag with a date to set how long the cookie show last
	console.log("make cookie");
	//when you make a cookie it will stay there for that site, refreshing the page normally wont remove it.
	// read more here: https://www.w3schools.com/js/js_cookies.asp
}

function getCookie() {
	// this is how you can get a cookie
	let cookie = document.cookie;
	// print it
	console.log(cookie);
	// get the value of the username out
	console.log(cookie.split("=")[1]);
	// split it on the "=" and use the second part
	// put it somewhere on a page
	document.getElementById("putThatCookieDown").innerHTML = cookie.split("=")[1];
}



