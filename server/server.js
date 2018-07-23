const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
//const handle = app.getRequestHandler()
const routes = require('./routes')
const handle = routes.getRequestHandler(app)

app.prepare()
.then(() => {
    const server = express()

    server.get('/api', (req, res) => {
        res.send({id: 1, name: `Julio`});
    })
    server.get('/posts/:id', (req, res) => {
        return app.render(req, res, '/posts', { id: req.params.id })
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Estamos Listos Capitan Ready on localhost:${port}`)
    })
})