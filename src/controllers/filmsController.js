const db = require("../../db/db")
const filmsService = require('../services/filmsService');

class filmsController{
    async createFilm(req,res){
        try{
            const id = await filmsService.createFilm(req.body);
            res.redirect('http://localhost:3000')
        }catch(err) {
            console.log(err);
        }
    }
}
module.exports = new filmsController();