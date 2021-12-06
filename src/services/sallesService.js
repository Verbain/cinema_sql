const sallesDAO = require('../DAO/sallesDAO');

class sallesService{
    createSalle(sallesDTO){
        const {salleName,nbPlace}=sallesDTO;
        return sallesDAO.createSalle(salleName,nbPlace)
    }
    updateSalle(sallesDTO){
        const {id,salleName,nbPlace}=sallesDTO;
        return sallesDAO.updateSalle(id,salleName,nbPlace)
    }
}

module.exports = new sallesService();