document.addEventListener('DOMContentLoaded', event =>{
	function fillBoard () {
		let boardDiv = document.getElementById('board_container')
		let cells = 101;
		let i = 1

		while(i < cells){
		let cellDiv = document.createElement('div')
		cellDiv.innerText = 'hi'
		cellDiv.id = i;
		boardDiv.append(cellDiv);
		i++;
		}
	}
	fillBoard()
	startGame()
})


// function getUsers(){
// return fetch(http://localhost:3000/users)
// .then(res => res.json())
// .then(console.log(json))}
