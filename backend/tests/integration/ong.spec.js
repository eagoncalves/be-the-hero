const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ong', () => {

  beforeEach(async () => {
    /** Destroy the old migration */
    await connection.migrate.rollback();
    /** Create a migration */
    await connection.migrate.latest();
  });

  afterAll(() => {
    connection.destroy();
  });


  it('should be able to create an ong', async ()=> {
     const response = await request(app).post('/ongs')
      .send({
        name: "Cartorio",
        email: "contato@adep.com.br",
        whatsapp: '47999718342',
        city : "Blumenau",
        uf: "SC"
      });

      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
  });
});