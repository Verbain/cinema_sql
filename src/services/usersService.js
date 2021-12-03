const usersDAO = require('../DAO/usersDAO');

class usersService{
    createUsers(usersDTO){
        const {Firstname,Lastname,Email,Phone,Birthdate,Password}=usersDTO;
        return usersDAO.createUsers(Firstname,Lastname,Email,Phone,Birthdate,Password)
    }
    login(usersDTO){
        const {Firstname,Password}=usersDTO;
        return usersDAO.login(Firstname,Password)
    }
    updateUser(usersDTO){
        const {id,Firstname,Lastname,Email,Phone,Birthdate,Password,Role} = usersDTO;
        return usersDAO.updateUser(id,Firstname,Lastname,Email,Phone,Birthdate,Password,Role)
    }
}

module.exports = new usersService();