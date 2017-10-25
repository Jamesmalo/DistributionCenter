const Product = function(){

let name = makeName();
let price = makePrice();
let space = makePrice();
this.prime = Prime();

  function makeName(){
    for(let x=0;x<10;x++){
      let name ="";
      let c = Math.floor(25*Math.random())+65;
      let letter = String.fromCharCode(c);
      name += letter;
    }
  }
  function makePrice(){
    for(let x=0;x<10;x++){
      let price = Math.floor(Math.random()*10000/100);
      let space = Math.floor(Math.random()*10000/100);
    }
  }
  function Prime(){
        let randomNumber = Math.random()*100;
        if(randomNumber > 50){
             this.prime = true;
       }
       else{
             this.prime = false;
       }
 }

 return{name,price,space}
}

module.exports = Product;
