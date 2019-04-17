var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


io.on('connection',(socket)=>{
    console.log("alguien se ha conectado");

    setInterval(() => {
        socket.emit('messages',{
            id:1,
            nombre:'juan'
            
    }, 1000);
    })
    
})


server.listen(3000,()=>{
    console.log("Servidor corriedno");
    
})