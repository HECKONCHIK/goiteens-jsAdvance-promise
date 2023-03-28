import weatherTpl from '../templates/weather.hbs';

const refs = {
    form: document.querySelector('.js-form'),
    card: document.querySelector('.js-card-container'),
}

refs.form.addEventListener('submit', searchWeather);

function weather(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40207e285e43c5b8e49ba7f2599cdd4b&units=metric`)
        .then(data => data.json())
    .then(weather => {
            const markup = weatherTpl(weather);

                refs.card.innerHTML = markup;
            })
}

function searchWeather(event) {
    event.preventDefault();
    weather(event.currentTarget.elements.query.value);
}
