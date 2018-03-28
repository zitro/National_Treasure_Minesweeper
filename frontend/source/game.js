
let startGame = () => {
	let brick = '<img src="media/brick.png">'
	let startPosition = document.getElementById("1")
	let currentPosition = startPosition
	let keyDownEvents = [37, 38, 39, 40, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105]
	let nc = ['<img src="media/nc/ncbody.png">', '<img src="media/nc/ncoo.png">', '<img src="media/nc/ncmouth.png">', '<img src="media/nc/nchair.png">', '<img src="media/nc/ncglasses.png">' ,'<img src="media/nc/nc80.png">']
	let nicCage = nc[Math.floor(Math.random()*nc.length)];
	let treasuresLeft = document.getElementsByClassName('treasure')
	let lifeMeter = 100;
	let code = [];

	let bomb = document.createElement('img')
	bomb.src='media/temp_bomb.png'
	bomb.className = 'action'
	let treasure = document.createElement('img')
	treasure.src='media/temp_treasure.png'
	treasure.className = 'action'
	let powerUp = document.createElement('img')
	powerUp.src='media/temp_powerup.png'
	powerUp.className = 'action'

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
	// moving left at position 1
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


	hitItem = (item, points) => {
	if (currentPosition.className === item){
		actionTimeImgs(item)
		if (lifeMeter > 0){
			lifeMeter += points;
			currentPosition.className = 'tiles'
		} else if (lifeMeter < 0) {
			console.log("GAME OVER")
		}
	}
}

	function actionTimeImgs(item){
		if (item === "bomb"){
			let win = window.open('media/bomb.png');
			setTimeout(function () { win.close();}, 1500);
		}else if(item === "power-up"){
			let win = window.open('media/powerup.png');
			setTimeout(function () { win.close();}, 1500);
		}
	}


	treasureChest = () => {
			if(currentPosition.className === 'treasure'){
				if(treasuresLeft.length === 3){
					//window opens for constitution treasure
					let win = window.open('media/treasure1.png');
					setTimeout(function () { win.close();}, 2000);
					console.log('constitution')
					currentPosition.className = 'tiles';
				} else if (treasuresLeft.length === 2){
					//window opens for constitution glasses
					let win = window.open('media/treasure2.png');
					setTimeout(function () { win.close();}, 2000);
					console.log('glasses')
					currentPosition.className = 'tiles';
				} else if (treasuresLeft.length === 1){
					console.log('code')
					codeMaker();
					//show alert for the code
					let win = window.open('media/treasure3.png');
					setTimeout(function () { win.close();}, 2000);
					currentPosition.className = 'tiles';
				}
			}
		}
		levelUp = () => {
			// debugger
		}

		codeMaker = () => {
  		let counter = 1
  		while (counter <= 5){
    		let index = Math.floor(Math.random() * (keyDownEvents.length -1) + 1);
    		code.push(keyDownEvents[index]);
    		counter ++;
  		}
		}
		hitItem("bomb", -20)
		hitItem("power-up", 5)
		console.log(lifeMeter);
		treasureChest()
		levelUp()
	}



}
