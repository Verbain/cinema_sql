const db = require("../../db/db")
const usersService = require('../services/usersService');

class usersController{
    async createUser(req,res){
        try{
            const id = await usersService.createUsers(req.body);
            res.status(201).json({
                id:id,
                status:201,
                response:'New User created',
                data:req.body
            });
        }catch(err) {
            console.log(err);
        }
    }
    async login(req,res){
        try{
            const log = await usersService.login(req.body);
            console.log(log)
            if (log!=404){
                req.session.user_credential = log
                console.log(req.session)
                res.redirect('/')
                } else {
                    res.status.json({
                        status:201,
                        response:"acces denied user not found"
                    })
                }
        } catch(err) {
            console.log(err);
        }
    }
}
module.exports = new usersController();