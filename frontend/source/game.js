
let startGame = () => {
	let startPosition = document.getElementById("1")
	let currentPosition = startPosition
	let nicCage = '<img src="media/ncbody.png">'
	currentPosition.innerHTML = nicCage

	document.body.onkeydown= event => {

		switch(event.keyCode){
			case 38:
				// moveUp(-10);
				currentPosition.innerText = ''
				let upDivId = parseInt(currentPosition.id) - 10
				let upDiv = document.getElementById(upDivId)
				upDiv.innerHTML = nicCage;
				currentPosition = upDiv;
				break;
			case 40:
				// moveDown();
				currentPosition.innerText = ''
				let downDivId = parseInt(currentPosition.id) + 10
				let downDiv = document.getElementById(downDivId)
				downDiv.innerHTML = nicCage;
				currentPosition = downDiv;
				break;
			case 39:
				currentPosition.innerText = ''
				let rightDivId = parseInt(currentPosition.id) + 1
				let rightDiv = document.getElementById(rightDivId)
				rightDiv.innerHTML = nicCage;
				currentPosition = rightDiv;
				break;
			case 37:
				// moveLeft();
				currentPosition.innerText = ''
				let leftDivId = parseInt(currentPosition.id) - 1
				let leftDiv = document.getElementById(leftDivId)
				leftDiv.innerHTML = nicCage;
				currentPosition = leftDiv;
				break;
		}
	// }
	// moveUp () => {
	//
	// }
	// moveDown () => {
	//
	// }
	// moveRight () => {
	//
	//
	// }
	// moveLeft () => {
	//
	}
}
