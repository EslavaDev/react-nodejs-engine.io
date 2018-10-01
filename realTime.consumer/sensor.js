const {EventEmitter} = require('events');
module.exports = class Sensor extends EventEmitter{
    constructor(){
      super();
      
        setInterval(()=>{
            
            const min = -100;
            const max = 100;
            let currentValue = Math.random()*(max-min)+min;
            this.emit("newValueEvent", currentValue);
        }, 1000)
    }
    

};