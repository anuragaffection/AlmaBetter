const WebSocket = require('ws')

const wss = new WebSocket.Server({port : 3000});

wss.on( 'connection', (ws) => {
    console.log("Web Socket connected");
    
    ws.on('message', (message) => {
        console.log(`message = ${message}`)
        ws.send(`${message}`)
    })

    ws.on('close' , () => {
        console.log(`web socket is closed `)
    })
})