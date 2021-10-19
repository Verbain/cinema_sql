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
}
module.exports = new sallesController();