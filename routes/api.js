var express = require('express');
var router = express.Router();
const { Sequelize, Op } = require('sequelize');
const Producto = require('../models').producto;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');

});

router.get('/productos', function(req, res, next) {
    Producto.findAll({
            attributes: { exclude: ["updatedAt"] }
        })
        .then(productos => {
            res.json(productos)
        })
        .catch(error => res.status(400).send(error))
});

router.get('/productos/:id', function(req, res, next) {
    Producto.findOne({
            where: { id: req.params.id }
        })
        .then(productos => {
            res.json(productos)
        })
        .catch(error => res.status(400).send(error))
});

module.exports = router;