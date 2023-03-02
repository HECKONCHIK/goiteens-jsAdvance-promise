const refs = {
    searchForm: document.querySelector('.js-search-form'),
    loadMoreBtn: document.querySelector ('[data-action="load-more"]'),
}

refs.searchForm.addEventListener('submit', onSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


function onSubmit() {

}

function onLoadMore() {

}

function fetchArticles(searching) {

    const url = `https://newsapi.org/v2/everything?q=${searching}`
   const options = {
    headers: {
        'X-Api-Key': 'f58eaf87dd6248efaa19cf893b7b86fa',
    }
    
   }
    return fetch(url, options)
    .then(response => response.json())
    .then(({articles}) => {
        return articles
    })
}