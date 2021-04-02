const config = require("./config")
const mysql = require('mysql');

const db = mysql.createConnection({

    host: "localhost",

    user: config.DATABASEUSER,

    password: config.DATABASEPWD,

    database: "classicmodels"


});




module.exports = db