const sallesDAO = require('../DAO/sallesDAO');

class sallesService{
    createSalle(usersDTO){
        const {salleName,nbPlace}=usersDTO;
        return sallesDAO.createSalle(salleName,nbPlace)
    }
}

module.exports = new sallesService();