const BASE_URL = 'http://localhost:3000';


userForm = document.getElementById('greenButton')
userForm.addEventListener('click', (event) => {
				event.preventDefault()
				userName = document.getElementById('userName')
				const submitVal = userName.value
				//still need to get points
				addNamePoints(submitVal, 0)
			})





let getAllUsers = () => {
	return fetch("http://localhost:3000/users")
					.then(res => res.json())
}



// getAllUsers()
//   .then(json => {
//     let usersContainer = document.getElementById('users-container')
//     json.forEach(user => {
//       let leaderBoardDiv = document.createElement('div')
//       leaderBoardDiv.innerHTML = (`
// 				<p>user.name</p>
// 				<p>user.points</p>
// 				`)
//       usersContainer.append(leaderBoardDiv)
//     })
//   })


// this works for posting a new user
function addNamePoints(name, points = 0) {
    fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
				'Content-Type': 'application/json',
    		'Accept': 'application/json'
      },
      body: JSON.stringify({
				points: points,
				name: name,
      })
    })
    .then((res) => { return res.json() })
    .then(json => { console.log('Updated JSON:' + json)})
  }



	// console.log(getAllUsers());
	getAllUsers()
	.then(json => {
		 console.log(json)
	})
