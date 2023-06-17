const http = require('http');

const server = http.createServer((req, res) => {
    const data = {
        message: "This is some data from server"
    }
   res.end("This is my first response")
})

server.listen(process.env.PORT | 5000, () => {
    console.log('Server started on port 5000')
});

