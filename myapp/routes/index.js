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
    db.query('SELECT * FROM users WHERE id_users=1', (err, result) => {
      if (err) throw err

      // console.log(result[0].nom_users)

      res.render('index', {
        title: 'Mon test à la BDD',
        nom: result[0].nom_users,
        prenom: result[0].prenom_users,
      });
    })

  })


});

module.exports = router;
