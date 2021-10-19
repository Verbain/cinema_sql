const db = require("../../db/db")
const reservationsService = require('../services/reservationsService');

class reservationsController{
    async createReservation(req,res){
        try{
            const id = await reservationsService.createReservation(req.body);
            /* verifier le nombre de place de la seance et compare a la quantité if nb_place_restance >= 0
            rediriger  ELSE throw error */
        }catch(err) {
            console.log(err);
        }
    }
}
module.exports = new reservationsController();