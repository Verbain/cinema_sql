const db = require("../../db/db");

class filmsDAO{
    async createFilm(film_name,affiche_url,realease_date,duration,filmaker,genre,id_salle){
        const[ret] = await db('films').insert({
            id_film:null,
            film_name:film_name,
            affiche_url:affiche_url,
            realease_date:realease_date,
            duration:duration,
            filmaker:filmaker,
            genre:genre,
            id_salle:id_salle
        });
        return ret;
    }

    async updateFilm(id,film_name,affiche_url,realease_date,duration,filmaker,genre,id_salle){
        const ret = await db('films').where({id_film: id}).update({
            film_name:film_name,
            affiche_url:affiche_url,
            realease_date:realease_date,
            duration:duration,
            filmaker:filmaker,
            genre:genre,
            id_salle:id_salle
        });
        return ret;
    }
}

module.exports = new filmsDAO();