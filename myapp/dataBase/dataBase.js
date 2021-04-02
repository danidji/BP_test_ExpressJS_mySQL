const config = require("./config")
const mysql = require('mysql');

// gestion de la connexion à la base de données
const db = mysql.createConnection({

    host: "localhost",

    user: config.DATABASEUSER,

    password: config.DATABASEPWD,

    database: "classicmodels"


});



// export de la gestion de connexion
module.exports = db