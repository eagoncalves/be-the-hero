const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = generateUniqueId();
  
    try { 
      await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
      });
      return response.json({ id: id });
    } catch (e) {
      return response.json({ message: ` There was a problem with the proccess. ${e}` })
    }
  },

  async getAll(request, response) {
    const ongs =  await connection('ongs').select('*');
    return response.json(ongs);
  }
}