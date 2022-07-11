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
router.get('/:id', getTree, (req, res) => {
    res.send(res.tree.name)
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
router.delete('/:id', getTree, async (req, res) => {
    try {
        await res.tree.remove()
        res.json({ message: 'Successfully deleted object'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getTree(req, res, next) {
    let tree;
    try {
        tree = await Tree.findById(req.params.id)
        if (tree == null) {
            return res.status(404).json({ message: 'Cannot find tree' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.tree = tree;
    next()
}

module.exports = router
