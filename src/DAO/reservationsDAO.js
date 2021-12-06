const db = require("../../db/db");

class reservationsDAO{
    async createReservation(IDseance,IDuser,quantity){
        const[ret] = await db.raw('CALL transaction_reservation(?,?,?)',[IDseance,IDuser,quantity]);
        return ret;
    }
}

module.exports = new reservationsDAO();