const reservationsDAO = require('../DAO/reservationsDAO');

class reservationsService{
    createReservation(reservationDTO){
        const {IDseance,IDuser,quantity}=reservationDTO;
        return reservationsDAO.createReservation(IDseance,IDuser,quantity)
    }
}

module.exports = new reservationsService();