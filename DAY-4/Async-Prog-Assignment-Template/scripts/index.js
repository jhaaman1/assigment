function getImages(){

    let image_url = document.getElementById('url').value;

    let images_data = JSON.parse(localStorage.getItem('image')) || [];

    images_data.push(image_url);

    localStorage.setItem('image',JSON.stringify(images_data));

    document.getElementById('url').value = null;
}

let image_div = document.querySelector('#slideshow');

let i = 0;
let id;

function start() {
    let storedImg = JSON.parse(localStorage.getItem('image'));

  // let container = document.getElementById('slideshow');

    let img = document.createElement('img');

    id = setInterval(()=>{

        if(i === storedImg.length){
            i = 0;
        }

        image_div.innerHTML = null;
        img.src = storedImg[i];
        image_div.append(img);

        i++;

    },2000)

}

function stops(){
    clearInterval(id);
}

let movieData = JSON.parse(localStorage.getItem('movies')) || [

    {
        image:
          "https://images.kooapp.com/transcode_input/2726126/5C65C2E7-EFDB-4A23-ABBA-E65CB9D7C360-image.jpeg",
        name: "The Kashmir Files",
        date: 2022,
        rating: 4.8,
      }, 

      {
        image:
          "https://c7.alamy.com/zooms/3/0a8fe74e678b48dcbb69d949cdc64e42/g3r9w0.jpg",
        name: "Huntsman",
        date: 2016,
        rating: 3.5,
      },

      {
        image:
          "https://c7.alamy.com/zooms/3/a0f4fc60a30d4ab089d9f89f61fa8804/hah872.jpg",
        name: "X-Men",
        date: 2016,
        rating: 4,
      },

      {
        image:
          "https://c7.alamy.com/zooms/3/de79902ceb9e428da70d512aa08083de/eywc8m.jpg",
        name: "The Mechanic",
        date: 2011,
        rating: 3.9,
      },

      {
        image:
          "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        name: "PARASITE",
        date: 2019,
        rating: 4.6,
      }, 

      
      {
        image:
          "https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217",
        name: "Moonlight",
        date: 2016,
        rating: 2.8,
      },  

      {
        image:
          "https://c7.alamy.com/comp/3/cf4bee29087c45039492d7884fad9c84/dtgrc5.jpg",
        name: "Godzilla",
        date: 2000,
        rating: 3.5,
      },
      {
        image:
          "https://c7.alamy.com/comp/3/64cf623f88ef4cb2ae5536505389a968/e1ghp8.jpg",
        name: "The Sheik",
        date: 1921,
        rating: 3,
      },
      {
        image:
          "https://c7.alamy.com/comp/3/f7b4f7f16b3043189cf1b8dc8777b59a/d8xhmh.jpg",
        name: "King Kong",
        date: 1933,
        rating: 3.2,
      },
      {
        image:
          "https://c7.alamy.com/comp/3/50d377b287b5419e879f96c75550183a/cc3r44.jpg",
        name: "Harry Potter",
        date: 2001,
        rating: 4,
      },
      {
        image:
          "https://c7.alamy.com/zooms/3/945ce682e1024c1699cc0c32c8b56304/f6605e.jpg",
        name: "Ted",
        date: 2015,
        rating: 3.1,
      },
      {
        image:
          "https://c7.alamy.com/zooms/3/2952bb194c154538ac402f1fd5e683e5/fx7f8t.jpg",
        name: "N.W.A",
        date: 2015,
        rating: 2.9,
      },
      

];


window.addEventListener('load', () => {
    displayData(movieData);
})

function displayData(movieData){

    document.querySelector('#movies').innerHTML = ''

    movieData.map((elem) =>{
        let box = document.createElement('div');
        box.setAttribute('class', 'bigbox');

        let img = document.createElement('img');
        img.src = elem.image;
        img.setAttribute('class','image')

        let div = document.createElement('div');
        div.setAttribute('class', 'details');

        let name = document.createElement('p');
        name.innerText = elem.name;

        let date = document.createElement('p');
        date.innerText = `${elem.date}`;

        let rate = document.createElement('p')
        rate.innerText = `${'rating:' + elem.rating}`;

        div.append(name,date,rate);
        box.append(img,div);

        document.querySelector('#movies').append(box);

    })    

}

//-------------add sorting----------

function sort_lh(){

    movieData.sort((a,b) =>{
        if(a.rating > b.rating)
            return 1;
        if(a.rating < b.rating)
            return -1;
            return 0;
        
    })

    displayData(movieData);
}

function sort_hl(){

    movieData.sort((a,b) =>{
        if(a.rating < b.rating)
        return 1;
        if(a.rating > b.rating)
        return -1;
        return 0;
    })

    displayData(movieData);
}
