const kantoPokedex = document.getElementById('kantoPokedex');

console.log(kantoPokedex);

const getPokemon = () => {
    
    const promises = [];
    
    for(let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(response =>  response.json()));
    
    }

    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default']
        }));
        showPokemon(pokemon);
    });

};


var showPokemon = (pokemon) => {
    console.log(pokemon)

    var pokemonHTMLString = pokemon.map (pokemon_ => `
    <li>
        <img src = "${pokemon_.image}"/>
        <h2>${pokemon_.id}. ${pokemon_.name}</h2>
    </li>

    `)

    kantoPokedex.innerHTML = pokemonHTMLString;
}
getPokemon();