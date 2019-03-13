// dans index.js il faut définir un router
// on utilise express a la sortie du require et on appelle router
// quand je require express ca me retourne la fonction express je retourne uniquement router
const router = require('express').Router();

// on peut maintenant definir une route
router.get('/', (req, res) =>{
    console.log("kikoo");
    res.render('home');
})



//on export notre router 
module.exports = router;