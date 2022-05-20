function Product(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = b;
}

let arr = JSON.parse(localStorage.getItem('details')) || [];

function getDetails(){
    event.preventDefault();
    let form = document.getElementById('form');
    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.url.value;
    let batch = form.batch.value;
    let p = new Product(name,course,unit,image,batch);

    arr.push(p)
    console.log(arr);
    localStorage.setItem('details',JSON.stringify(arr))

    document.querySelector('input').value = null;
}

