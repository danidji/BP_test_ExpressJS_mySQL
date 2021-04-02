var express = require('express');
var router = express.Router();

const db = require('../dataBase/dataBase')

/* GET home page. */
router.get('/', function (req, res, next) {

  // Connection bdd
  db.connect(function (err) {
    if (err) throw err
    console.log("connecté à la base de donnée")

    //Requete SQL pour la bdd

    db.query(`SELECT * FROM users`, (err, result) => {
      if (err) throw err

      // console.log(result[0])

      // Envoi des données de la BDD vers le index.pug pour l'affichage dans le navigateur
      res.render('index', {
        title: 'Mon test à la BDD',
        mesData: result
      });
    })

  })


});

module.exports = router;
