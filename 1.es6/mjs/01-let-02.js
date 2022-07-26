/* ==================== drawShape() ==================== */
function drawShape(){

	var mContent = document.getElementById("mContent");
	mContent.innerHTML = "";

	for(let i = 1; i<= 10; i++){
		var elmP	= document.createElement("p");
		elmP.innerHTML = i;
		// i = 10
		mContent.appendChild(elmP);

		elmP.onclick = function(){
			alert("Selected: #" + i);
		}
	}
}

/* ==================== clearShape() ==================== */
function clearShape(){
	var mContent = document.getElementById("mContent");
	mContent.innerHTML = "";
}