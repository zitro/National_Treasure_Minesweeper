let board = () => {
  constructor(rows, columns, player, controls){
		rows: 16,
		columns: 16,
    player: this.player
		controls: {
			KEY_UP: "moveUp",
			KEY_LEFT: "moveLeft",
			KEY_DOWN: "moveDown",
			KEY_RIGHT: "moveRight"
		}
  }

  board() {
		fillBoard();
		callback();
  }

	fillBoard() {
		let x, y;
		squares = [],
		exit = false;
		for(let x = 0; x < columns; x++){
			squares[x] = [];
			for(let y = 0; y < rows; y++){
				squares[x][y] = "blank";
				if ((Math.random() > 0.4) && (x > 1 || y > 1)) {
					if (Math.random() > 0.7) {
						squares[x][y] = "solid";
					}
					else {
						squares[x][y] = "brick";
					}
				}
				if ((Math.random() > 0.5) && (x > 10 && y > 10) && exit == false) {
					squares[x][y] = "exit";
					exit = true;
				}
			}
		}
		if (!exit) {
			fillBoard();
		}
	}

	getBoard() {
		let copy = [], x;
		for (x = 0; x < columns; x++) {
			copy[x] = squares[x].slice(0);
		}
		return copy;
	}

	getSquare(x, y) {
		if ( x < 0 || x > columns-1 || y < 0 || y > rows-1 ) {
			return "oob";
		}
		else {
			return squares[x][y];
		}
	}

	print() {
		let str = "";
		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < columns; x++) {
				str += getSquare(x, y) + " ";
			}
			str += "\r\n";
		}
		console.log(str);
	}

  return {
		initialise: initialise,
		getBoard: getBoard,
		move: move,
		print: print
  };
  board()
}
