const gateway = require('fast-gateway')
const port = 9001
const server = gateway({
    routes: [
        {
            prefix: 'order',
            target: 'http://localhost:5001',
        },
        {
            prefix: 'payment',
            target: 'http://localhost:5002',
        },
        {
            prefix: 'user',
            target: 'http://localhost:5003',
        }
    ]
})

server.get('/', (req, res) => res.send("gateway ✅✅"))
server.get('/test', (req, res) => res.send("yes called gateway🙏"))
server.start(port || process.env.PORT).then(() => {
    console.log("fast getway is running");
}).catch(() => {
    console.log("fast getway service is down");
})