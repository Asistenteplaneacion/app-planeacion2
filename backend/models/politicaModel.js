const mongoose = require('mongoose');

const politicaSchema = mongoose.Schema({
    nombre: {type: String, required: true},

},
{timestamps: true, versionKey: false}     //una propiedad para que se coloque la fecha
);

const Politica = mongoose.model('Politica', politicaSchema);


// Datos de ejemplo para las Políticas, organizados en orden
const politicasData = [
    { nombre: '1. Cultura de Transparencia y Rendición de cuentas'},
    { nombre: '2. Calidad como Fundamento de la Pertinencia y el Impacto Social'},
    { nombre: '3. Desarrollo Humano, Construcción de Comunidad y Tejido Social'},
    { nombre: '4. Modernización y Tecnológica progresiva de los procesos administrativos y académicos'},
    { nombre: '5. Gestión Académica y Administrativa Social, Económica y Ambientalmente Responsable'},

];
    
    


// El codigo de abajo es para insertar en la base de datos el array los datos. lo dejo comentado porque ya estan insertados los datos


// Politica.insertMany(politicasData)
//     .then(() => console.log('Políticas insertadas correctamente'))
//     .catch(error => console.error('Error al insertar Políticas:', error));


module.exports = Politica;
