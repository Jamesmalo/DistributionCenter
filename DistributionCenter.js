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
            let currentTruck = tf.dequeue();
            while(currentTruck.spaceEfficiency()<1){
                  currentTruck.inventory.push(Warehouse.dequeue());
            }
            if(currentTruck.spaceEfficiency()>1){
                  Warehouse.enqueue(currentTruck.inventory.pop());
            }
            ready.enqueue(currentTruck);
      }
      return ready;
}
function main(){
    let flemhouse = configureWareHouse();
    let flemfleet = configureTruckFleet();
    let ready = distribute(flemhouse,flemfleet);

    for(let s=0;s<ready.length;s++){
        console.log("Truck "+s+" is in route");
        console.log("-----------------------");
        while(s.getNext() != null){
            console.log(shipping[s].getValue().spaceEfficiency());
        }
    }
}

main();
