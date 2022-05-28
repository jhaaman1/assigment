let movies_div = document.getElementById('movies')

let id;

async function searchMovie(q){

 //prepare url
    try {
        let url = `https://www.omdbapi.com/?apikey=cb68f94f&s=${q}`

        let res = await fetch(url);

        let data = await res.json();

        return data.Search;
    }catch(error){
        console.log(error);
    }

}

function appendMovies(movies){
    movies_div.innerhtml = null;

    if(movies === undefined){
        return false;
    }

    movies.forEach(function (el){
        let p = document.createElement('p');
        p.innerText = el.Title;

        let year = document.createElement('p');
        year.innerText = el.Year;

        let poster = document.createElement('img');
        poster.src = el.Poster;
    

        movies_div.append(poster,p,year);
    })

}


async function main(){

    let query = document.getElementById('query').value;
    // console.log(query);

    let response = searchMovie(query) //who is returning a promise
    let data = await response;
    // console.log('data:',data); //searchmovies is returning a promise,so async function returns promises everytime

    appendMovies(data);
}

function debounceFunction(func,delay) {
    if(id) {
        clearTimeout(id);
    }  
    id = setTimeout(() => {
        func();
    },delay);

} 