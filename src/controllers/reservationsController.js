const db = require("../../db/db")
const reservationsService = require('../services/reservationsService');

class reservationsController{
    async createReservation(req,res){
        console.log(req.body)

            db.select().table('seances').where({id_seance : req.body.IDseance}).first().then(async (data)=>{
                let verification = data.nb_place - req.body.quantity
                if(verification < 0 ){
                } else {
                    try{
                        const id = await reservationsService.createReservation(req.body);
                        res.redirect('/succesReservation')
                    }catch(err) {
                        console.log(err);
                    }
                }
            })
    }
}
module.exports = new reservationsController();