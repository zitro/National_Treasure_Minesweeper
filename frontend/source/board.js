document.addEventListener('DOMContentLoaded', event =>{
	function fillBoard () {
		let boardDiv = document.getElementById('board_container')
		let cells = 101;
		let i = 1
		let brick = '<img src="media/brick.png">'

		while(i < cells){
		let cellDiv = document.createElement('div')
		cellDiv.className = "tiles"
		cellDiv.innerHTML = brick
		cellDiv.id = i;
		boardDiv.append(cellDiv);

		i++;
		}
		addToBoard(3, "treasure");
		addToBoard(10, "bomb");
		addToBoard(10, "power-up");
		addToBoard(1, "exit");
	}

	function addToBoard (num, className) {
		let counter = 1;
		while(counter <= num){
			let tiles = document.getElementsByClassName('tiles')
			let index = Math.floor(Math.random() * (tiles.length - 1) + 1)
			let treasureTiles = tiles[index]
			treasureTiles.className = className
			counter++;
		}
	}

	fillBoard()
	startGame()
})


// function getUsers(){
// return fetch(http://localhost:3000/users)
// .then(res => res.json())
// .then(console.log(json))}
