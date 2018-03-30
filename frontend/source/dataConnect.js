const BASE_URL = 'http://localhost:3000';


userForm = document.getElementById('userForm')
userForm.addEventListener('submit', (event) => {
				event.preventDefault()
				userName = document.getElementById('userName')
				const submitVal = userName.value
				//still need to get points
				addName(points, submitVal)
			})





let getAllUsers = () => {
	return fetch("http://localhost:3000/users")
					.then(res => res.json())
}


getAllUsers()
.then(json => {
	 // console.log(json)
})


getAllUsers()
  .then(json => {
    let usersContainer = document.getElementById('users-container')
    json.forEach(user => {
      let leaderBoardDiv = document.createElement('div')
      leaderBoardDiv.innerHTML = (`
				<p>user.name</p>
				<p>user.score</p>
				`)
      usersContainer.append(leaderBoardDiv)
    })
  })


function addName(val, name) {
    fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
				'Content-Type': 'application/json',
    		'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
				points: val
      })
    })
    .then((res) => { return res.json() })
    .then(json => { console.log('Updated JSON:' + json)})
  }
