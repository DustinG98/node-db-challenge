const express = require('express');

const Projects = require('./project-model')

const router = express.Router();


//GET PROJECTS
router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(() => {
            res.status(500).json({ message: "Failed to get projects." })
        })
})

//ADD PROJECT
router.post('/', (req, res) => {
    Projects.addProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(() => {
            res.status(500).json({ message: "failed to create new project" })
        })
})

//GET PROJECT AND TASKS BY ID
router.get('/:id', (req, res) => {
    Projects.getProjectTasksById(req.params.id)
        .then(project => {
            res.json(project)
        })
        .catch(() => {
            res.status(500).json({ message: "Failed to get project and tasks" })
        })
})

//GET TASKS
router.get('/tasks', (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(() => {
            res.status(500).json({ message: "Failed to get tasks." })
        })
})

//ADD TASK
router.post('/:id/tasks', (req, res) => {
    Projects.getProjectById(req.params.id)
        .then(projects => {
            if(projects.length > 0) {
                const newTask = { ...req.body, project_id: Number(req.params.id) }
                Projects.addTask(newTask)
                    .then(task => {
                        res.status(201).json(task)
                    })
                    .catch(err => {
                        res.status(500).json({ message: "failed to create task" })
                    })
            }
            else {
                res.status(400).json({ message: "No project found." })
            }
        })
})



module.exports = router