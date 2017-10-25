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
    return Warehouse;

}
function configureTruckFleet(numberoftrucks){
    let theFleet = new Queue();
    //fill the fleet with different sized trucks using math.random()
    for(let x=0;x<numberoftrucks;x++){
       let size = 100*Math.random();
      if(size < 33){
            theFleet.enqueue(new Truck("small"));
      }
      else if(size < 66){
            theFleet.enqueue(new Truck("medium"));
      }
      else{
            theFleet.enqueue(new Truck("large"));
      }
   }
    return theFleet;
}
function distribute(wh,tf){
      //distribute the products in the warehouse to the truck fleet.
      let ready = new Queue();
      while(!wh.isEmpty() && !tf.isEmpty()){
            let currentTruck = tf.dequeue();
            while(currentTruck.spaceEfficency()<1){
                  currentTruck.inventory.push(wh.dequeue());
            }
            if(currentTruck.spaceEfficency()>1){
                  Warehouse.enqueue(currentTruck.inventory.pop());
            }
            ready.enqueue(currentTruck);
      }
      return ready;
}
function main(){
    let flemhouse = configureWareHouse(10);
    let flemfleet = configureTruckFleet(10);

    let ready = distribute(flemhouse,flemfleet,0.95);

    ready.print();

    while(!ready.isEmpty()){
          console.log("Truck with products...");
          console.log("----------------------");
          let t = ready.dequeue();
          console.log(t.spaceEfficency());
          for(let x=0;x<t.inventory.length;x++){
                console.log(t.inventory[x].name);
          }
    }
}

main();
