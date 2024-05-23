const mongoose = require('mongoose');

const ObjetivoEstrategicoSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    
},
{
    timestamps: true,     
    versionKey: false
}
);


const ObjetivoEstrategico = mongoose.model('Objetivo', ObjetivoEstrategicoSchema);


// Datos de ejemplo para los Objetivos Estratégicos
const objetivosData = [
    { nombre: 'Desarrollo Institucional'},
    { nombre: 'Eficiencia Administrativa'},
    { nombre: 'Calidad de Vida'},
    { nombre: 'Articulación e Impacto Social'},
    { nombre: 'Calidad Académica'},
];
    

// El codigo de abajo es para insertar en la base de datos el array los datos. lo dejo comentado porque ya estan insertados los datos

// ObjetivoEstrategico.insertMany(objetivosData)
//     .then(() => console.log('Objetivos Estratégicos insertados correctamente'))
//     .catch(error => console.error('Error al insertar Objetivos Estratégicos:', error));


module.exports = ObjetivoEstrategico;
