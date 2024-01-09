// Request Method - Metodo Http
// Post, get, put, delete e update.
//Query String - Parte da url que e usado para enviar dados adicionais, paramentros de dados que queremos

function convertPokemonToHtml(pokemon) {
  return `
  <li class="pokemon">
  <span class="number">#001</span>
  <span class="name">${pokemon.name}</span>

  <div class="detail">
      <ol class="types">
          <li class="type">
              grass
          </li>
          <li class="type">
              poison
          </li>
      </ol>
      <img src="./assets/bulbasaur-seeklogo.com.svg" alt="${pokemon.name}">
  </div>

</li>
  
  `;
}
const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons()
  .then((pokemons) => {
    const listItems = [];

    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      listItems.push(convertPokemonToHtml(pokemon))
    }

  })
  .catch((error) => {
    console.log(error);
  });
