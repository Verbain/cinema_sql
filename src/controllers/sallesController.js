const db = require("../../db/db")
const sallesService = require('../services/sallesService');

class sallesController{
    async createSalle(req,res){
        try{
            const id = await sallesService.createSalle(req.body);
            res.redirect('http://localhost:3000');
        }catch(err) {
            console.log(err);
        }
    }

    async updateSalle(req,res){
        try {
            const id = await sallesService.updateSalle(req.body);
            res.redirect('/')
        } catch (err){
            console.log(err);
        }
    }
    async deleteSalle(req, res,id){
        id = req.params.ID
        try {
            await db('salles').where({id_salle : id}).del().then((ret) =>{
                res.redirect('/')
            })
        } catch (err){
            console.log(err);
        }
    }
}
module.exports = new sallesController();