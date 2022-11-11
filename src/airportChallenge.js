class Airport {
    constructor(capacity){
        this._capacity = capacity;
        this._planes = [];
    }

    isStormy(){
        let randomNumber = Math.random()
        if(randomNumber >= 0.5){
            return true;
        } else {
            return false;
        }
    }


    land(plane){
        if(((this._planes).length < this._capacity) && (this.isStormy() == false)){
            (this._planes).push(plane);
            return true;
        } else {
            return false
        };
    };
    




    takeOff(plane){
        if(this._planes.includes(plane) && this.isStormy() == false){
            ((this._planes).shift(plane));
            return true
        } else {
            return false 
        }
    }
}


// class Airport
//   def initialize(capacity)
//   @capacity = capacity
//   @planes = []
//   end
//   def land(plane)
//     raise 'Airport is full' if @planes.length >= @capacity
//     raise 'Weather is storming can not land' if stormy?
//     @planes << plane
//   end
//   def take_off(plane)
//     raise 'Weather is storming can not takeoff' if stormy?
//   end
//   def stormy?
//     rand(1..6) > 4
//   end
// end





// As an air traffic controller 
// So I can get passengers to a destination 
// I want to instruct a plane to land at an airport

// As an air traffic controller 
// So I can get passengers on the way to their destination 
// I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

// As an air traffic controller 
// To ensure safety 
// I want to prevent landing when the airport is full 

// As the system designer
// So that the software can be used for many different airports
// I would like a default airport capacity that can be overridden as appropriate

// As an air traffic controller 
// To ensure safety 
// I want to prevent takeoff when weather is stormy 

// As an air traffic controller 
// To ensure safety 
// I want to prevent landing when weather is stormy 