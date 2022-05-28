// let x = fetch();
// console.log(fetch(x));

//const url = "https://reqres.in/api/users";
//we put our url reqst there

// fetch(url)  //destination where we get our data fromurl
// .then(function(res){
//     return res.json();
//     // console.log(res.json());

// })
// .then(function(res){
//     console.log(res);
// })
// .catch(function(err){

//     console.log(err);

// })

//Readable + stream(data in chunks);

//data comes in form of stream
//so we collect the stream

/*
async function makerequest(){
    try {
        let res = await fetch(url);

        let data = await res.json();
        
        append(data.data)
        console.log(data.data);
    }catch(err) {
        console.log('err:',err);
    }
    
}

makerequest();



function append(data){
    data.forEach(function(el){

        let container = document.getElementById('container');

        let img = document.createElement('img')
        img.src = el.avatar;
        
        let h2 = document.createElement('h2');
        h2.innerText = el.first_name;

        let p = document.createElement('p');
        p.innerText = el.email;

        let div = document.createElement('div')
        div.append(img,h2,p);

        container.append(div);
    })
}

*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const url = 'https://fakestoreapi.com/products';

async function makerequest(){
    try{
        let res = await fetch(url);

        let products = await res.json();
        append(products)
        console.log(products);
    } catch (err){
        console.log(err);
    }
}

makerequest();

function append(products){
    products.forEach((el) => {

        let container = document.getElementById('container');

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.innerText = el.image;

        let title = document.createElement('title');
        title.innerText = el.title;

        let price = document.createElement('p');
        price.innerText = el.price;

        div.append(img,title,price);
        container.append(div);
    })
}