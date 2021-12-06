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
            if (log!=404){
                req.session.role = log.role
                req.session.user_id = log.id_user
                res.redirect('/')
                } else {
                    res.status(201).json({
                        status:201,
                        response:"acces denied user not found"
                    })
                }
        } catch(err) {
            console.log(err);
        }
    }
    async updateUser(req,res){
        try {
            const id = await usersService.updateUser(req.body);
            res.redirect('/')
        } catch (err){
            console.log(err);
        }
    }
    async deleteUser(req, res,id){
        id = req.params.ID
        try {
            await db('users').where({id_user : id}).del().then((ret) =>{
                res.redirect('/')
            })
        } catch (err){
            console.log(err);
        }
    }
}
module.exports = new usersController();