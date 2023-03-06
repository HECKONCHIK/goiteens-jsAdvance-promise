import pokemonCardTpl from '../templates/pokemon-card.hbs';


const pokemonCard = document.querySelector('.js-card-container');
const searchForm = document.querySelector('.js-search-form');

searchForm.addEventListener('submit', searchPokemon);


function pokemon(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
            .then(pokemon => {
            const markup = pokemonCardTpl(pokemon);

            pokemonCard.innerHTML = markup
    })

}
function searchPokemon(event) {
    event.preventDefault();
    pokemon(event.currentTarget.elements.query.value)

}


    