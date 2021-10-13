const db = require("../../db/db")
const filmsService = require('../services/filmsService');

class filmsController{
    async createFilm(req,res){
        try{
            const id = await filmsService.createFilm(req.body);
            res.status(201).json({
                id:id,
                status:201,
                response:'New film created',
                data:req.body
            });
        }catch(err) {
            console.log(err);
        }
    }
}
module.exports = new filmsController();