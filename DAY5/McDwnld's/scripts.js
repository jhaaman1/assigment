// function food(b,p,v){
//     this.burger = b;
//     this.pizza = p;
//     this.vegBurger = v;
// }

// function status() {
//     return true;
// }

function getOrder(){
    
let burger = document.getElementById('burger').checeked;

let pizza = document.getElementById('pizza').checeked;

let vegBurger = document.getElementById('veg-burger').checeked;

let str = burger + ' ' + pizza + ' ' + vegBurger

let hotel = 'open';
let time = Math.random() * 5000;
let foodPromise = new Promise(function(resolve,reject){
    if(hotel === 'close'){
        reject('Hotel is closed')
    }
    else{
        setInterval(function(){
            resolve(str);
        },3000)
    }
});

foodPromise.then((res) => {
    console.log(`Your ${res} is ready`);
})

}

// getOrder();