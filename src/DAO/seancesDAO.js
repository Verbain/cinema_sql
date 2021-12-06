const db = require("../../db/db");

class seancesDAO{
    async createSeance(id_salle,id_film,sDate,nbPlace){
        const[ret] = await db('seances').insert({
            id_seance:null,
            id_film:id_film,
            id_salle:id_salle,
            seance_date:sDate,
            nb_place:nbPlace
        });
        return ret;
    }

    async updateSeance(id_seance,id_salle,id_film,sDate,nbPlace){
        const[ret] = await db('seances').where({id_seance:id_seance}).update({
            id_film:id_film,
            id_salle:id_salle,
            seance_date:sDate,
            nb_place:nbPlace
        });
        return ret;
    }
}

module.exports = new seancesDAO();