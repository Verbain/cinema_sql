const filmsDAO = require('../DAO/filmsDAO');

class filmsService{
    createFilm(usersDTO){
        const {film_name,affiche_url,realease_date,duration,filmaker,genre,id_salle}=usersDTO;
        return filmsDAO.createFilm(film_name,affiche_url,realease_date,duration,filmaker,genre,id_salle)
    }
}

module.exports = new filmsService();