const express = require('express');

const Resources = require('./resources-model')

const router = express.Router();


//GET RESOURCES
router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(() => {
            res.status(500).json({ message: "Failed to get resources." })
        })
})

//ADD RESOURCE
router.post('/', (req, res) => {
    Resources.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(() => {
            res.status(500).json({ message: "Failed to add resource" })
        })
})


module.exports = router