const Macroactividades = require('../models/macroactividadesModel');

exports.macroactividades = async (req, res) => {
    const { method, body } = req;

    switch (method) {
        case 'GET':
            try {
                const resultado1 = await Macroactividades.find();
                return res.status(200).json(resultado1);
            } catch (err) {
                return res.status(400).json({ error: err.message });
            }

        case 'POST':
            try {
                const nuevaMacroactividad = new Macroactividades(body);
                const resultado1 = await nuevaMacroactividad.save();
                return res.status(201).json(resultado1);
            } catch (err) {
                return res.status(400).json({ error: err.message });
            }
    
        default:
            return res.status(405).json({ error: 'Method Not Allowed' });
    }
};
