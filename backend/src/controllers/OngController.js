const generateUniqueId = require('../utils/generateUniqueId');
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        
        const id = generateUniqueId();
    
        // Conexão
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        /*
            ** Parâmetros **
            Query params = request.query
            Route Params = request.params
            Request body = corpo da requisição. request.body
        */
       return response.json({id});
    }
};