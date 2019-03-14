const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const routes = require('./routes');
const bodyParser =require('body-parser');
// la const port soit elle est egale a process .env.PORT 
// node_modules va nous renseigner sur le process qui est en cours d'éxécution 
// on va avoir accès à la variable env.qui contient toutes les variable d'environement  
// et on défini la varible d'environement PORT...
//et si jamais elle n'est pas défini le port 3000 par defaut..
const port = process.env.PORT || 3000;

// les Folders------------------------------------------------------
// défini le folder pour nos vues ...avec la key .set
// il nous faut un require path
//app.set('views', path.join(__dirname, 'views'));
// on spécifie la view engine pour ne pas tapper l'extension à chaque fois que l'on utilise pug
app.set('view engine','pug');

// les Middlewares----------------------------------------------------
// on utilise notre logger morgan il faut require!
app.use(morgan('short'));
// on appli nos principeaux middlewares...ici on récupère des statics
app.use(express.static(path.join(__dirname,'public')));
// 2 middlewares natif pour récupérer la data que l'on envoi POST
app.use(bodyParser.json());
// et urlencoded recupérer la data en body mais sur un autre format que json plus complexe
app.use(express.urlencoded({ extended : true }));

// les Routes---------------------------------------
// point d'entrée de nos routes il fautr require l'index !
app.use(routes);

// le port-------------------------------------------------------------
app.listen(port, () => console.log("Server is listening on port", port));
