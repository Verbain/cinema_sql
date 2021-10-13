const db = require("../../db/db");

class filmsDAO{
    async createFilm(name,film_name,affiche_url,realease_date,duration,filmaker,genre,id_salle){
        const[ret] = await db('films').insert({
            id_film:null,
            film_name:name,
            affiche_url:affiche,
            realease_date:date,
            duration:duration,
            filmaker:filmaker,
            genre:genre,
            id_salle:id_salle
        });
        return ret;
    }
}

module.exports = new filmsDAO();