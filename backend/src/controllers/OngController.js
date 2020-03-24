const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {

    // List ongs
    async index(req, res) {
        const ongs = await connection("ongs").select("*");

        return res.json(ongs);
    },

    // Create ongs
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString("HEX");

        await connection("ongs").insert({
            id, 
            name, 
            email, 
            whatsapp, 
            city, 
            uf,
        })

        return response.json({ id });
    }
}