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
                res.render('reservation',{dataH,dataF,session})
            })
        })
        
    }
    
}

module.exports = new navigationController()