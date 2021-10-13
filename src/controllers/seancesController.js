const db = require("../../db/db")
const seancesService = require('../services/seancesService');

class seancesController{
    async createSeance(req,res){
        db.select().table('films').first().where({id_film:req.body.sFilm}).then(dataF =>{
            db.select().table('salles').first().where({id_salle:dataF.id_salle}).then(async (dataS) =>{
                //if(req.body.sDate[1]){
                    for (let x=0;x<req.body.sDate.length;x++){
                        let end = ":00"
                        let time = req.body.sDate[x] 
                        let date = req.body.Seancedate
                        let formatedTime = time.concat("",end)
                        let sendingDate = date.concat(" ",formatedTime)
                        const payload = {
                            "id_film" : req.body.sFilm,
                            "id_salle" : dataF.id_salle,
                            "sDate" : sendingDate,
                            "nbPlace":dataS.nb_place
                        }
                        try {
                            const id = await seancesService.createSeance(payload);
                        } catch (err){
                            console.log(err);
                        }
                    }
                /*} else {
                        let end = ":00"
                        let time = req.body.sDate 
                        let date = req.body.Seancedate
                        let formatedTime = time.concat("",end)
                        let sendingDate = date.concat(" ",formatedTime)
                        const payload = {
                            "id_film" : req.body.sFilm,
                            "id_salle" : dataF.id_salle,
                            "sDate" : sendingDate,
                            "nbPlace":dataS.nb_place
                        }
                    try {
                        const id = await seancesService.createSeance(payload);
                    } catch (err){
                        console.log(err);
                    }
                }*/
            })
        })
            res.redirect('http://localhost:3000')
        }
}
module.exports = new seancesController();