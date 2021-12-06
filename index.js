const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
const session = require('express-session');
const films = require('./src/controllers/filmsController')
const navigationController = require('./src/controllers/navigationController');
const usersController = require('./src/controllers/usersController');
const seancesController = require('./src/controllers/seancesController');
const filmsController = require('./src/controllers/filmsController');
const sallesController = require('./src/controllers/sallesController');
const reservationsController = require('./src/controllers/reservationsController');

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
app.get('/search/:startD/:endD',navigationController.search)
app.get('/inscription',navigationController.inscription)
app.get('/login',navigationController.login)
app.get('/logout',navigationController.logout)
app.get('/seance',navigationController.seance)
app.get('/film',navigationController.film)
app.get('/film/:ID',navigationController.film)
app.get('/salle',navigationController.salle)
app.get('/reservation/:IDseance',navigationController.reservation)
app.get('/listFilms',navigationController.listFilms)
app.get('/listSeances',navigationController.listSeances)
app.get('/listSalles',navigationController.listSalles)
app.get('/listUsers',navigationController.listUsers)
app.get('/filmInfo/:filmID',navigationController.filmInformation)
app.get('/succesReservation',navigationController.reservationSucces)
//NEW USER
app.post('/api/newUser',urlEncodedParser,usersController.createUser)
app.post('/api/login',urlEncodedParser,usersController.login)
//DELETE USER
app.get('/api/delete/user/:ID',usersController.deleteUser)

//NEW SEANCE
app.post('/api/seance',urlEncodedParser,seancesController.createSeance)
//DELETE SEANCE
app.get('/api/delete/seance/:ID',seancesController.deleteSeance)

//NEW FILM
app.post('/api/film',urlEncodedParser,filmsController.createFilm)
//UPDATE FILM
app.post('/api/update/film',urlEncodedParser,filmsController.updateFilm)
//DELETE FILM
app.get('/api/delete/film/:ID',filmsController.deleteFilm)

//NEW SALLE
app.post('/api/salle',urlEncodedParser,sallesController.createSalle)
//DELETE SALLE
app.get('/api/delete/salle/:ID',sallesController.deleteSalle)

//NEW RESERVATION
app.post('/api/reservation',urlEncodedParser,reservationsController.createReservation)


app.listen(3000,function(){
    console.log("app listening on port 3000")
})