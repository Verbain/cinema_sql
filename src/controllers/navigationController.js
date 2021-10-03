const session = require('express-session');
const db = require('../../db/db');
class navigationController{
    homepage(req,res){
        const session = req.session
        db.select().table('film_day').then(data => {
            console.log(data)
            res.render('home',{data,session})
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
    
}

module.exports = new navigationController()