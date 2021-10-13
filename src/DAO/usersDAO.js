const db = require("../../db/db");


class usersDAO{
    async createUsers(Firstname,Lastname,Email,Phone,Birthdate,Password){
        const[ret] = await db('users').insert({
            id_user:null,
            first_name:Firstname,
            last_name:Lastname,
            email:Email,
            phone:Phone,
            birthdate:Birthdate,
            password:Password,
            role:'user'
        });
        return ret;
    }
    async login(Firstname,Password){
        const user = await db('users').first().where({first_name:Firstname,password:Password});
        console.log(user)
        if(user){
            return user;
        } else {
            return 404;
        }
    }
}

module.exports = new usersDAO();