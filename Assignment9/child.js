
process.on('message', (message) => {
    console.log('Message from parent:', message);
})

process.send("Hello from client..");