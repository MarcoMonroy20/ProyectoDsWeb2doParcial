const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const productoRoutes = require('./routes/producto.routes'); 

app.use(express.json());


app.use('/api', productoRoutes);


app.get('/', (req, res) => {
    res.send('¡Servidor funcionando correctamente para la gestión de productos!');
});

app.listen(port, () => {
    console.log(`El servidor está listo en el puerto ${port}`);
});

mongoose.connect('mongodb://localhost:27017/Proyecto', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión a MongoDB exitosa');
}).catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
});
