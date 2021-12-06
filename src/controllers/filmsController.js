const db = require("../../db/db")
const filmsService = require('../services/filmsService');

class filmsController{
    async createFilm(req,res){
        try{
            const id = await filmsService.createFilm(req.body);
            res.redirect('/')
        }catch(err) {
            console.log(err);
        }
    }
    async updateFilm(req,res){
        try {
            const id = await filmsService.updateFilm(req.body);
            res.redirect('/')
        } catch (err){
            console.log(err);
        }
    }
    async deleteFilm(req, res,id){
        id = req.params.ID
        try {
            await db('films').where({id_film : id}).del().then((ret) =>{
                res.redirect('/')
            })
        } catch (err){
            console.log(err);
        }
    }
}
module.exports = new filmsController();