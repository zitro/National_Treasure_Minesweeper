
let startGame = () => {
	let brick = '<img src="media/brick.png">'
	let startPosition = document.getElementById("1")
	let currentPosition = startPosition
	let nc = ['<img src="media/nc/ncbody.png">', '<img src="media/nc/ncoo.png">', '<img src="media/nc/ncmouth.png">', '<img src="media/nc/nchair.png">', '<img src="media/nc/ncglasses.png">' ,'<img src="media/nc/nc80.png">']
	let nicCage = nc[Math.floor(Math.random()*nc.length)];

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
		currentPosition.innerHTML = brick;
		let newDivId = parseInt(currentPosition.id) + number;
		if (newDivId <= 100 && newDivId > 0){
			let newDiv = document.getElementById(newDivId);
			newDiv.innerHTML = nc[Math.floor(Math.random()*nc.length)];
			currentPosition = newDiv;
		} else if (newDivId < 0){
			newDivId = newDivId + 100
			let newDiv = document.getElementById(newDivId);
			newDiv.innerHTML = nc[Math.floor(Math.random()*nc.length)];
			currentPosition = newDiv;
		}else if (newDivId > 100){
			newDivId = newDivId - 100
			let newDiv = document.getElementById(newDivId);
			newDiv.innerHTML = nc[Math.floor(Math.random()*nc.length)];
			currentPosition = newDiv;
		}
		hitBomb = () => {
			if (currentPosition.className === 'bomb'){
				//decriment life meter
				//make an alert saying you lost life and show how much is left
				//if life meter is less than 0 game is over 
				//set className to tile
			}
		}
		hitBomb()
	}



}
