function product(n,c,i,p,g,s){
    this.name = n;
    this.category = c;
    this.image = i;
    this.price = p;
    this.gender = g;
    this.sold = s;
}

let arr = JSON.parse(localStorage.getItem('products')) || []; 
// let arr = [];


function submitproduct(){
    event.preventDefault();
    let form = document.getElementById('products')
    let name = form.querySelector("#product").value;
    let category = document.querySelector("#category").value;
    let image = document.querySelector("#image").value;;
    let price = document.querySelector("#price").value;
    let gender = document.querySelector("#gender").value;
    let sold = document.querySelector("#sold").value;
    
    let p = new product(name,category,image,price,gender,sold)

    arr.push(p)
    console.log(arr);
    localStorage.setItem("products",JSON.stringify(arr));
}

