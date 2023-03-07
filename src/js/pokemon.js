import pokemonCardTpl from '../templates/pokemon-card.hbs';


const pokemonCard = document.querySelector('.js-card-container');
const searchForm = document.querySelector('.js-search-form');
const value = document.querySelector('.js-input');

searchForm.addEventListener('submit', searchPokemon);


function pokemon(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
            .then(pokemon => {
            const markup = pokemonCardTpl(pokemon);

                pokemonCard.innerHTML = markup;
            })
    .catch(() => {
        if (id > 1010) {
            alert("Упс, данного покемона не існує");
        }
    })
    
}
function searchPokemon(event) {
    event.preventDefault();
    pokemon(event.currentTarget.elements.query.value);
    value.value = '';
}


    