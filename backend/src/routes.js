const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/* List all ongs */
routes.get('/ongs', OngController.getAll);
/* Create a new Ong */
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.getAll);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.getById);

routes.post('/sessions', SessionController.create)

module.exports = routes;