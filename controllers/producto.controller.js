const Producto = require('../models/producto.model');

// Obtener lista de todos los productos
exports.getAllProductos = async (req, res) => {
    const productos = await Producto.find();
    res.status(200).json(productos);
};

// Agregar un nuevo producto
exports.addProducto = async (req, res) => {
    console.log("addProducto");
    const nuevoProducto = await Producto.create(req.body);
    res.status(201).json(nuevoProducto);
};

// Obtener un producto por ID
exports.getProductoPorID = async (req, res) => {
    const idProducto = req.params.id;
    const producto = await Producto.findById(idProducto);

    if (!producto) {
        // Fallido
        return res.status(404).send({ mensaje: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
};

// Actualizar un producto
exports.updateProducto = async (req, res) => {
    const idProducto = req.params.id;
    const productoActualizado = await Producto.findByIdAndUpdate(idProducto, req.body, { new: true, runValidators: true });
    
    if (!productoActualizado) {
        // Fallido
        return res.status(404).send({ mensaje: 'Producto no encontrado' });
    }
    res.status(200).json(productoActualizado);
};

// Eliminar un producto
exports.deleteProducto = async (req, res) => {
    const idProducto = req.params.id;
    const productoEliminado = await Producto.findByIdAndDelete(idProducto);
    
    if (!productoEliminado) {
        // Fallido
        return res.status(404).send({ mensaje: 'Producto no encontrado' });
    }
    res.status(200).send({ mensaje: 'Producto eliminado correctamente' });
};
