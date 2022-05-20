function Autombl(type,price){
    this.brand = 'TATA';
    this.type = type;
    this.seat = 4;
    this.price = price;
    this.logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzyEzUMheLyFEvZmveHu2SEjrMxIldCMoLQ&usqp=CAU'
}

Autombl.prototype.checkType = function (type,price) {
    this.type = type;
    this.price = price;
};




let p1 = new Autombl('petrol','$1000k')
console.log('p1:',p1);
p1.checkType('Diesel','$220k');
console.log('p1:',p1);

// let p2 = Object.create(Autombl);
// console.log('p2:',p2);