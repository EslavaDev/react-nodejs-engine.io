
const Sensor =  require("./Sensor");
const Reader = require("./Reader");
const Engine = require("engine.io")
const server = Engine.listen(8080);

//read sensors 
var s = null;
var m = null;
var s1 = new Reader();
s1.on("newMemory",(val)=>{
    //seocket.send=> call message client
    console.log(`the s1 val is : ${JSON.stringify(val)}`)
    m = val;
});
var s2 = new Sensor();
    s2.on("newValueEvent",(val)=>{
        console.log(`the s2 val is : ${JSON.stringify(val)}`)
        s = val;
});

//socket => client that just is connected
server.on('connection',(socket)=>{
    console.log(`new user connected ${new Date()}`)
    setInterval(()=>{
        socket.send(JSON.stringify({ a: s, b: m }))
    },3000)
});