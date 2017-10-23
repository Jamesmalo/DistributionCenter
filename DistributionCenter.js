//require all of the other files, with node.js,  linkedlist.js, and queue.js
const Queue = require('./queue.js');
const Product = require('./product.js');
const Truck = require('./truck.js')

function configureWareHouse(numberofitems){
    let Warehouse = new Queue();
    //fill the warehouse with new Products

    for(let x=0;x<numberofitems;x++){
        Warehouse.enqueue(new Product());
    }
    return warehouse;

}
function configureTruckFleet(numberoftrucks){
    let theFleet = new Queue();
    //fill the fleet with different sized trucks using math.random()
    for(let x=0;x<numberoftrucks;x++){
       let size = 100*Math.random();
      if(size < 33){
            fleet.enqueue(new Truck("small"));
      }
      else if(size < 66){
            fleet.enqueue(new Truck("medium"));
      }
      else{
            fleet.enqueue(new Truck("large"));
      }
   }
    return theFleet;
}
function distribute(wh,tf){
      //distribute the products in the warehouse to the truck fleet.
      let ready = new Queue();
      while(!wh.isEmpty() && !tf.isEmpty()){
            if(wh.dequeue()){

            }
      }
}
function ship(fleet,percent){
    //if the trucks spaceEfficency is greater than or equal to the percent, then remove the truck from the fleet's linked list
}
function main(){
    let flemhouse = configureWareHouse();
    let flemfleet = configureTruckFleet();
    flemfleet = distribute(flemhouse,flemfleet);
    let shipping = ship(flemfleet,0.80);
    for(let s=0;s<shipping.length;s++){
        console.log("Truck "+s+" is in route");
        console.log("-----------------------");
        while(s.getNext() != null){
            console.log(shipping[s].getValue().spaceEfficiency());
        }
    }
}

main();
