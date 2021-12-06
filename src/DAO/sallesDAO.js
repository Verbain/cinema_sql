const db = require("../../db/db");

class sallesDAO{
    async createSalle(salleName,nbPlace){
        const[ret] = await db('salles').insert({
            id_salle:null,
            salle_name:salleName,
            nb_place:nbPlace
        });
        return ret;
    }
    async updateSalle(id,salleName,nbPlace){ 
        const [ret] = await db('salles').where({id_salle: id}).update({salle_name:salleName,nb_place:nbPlace}).returning('id');
        return ret;
    }

}

module.exports = new sallesDAO();