import newsTpl from '../templates/news.hbs';


const newsCard = document.querySelector('.js-card-container');
const searchForm = document.querySelector('.js-form');
// console.log(searchForm);
searchForm.addEventListener('submit', searchNews);

function news(name) {
    
    return fetch(`https://newsapi.org/v2/everything?q=${name}&from=2023-02-27&to=2023-02-27&sortBy=popularity&apiKey=f58eaf87dd6248efaa19cf893b7b86fa`)
    .then(respons => respons.json())
        .then(data => data.articles)
    
}

function searchNews(event) {
    event.preventDefault();
    news(event.currentTarget.elements.query.value)
        .then(articles => {
            const markup = newsTpl(articles);

            newsCard.innerHTML = markup
    })
}



