let player = () => {



	// make controls in this class found in board
  class Player {
    constructor(x, y, alive, direction){
      x: -1,
  		y: -1,
  		alive: true,
  		direction: "down"
    }
    spawnPlayer() {
  		squares[0][0] = "player";
  		player.x = 0;
  		player.y = 0;
  	}
    move(x1, y1, x2, y2, direction, callback) {
      let move, tmp
        events = [],
        direction = direction,
        tmp2 = getSquare(x2, y2);

      if (typeof direction === "undefined" || direction === "") {
        direction = "down";
      }

      if (tmp2 !== "oob" && tmp2 != "solid" && tmp2 != "brick") {
        move = {
          type: "move",
          data: [{
            type: getSquare(x1, y1),
            fromX: x1, fromY: y1,
            toX: x2, toY: y2,
            direction: direction
          }]
        };
        tmp = getSquare(x1, y1);
        // squares[x1][y1] = (tmp === "bomb+player") ? "bomb" : "blank";
        squares[x2][y2] = "player";
        player.x = x2;
        player.y = y2;
        player.direction = direction;
        events.push(move);
        if (tmp2 === "exit") {
          events.push({type: "nextLevel", data: []});
        }
        callback(events);
      }
    }
  }
  spawnPlayer();
}
