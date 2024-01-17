const pokeApi = {};

//Funcao com valores default passado por parametro
//o uso do pokeApi. pode referenciar o uso de um metodo do objeto | adicionando um metodo a ele.

function convertPokeApiDetailToPokemon(pokeDetail){
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.id;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;

}



pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
        .then((res) => res.json())
        .then(convertPokeApiDetailToPokemon)
}


pokeApi.getPokemons = (offset = 0, limit = 20 ) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  
  
  return fetch(url)
  .then((res) =>  res.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
  .then((detailRequests) => Promise.all(detailRequests))
  .then((pokemonsDetails) => pokemonsDetails)
  .catch((error) => console.error(error))
};

