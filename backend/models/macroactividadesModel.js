const mongoose = require('mongoose');

const macroactividadesSchema = mongoose.Schema({
    macroactividades: [{
        campo1: { type: String },
        campo2: { type: String },
        campo3: { type: String },
    deleted: { type: Boolean, default: false}
    }]

},
{timestamps: true, versionKey: false}   //una propiedad para que se coloque la fecha
);

const Macroactividades = mongoose.model('Macroactividades', macroactividadesSchema);


// Lista de macroactividades de componente
// const macroactividadData = {
//     nombre: 'Coordinación de Educación Continua',
// };

// Insertar los objetos de los Proyectos en la base de datos
// Macroactividad.insertMany(macroactividadData)
//     .then(() => console.log('Proyectos insertados correctamente'))
//     .catch(error => console.error('Error al insertar Proyectos:', error));

module.exports = Macroactividades;
