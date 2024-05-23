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


module.exports = Macroactividades;
