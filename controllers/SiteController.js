const faker = require('faker');

//Criação dos métodos para controle das views
module.exports = {
  
  //GET index : path  /
  index(req,res){
   return res.render('pages/home')
  },

  //GET index : path  /about
  about(req,res){
    const users = [{
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/300/300'
    }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/400/300'
    }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/500/300'
    }];

    return res.render('pages/about', { usuarios: users  });
  },

  //GET : path  /contact
  contact(req,res){
    return res.render('pages/contact');
  },

  //POST: path  /contact
  send(req,res){
    return res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!');
  }

}
