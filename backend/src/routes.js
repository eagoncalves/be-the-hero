const express = require('express');
const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/* List all ongs */
routes.get('/ongs', OngController.getAll);
/* Create a new Ong */
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2), 
  })
}), OngController.create);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), IncidentsController.getAll);

routes.post('/incidents', IncidentsController.create);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), IncidentsController.delete);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}) , ProfileController.getById);

routes.post('/sessions', SessionController.create)

module.exports = routes;