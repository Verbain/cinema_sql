const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
const session = require('express-session');
const films = require('./src/controllers/filmsController')
const navigationController = require('./src/controllers/navigationController');
const usersController = require('./src/controllers/usersController');
const seancesController = require('./src/controllers/seancesController');

const urlEncodedParser = bodyParser.urlencoded({extended : false})


app.use(express.json());
app.use(cors());
app.use(session({
    secret:'secret-key',
    resave:false,
    saveUninitialized: false
}))
//set templating engine
app.set('view engine','ejs')
//set css for ejs
app.use(express.static(__dirname+'/style'))
//ROUTING
app.get('/',navigationController.homepage)
app.get('/inscription',navigationController.inscription)
app.get('/login',navigationController.login)
app.get('/logout',navigationController.logout)
app.get('/seance',navigationController.seance)
//NEW USER
app.post('/api/newUser',urlEncodedParser,usersController.createUser)
app.post('/api/login',urlEncodedParser,usersController.login)

//NEW SEANCE
app.post('/api/seance',urlEncodedParser,seancesController.createSeance)

app.listen(3000,function(){
    console.log("app listening on port 3000")
})