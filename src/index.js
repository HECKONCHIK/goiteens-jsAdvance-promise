import pokemonCardTpl from './templates/pokemon-card.hbs'


const pokemonCard = document.querySelector('.js-card-container');
const searchForm = document.querySelector('.js-search-form');


fetch('https://pokeapi.co/api/v2/pokemon/100')
    .then(response => response.json())
    .then(pokemon => {
        const markup = pokemonCardTpl(pokemon)


        pokemonCard.innerHTML = markup
    })