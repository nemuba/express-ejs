const express = require('express'); //Incluindo o express
const routes = express.Router(); // incluindo o Router do express para criar as rotas da aplicação
const SiteController = require('../controllers/SiteController'); //Incluindo o controller

// Criando as rotas
routes.get('/', SiteController.index);
routes.get('/about', SiteController.about);
routes.get('/contact', SiteController.contact);
routes.post('/contact', SiteController.send);

module.exports = routes; //Exportando as rotas.
