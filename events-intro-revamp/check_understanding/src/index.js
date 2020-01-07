
//step 1: select elements to attach event listeners
let alertBtn = document.querySelector("#alert")
let consoleBtn = document.querySelector("#log")

//two ways to pass a callback, as anonymous, or as variable

document.addEventListener('DOMContentLoaded', function(){
	//step 2: attach event listeners after Dom has loaded
	alertBtn.addEventListener('click', handleAlertClick)
	alertBtn.addEventListener('pointerover', handleAlertHover)

	consoleBtn.addEventListener('click', consoleSomething)
})


//step 3: determine what happens for each listener, when will these functions be run?
function handleAlertClick(){

	window.alert("THIS IS AMAZING")
}

function handleAlertHover(){

	console.log("This button will trigger an alert!")

}

function consoleSomething(){

	console.log("Hey this is important!!")
}

