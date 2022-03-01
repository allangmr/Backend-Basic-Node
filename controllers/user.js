const { response } = require('express')

const usersGet = (req, res) => {
    const { q, nombre, page = '1', limit = '10' } = req.query;
    res.json({
        msg: 'get API - controller',
        q,
        nombre,
        page,
        limit
    })
}

const usersPut = (req, res) => {
    const id = req.params.id
    res.status(500).json({
        msg: 'put API',
        id
    })
}

const usersPost = (req, res) => {
    const { nombre, edad } = req.body;
    res.status(201).json({
        msg: 'post API',
        nombre,
        edad
    })
}

const usersDelete = (req, res) => {
    res.json({
        msg: 'delete API'
    })
}

const usersPatch = (req, res) => {
    res.json({
        msg: 'patch API'
    })
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
}