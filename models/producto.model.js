const mongoose = require('mongoose');

const ProductoEsquema = new mongoose.Schema({
  nombre: { type: String, required: true }, // Nombre del producto 
  marca: { type: String, required: true },  // Marca del producto 
  precio: { type: Number, required: true }, // Precio del producto
  categoria: { type: String, required: true }, // Tipo o categoria
  especificaciones: { // Detalles técnicos del producto
    procesador: { type: String }, // Para laptops
    ram: { type: String }, // Para laptops, monitores...
    almacenamiento: { type: String }, // SSD o HDD
    resolucion: { type: String }, // Para cámaras o monitores
    pantalla: { type: String }, // Tamaño de pantalla 
    bateria: { type: String }, // Para cámaras o laptops
    puertos: { type: [String] }, // Puertos disponibles 
    otros: { type: mongoose.Schema.Types.Mixed, default: {} } 
  },
  stock: { type: Number, required: true }, // Cantidad en inventario
  descripcion: { type: String }, // Descripción del producto
  imagen: { type: String }, // URL de la imagen del producto
  
});

module.exports = mongoose.model('Producto', ProductoEsquema);
