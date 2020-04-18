const db = require('../data/dbConfig')
//GET RESOURCES
function getResources() {
    return db('resources')
}

//GET RESOURCE BY ID
function getResourceById(id) {
    return db('resources').where({ id })
} 

//ADD RESOURCE
function addResource(resource) {
    return db('resources').insert(resource)
        .then(ids => {
            return getResourceById(ids[0])
        })
}

module.exports = {
    getResources,
    getResourceById,
    addResource
}