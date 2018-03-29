
let startGame = () => {
	let brick = '<img src="media/brick2.png">'
	let bombTile = '<img src="media/bombTile.png">'
	let powerUpTile = '<img src="media/powerUpTile.png">'
	let treasureTile = '<img src="media/treasureTile.png">'
	let startPosition = document.getElementById("1")
	let currentPosition = startPosition
	let keyDownEvents = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
	let nc = ['<img src="media/nc/ncbody.png">', '<img src="media/nc/ncoo.png">', '<img src="media/nc/ncmouth.png">', '<img src="media/nc/nchair.png">', '<img src="media/nc/ncglasses.png">' ,'<img src="media/nc/nc80.png">']
	let nicCage = nc[Math.floor(Math.random()*nc.length)];
	let treasuresLeft = document.getElementsByClassName('treasure')
	let lifeMeter = 100;
	let basePoints = 0;
	let code = [];
	let convertedCode = []
	let exit = document.getElementsByClassName('exit')
	let exitIsVisable = false;


	function showData(life, points){
		let pointsShow = document.getElementById('score')
		pointsShow.innerText = `Score: ${points}`

		let lifemeterShow = document.getElementById('lifemeter')
		lifemeterShow.innerHTML = `Life Meter: ${life}%`
	}

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
		basePoints++
		console.log(basePoints)
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
			lifeMeter += points;
			if (lifeMeter > 0){
				if(item === 'bomb'){
					currentPosition.className = 'tiles'
					currentPosition.innerHTML = bombTile
				} else if (item === 'power-up'){
					currentPosition.className = 'tiles'
					currentPosition.innerHTML = powerUpTile
				}
			} else if (lifeMeter <= 0) {
				window.alert("GAME OVER");
				window.close()
				location.reload()
			}
		}
	}

	function actionTimeImgs(item){
		if (item === "bomb"){
			let win = window.open('media/bomb.png');
			setTimeout(function () { win.close();}, 150);
		}else if(item === "power-up"){
			let win = window.open('media/powerup.png');
			setTimeout(function () { win.close();}, 150);
			basePoints+=5
		}
	}

	treasureChest = () => {
			if(currentPosition.className === 'treasure'){
				if(treasuresLeft.length === 3){
					let win = window.open('media/treasure1.png');
					setTimeout(function () { win.close();}, 200);
					console.log('constitution')
					currentPosition.className = 'tiles';
					currentPosition.innerHTML = treasureTile
					basePoints+=50
				} else if (treasuresLeft.length === 2){
					let win = window.open('media/treasure2.png');
					setTimeout(function () { win.close();}, 200);
					console.log('glasses')
					currentPosition.className = 'tiles';
					currentPosition.innerHTML = treasureTile
					basePoints+=100
				} else if (treasuresLeft.length === 1){
					console.log('code')
					codeMaker();
					let win = window.open('media/treasure3.png');
					setTimeout(function () { win.close();}, 200);
					alert('Memorize your code!')
					alert(convertedCode);
					currentPosition.className = 'tiles';
					currentPosition.innerHTML = treasureTile
					basePoints+=200
				}
			}

		}

		codeMaker = () => {
  		let counter = 1
  		while (counter <= 5){
    		let index = Math.floor(Math.random() * (keyDownEvents.length -1) + 1);
    		code.push(keyDownEvents[index]);
    		counter ++;
  		}
			convertKeyDownCode()
		}
		levelUp = () => {

			if(currentPosition.className === 'exit'){
				console.log('exit')
				let index = 0
				exitIsVisable = true
				//make color change to mark exit

				if(!treasuresLeft.length){
					window.alert("Press enter and type in the secret code")
					document.body.onkeydown = event => {
						const key = event.which

						if(code[index] === key){
							index++;
							if(index === code.length){
								alert('THE CODE HAS BEEN CRACKED!!!! YOU WIN!!!!');

								index = 0;
							}
						} else {
							alert('Code not cracked... please try again')
							index = 0;
						}
					}
				} else {
					alert("You haven't collected all the treasures yet... please come back when you have a code")
				}
			}
		}
		let convertKeyDownCode = () => {
			let keyDownDictionary = {
				48: 0,
				49: 1,
				50: 2,
				51: 3,
				52: 4,
				53: 5,
				54: 6,
				55: 7,
				56: 8,
				57: 9
			}
			for(let i = 0; i < code.length; i++){
				convertedCode.push(keyDownDictionary[code[i]])
			}
		}
		let addExitToBoard = () => {
			if(exitIsVisable === true){
				let exit = document.getElementsByClassName('exit')
				exit[0].innerHTML = "<img src='media/exit.png'>"
			}

		}

		addExitToBoard()
		hitItem("bomb", -20)
		hitItem("power-up", 5)
		console.log(lifeMeter);
		treasureChest()
		levelUp()
		showData(lifeMeter,basePoints)

	}


}
