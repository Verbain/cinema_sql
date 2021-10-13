const seancesDAO = require('../DAO/seancesDAO');

class seancesService{
    createSeance(usersDTO){
        const {id_salle,id_film,sDate,nbPlace}=usersDTO;
        return seancesDAO.createSeance(id_salle,id_film,sDate,nbPlace)
    }
}

module.exports = new seancesService();