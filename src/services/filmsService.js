const filmsDAO = require('../DAO/filmsDAO');

class filmsService{
    createFilm(filmsDTO){
        const {film_name,affiche_url,realease_date,duration,filmaker,genre,id_salle}=filmsDTO;
        return filmsDAO.createFilm(film_name,affiche_url,realease_date,duration,filmaker,genre,id_salle)
    }
    updateFilm(filmsDTO){
        const {id,film_name,affiche_url,realease_date,duration,filmaker,genre,id_salle}=filmsDTO;
        return filmsDAO.updateFilm(id,film_name,affiche_url,realease_date,duration,filmaker,genre,id_salle)
    }
}

module.exports = new filmsService();