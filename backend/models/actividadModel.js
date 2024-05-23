const mongoose = require('mongoose');

const actividadSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    macroactividad: { type: mongoose.Schema.Types.ObjectId, ref: 'Macroactividad'},
    periodoEjecucion: { type: mongoose.Schema.Types.ObjectId, ref: 'Macroactividad'},
    deleted: { type: Boolean, default: false},

},
{timestamps: true, versionKey: false}     //una propiedad para que se coloque la fecha
)

const Actividad = mongoose.model('Actividad', actividadSchema);


module.exports = Actividad;

