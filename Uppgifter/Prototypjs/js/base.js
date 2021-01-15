// kod för cookie
let cookie = document.cookie;
// splittar cookies innehåll och tar ut det som är på plats nr två i innehållet 
let cookieValue=cookie.split("=")[1];
// här skriver consolen Anna Star
console.log(cookieValue);

//här hämtar dokumentet id:en "formnamn" från html och skriver ut namnet Anna Star
if (cookieValue=="anna@star.se"){
	
	document.getElementById("formName").innerHTML ="Anna Star"; 
} 

	