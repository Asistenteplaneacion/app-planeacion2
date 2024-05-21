const mongoose = require('mongoose');

const saveDataSchema = mongoose.Schema({
    objetivo: {type: String, required: true},
    politica: {type: String, required: true},
    programa: {type: String, required: true},
    proyecto: {type: String, required: true},
    componente: {type: String, required: true},
    responsableComponente: {type: String, required: true},
    macroactividades: [{
        campo1: { type: String, required: true },
        campo2: { type: String, required: true },
        campo3: { type: String, required: true }
    }]

},
{
    timestamps: true,   
    versionKey: false
}
);


const saveData = mongoose.model('SaveData', saveDataSchema);


module.exports = saveData;
