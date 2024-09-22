const express = require('express');
const router = express.Router();
const { getAllProductos, addProducto, getProductoPorID, updateProducto, deleteProducto} = require('../controllers/producto.controller');

// Mostrar todos los productos
router.get('/productos', getAllProductos);

// Crear un producto
router.post('/producto', addProducto);

// Buscar un producto por ID
router.get('/producto/:id', getProductoPorID);

// Actualizar un producto
router.put('/updateProducto/:id', updateProducto);

// Eliminar un producto 
router.delete('/deleteProducto/:id', deleteProducto);

module.exports = router;
