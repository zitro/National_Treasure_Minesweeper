
let getAllUsers = () => {
	return fetch("http://localhost:3000/users")
					.then(res => res.json())
}

// .then(json => {
// 	 console.log(json.filter((trainer) => {
// 					return trainer.pokemons.length >= 1
// 				}))
// })

getAllUsers()
.then(json => {
	 console.log(json)
})


getAllUsers()
  .then(json => {
    let usersContainer = document.getElementById('users-container')
    json.forEach(user => {
      let leaderBoardDiv = document.createElement('div')
      leaderBoardDiv.innerText = user.name

      leaderBoardDiv.addEventListener('click', function(event){
        let pokemonContainer = document.getElementById('pokemon-container')
        pokemonContainer.innerHTML = ""

        user.pokemons.forEach(pokemon => {
          let pokemonLi = document.createElement('li')

          pokemonLi.innerText = `${pokemon.name} (${pokemon.species})`

          pokemonContainer.append(pokemonLi)

          // Same as the line above, but concats the innerHTML of both
          // pokemonContainer.innerHTML += pokemonLi.innerHTML
        })
      })

      usersContainer.append(leaderBoardDiv)
    })
  })
})
