const pokeApi = {};

//Funcao com valores default passado por parametro
pokeApi.getPokemons = (limit = 0, offset = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
  .then((res) =>  res.json())
  .then((jsonBody) => jsonBody.results)
  .catch((error) => console.error(error))
};
