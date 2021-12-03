const seancesDAO = require('../DAO/seancesDAO');

class seancesService{
    createSeance(seancesDTO){
        const {id_salle,id_film,sDate,nbPlace}=seancesDTO;
        return seancesDAO.createSeance(id_salle,id_film,sDate,nbPlace)
    }
    updateSeance(seancesDTO){
        const {id_seance,id_salle,id_film,sDate,nbPlace}=seancesDTO;
        return seancesDAO.updateSeance(id_seance,id_salle,id_film,sDate,nbPlace)
    }
}

module.exports = new seancesService();