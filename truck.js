
const Truck = function(size){
      let type = size;
      let inventory = [];
      let capacity = setCapacity(size);

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
      function spaceEfficency(){
            let sum = 0
            let len = inventory.length;
            for(let x=0;x<inventory.length;x++){

                  sum += inventory[x].space;
            }
            return sum /capacity;
      }
      return{type,inventory,capacity,spaceEfficency}
}
module.exports = Truck;
