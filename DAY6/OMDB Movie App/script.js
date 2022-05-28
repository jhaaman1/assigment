let id;

async function showmovie(){
    try{
        let movie = document.querySelector('#movie').value;
        let res = await fetch(`https://www.omdbapi.com/?apikey=cb68f94f&s=${movie}`);

        let data =await res.json();
        
        console.log(data);
        append(data.Search)
    }catch(err){
        console.log('err:',err);
    }
}

showmovie();

function append(data){
    document.querySelector('#movies').innerHTML = null
    data.map((el) => {

        let img = document.createElement('img');
        img.src = el.Poster;

        let title = document.createElement('p');
        title.innerText = `Title- ${el.Title}`;

        let year = document.createElement('p');
        year.innerText = `Year-  ${el.Year}`;

        let imdb = document.createElement('p')
        imdb.innerText = `Imdb- ${el.imdbID}`;

        let div = document.createElement('div');
        div.append(img,imdb,title,year);

        document.querySelector('#movies').append(div);
    })
}