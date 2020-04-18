const express = require('express')

const ProjectRouter = require('./projects/project-router')
const ResourceRouter = require('./resources/resources-router')

const server = express();

server.use(express.json())

server.get('/', (req, res) => {
    res.json({ message: "Server is connected." })
})
server.use('/api/projects', ProjectRouter)
server.use('/api/resources', ResourceRouter)


module.exports = server;