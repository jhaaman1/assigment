// let p = new Promise();
// console.log('p:',p);

let image = document.getElementById('image');
function checkContent() {
    //checking content logic

    return true;
}

let content_promise = new Promise(function(resolve,reject){

    //so here content is checking it true or not by calling the function

    let content = checkContent()

    //if content is loaded, resolve
    // if content is not loaded, reject

    setTimeout(function() {

        if(content === true){

            //if content is true promise is resolved
    
            resolve('content is loaded');
    
        }
    
        else{
    
            //else promise is rejected
    
            reject('content failed to load');
    
        }

    },3000)

    


});

console.log('content_promise:',content_promise);

//now we grab the promise value by using .then and .catch

content_promise.then(function (value) {
    // console.log('value:', value);
    image.src = 'https://media0.giphy.com/media/Q81NcsY6YxK7jxnr4v/200w.webp?cid=ecf05e47du9rfrb5n1wqylpwka83yq4zksqob66dao6h9zsx&rid=200w.webp&ct=g'
});

//.then is for catching the resolve value;

content_promise.catch(function(err){
    // console.log('err:', err);
    image.src = 'https://media0.giphy.com/media/kEtm4mSTbxvH7j3uCu/200w.webp?cid=ecf05e47zh8k86efe9ahg0hxr3vzcy7e29olzq7bo955n71m&rid=200w.webp&ct=g'
});

//.catch id for grabing the error value;

