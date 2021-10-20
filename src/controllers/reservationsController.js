const db = require("../../db/db")
const reservationsService = require('../services/reservationsService');

class reservationsController{
    async createReservation(req,res){
        console.log(req.body)

            db.select().table('seances').where({id_seance : req.body.IDseance}).first().then(async (data)=>{
                let verification = data.nb_place - req.body.quantity

                if(verification < 0 ){
                    console.log('reservation impossible') 
                } else {
                    try{
                        const id = await reservationsService.createReservation(req.body);
                        res.status(201).json({
                            response: "reservation complete"
                        })
                    }catch(err) {
                        console.log(err);
                    }
                }
            })
    }
}
module.exports = new reservationsController();