const express = require('express')
const router = express.Router()
const Tree = require('../models/tree')

// Getting all
router.get('/', async (req, res) => {
    try {
        const allTrees = await Tree.find()
        res.json(allTrees)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
})
// Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
// Creating one
router.post('/', async (req, res) => {
    const tree = new Tree({
        name: req.body.name,
    })
    try { 
        const newTree = await tree.save()
        res.status(201).json(newTree)
    } catch (err) {
        res.status(400);
    }
})
// Updating one
router.patch('/:id', (req, res) => {

})
// Deleting one
router.delete('/:id', (req, res) => {

})

module.exports = router
