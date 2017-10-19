const LinkedList = require('./LinkLists.js')

const Truck = function(size){
      let type = size;
      let inventory = new LinkedList();
      let capacity = setCapacity(size);
      let spaceEfficency = makeSpaceEfficency();

      function setCapacity(size){
            size = type.toLowerCase();
            if(size == "small"){
                  return 1000;
            }
            if(size == "medium"){
                  return 2000;
            }
            if(size == "large"){
                  return 5000;
            }
            else{
                  console.log("What size?");
            }
      }
      function makeSpaceEfficency(){
            let sum = 0
            let len = inventory.length;
            for(let x=0;x<inventory.length;x++){
                  let node = inventory.getNode(x);
                  sum += node.getValue().space;
            }
            return sum/capacity;
      }
      return{type,inventory,capacity,spaceEfficiency}
}
module.exports = Truck;
