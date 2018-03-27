
let startGame = () => {
	let startPosition = document.getElementById("1")
	let currentPosition = startPosition
	let nicCage = '<img src="media/ncage.png">'
	currentPosition.innerHTML = nicCage

	document.body.onkeydown= event => {

		switch(event.keyCode){
			case 38:
			// up
				move(-10);
				break;
			case 40:
			// down
				move(10);
				break;
			case 39:
			// right
				move(1);
				break;
			case 37:
				// left
				move(-1);
				break;
		}
	}
	move = (number) => {
		currentPosition.innerText = '';
		let newDivId = parseInt(currentPosition.id) + number;
		if (newDivId <= 100 && newDivId > 0){
			let newDiv = document.getElementById(newDivId);
			newDiv.innerHTML = nicCage;
			currentPosition = newDiv;
		}
	}
}
