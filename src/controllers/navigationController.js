const session = require('express-session');
const db = require('../../db/db');
const moment = require('moment');
class navigationController{
    homepage(req,res){
        const session = req.session
        db.select().table('film_day_1_to_6').then(dataW =>{
            db.select().table('film_day').then(data => {
                console.log(data)
                res.render('home',{data,dataW,session,moment})
            })
        })   
    }
    search(req,res){
        const session = req.session
        const startD = req.params.startD
        const endD = req.params.endD
        console.log("start date : " + startD + "end date : " + endD)
            db.raw('CALL film_on_interval(?,?)',[startD,endD]).then(data => {
                data = data[0][0]
                res.render('carousel_between_date',{data,session})
            })  
    }
    inscription(req,res){
        const session = req.session
        res.render('inscriptionForm',{session});
    }
    login(req,res){
        const session = req.session
        res.render('login',{session})
    }
    logout(req,res){
        req.session.destroy();
        res.redirect('/')
    }
    seance(req,res){
        const session = req.session
        db.select().table('hours').then(dataH =>{
            db.select().table('films').then(dataF =>{
                res.render('seanceForm',{dataH,dataF,session})
            })
        })
        
    }
    film(req,res){
        const session = req.session;
        const id_film = req.params.ID
        let update = 0;
        if (id_film){
            update = 1;
            db.select().table('films').where({id_film:id_film}).first().then(dataU=>{
                db.select().table('salles').then(dataS=>{
                    const dateUpdate = dataU.realease_date
                    const myDate = dateUpdate.toISOString().split('T')[0]
                    console.log(myDate)
                    res.render('filmForm',{dataS,dataU,session,update,myDate})
                })
            })
        }else {
            db.select().table('salles').then(dataS=>{
                res.render('filmForm',{dataS,session,update})
            })
        } 
    }
    salle(req,res){
        const session = req.session;
        res.render('salleForm',{session})
    }
    reservation(req,res){
        const session = req.session;
        const IDseance = req.params.IDseance;
        res.render('reservationForm',{session,IDseance})
    }

    // LISTING
    listFilms(req,res){
        const session = req.session;
        db.select().table('films').then(data =>{
            res.render('listFilms',{session,data})
        })
    }
    listSalles(req,res){
        const session = req.session;
        db.select().table('salles').then(data =>{
            res.render('listSalles',{session,data})
        })
    }
    listSeances(req,res){
        const session = req.session;
        db.select().table('seance_information').then(data =>{
            res.render('listSeances',{session,data})
        })
    }
    listUsers(req,res){
        const session = req.session;
        db.select().table('users').then(data =>{
            res.render('listUsers',{session,data})
        })
    }
    filmInformation(req,res){
        const session = req.session;
        const film_id = req.params.filmID
        db.select().table('films').where({id_film : film_id}).first().then(data =>{
            res.render('filmInfo',{session,data})
        })
    }
    /*
    updateSeances(req,res,id_seance){
        const session = req.session;
        const id_seance = req.params.ID
        db.select().table('seances').where({id_seance:id_seance}).first().then(dataS => {
            db.select().table('hours').then(dataH =>{
                db.select().table('films').then(dataF =>{
                    res.render('formUpdateSeance',{dataS,dataH,dataF,session})
                })
            })
        })
    }*/
}

module.exports = new navigationController()