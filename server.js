const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const routes = require('./routes'); //importando as rotas

const port = process.env.PORT || 5000; //Especificando a porta para inicialização do servidor


app.set('view engine', 'ejs');     // Setamos que nossa engine será o ejs
app.use(expressLayouts);           // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(express.static(__dirname + '/public')); //Incluindo o caminho public para importação do css
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(port, () => {
    console.log(`A mágica acontece em http://localhost:${port}`);
});
