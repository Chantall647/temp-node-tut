const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req)
    if (req.url === '/') {
        res.end('Hello World')
    }
    if (req.url === '/about') {
        res.end('About Page')
    }
    res.end(`<h1>Ooops</h1>
    <p>We can't seem to find the page you are looking for</p>`)
})

server.listen(5100)
