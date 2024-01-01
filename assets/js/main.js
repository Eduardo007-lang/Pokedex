const limit = 0;
const offset = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
// Request Method - Metodo Http
// Post, get, put, delete e update.
//Query String - Parte da url que e usado para enviar dados adicionais, paramentros de dados que queremos

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((jsonBody) => {
    console.log(jsonBody);
  })

  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(`Requisicao concluida`);
  });
