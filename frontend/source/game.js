
let startGame = () => {
	let startPosition = document.getElementById("1")
	let currentPosition = startPosition
	var nc = ['<img src="media/nc/ncbody.png">', '<img src="media/nc/ncoo.png">', '<img src="media/nc/ncmouth.png">', '<img src="media/nc/nchair.png">', '<img src="media/nc/ncglasses.png">', '<img src="media/nc/nc80.png">'];
	var nicCage = nc[Math.floor(Math.random() * nc.length)];
	currentPosition.innerHTML = nicCage;
	console.log('top')
	console.log(currentPosition.innerHTML)

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
		currentPosition.innerHTML = '';
		currentPosition.innerHTML = nicCage;
		currentPosition.innerText = '';
		let newDivId = parseInt(currentPosition.id) + number;
		if (newDivId <= 100 && newDivId > 0){
			let newDiv = document.getElementById(newDivId);
			newDiv.innerHTML = nicCage;
			currentPosition = newDiv;
		}
	}
}
