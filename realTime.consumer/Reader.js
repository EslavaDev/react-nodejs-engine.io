const {EventEmitter} = require('events');
const os = require('os');
module.exports = class Sensor extends EventEmitter{
    constructor(){
      super();
      
        setInterval(()=>{
            
            let currentValue = process.memoryUsage();
            this.emit("newMemory", currentValue);
        }, 1000)
    }
    

};