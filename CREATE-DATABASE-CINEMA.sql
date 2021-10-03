CREATE DATABASE cinema;
USE cinema;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'vanille95370';
FLUSH privileges;

CREATE TABLE salles(
id_salle INT NOT NULL auto_increment UNIQUE,
salle_name VARCHAR(255),
nb_place INT,
PRIMARY KEY(id_salle)
);
INSERT INTO salles VALUES(NULL,'Rettah',35);
INSERT INTO salles VALUES(NULL,'Verbain',20);
INSERT INTO salles VALUES(NULL,'Hashix',20);
CREATE TABLE films(
id_film INT NOT NULL auto_increment UNIQUE,
film_name VARCHAR(255) NOT NULL,
affiche_url VARCHAR(255) NOT NULL,
realease_date DATE NOT NULL,
duration INT NOT NULL,
filmaker VARCHAR(255) NOT NULL,
genre VARCHAR(255) NOT NULL,
id_salle INT NOT NULL,
PRIMARY KEY(id_film),
CONSTRAINT `fk_film_salle` FOREIGN KEY(id_salle) REFERENCES salles(id_salle)
);
INSERT INTO films VALUES(NULL,'WARCRAFT:Le commencement','https://i.imgur.com/o47rdew.png','2016-5-25',124,'Duncan Jones','Fantastique',1);
CREATE TABLE seances(
id_seance INT NOT NULL AUTO_INCREMENT UNIQUE,
id_salle INT NOT NULL,
id_film INT NOT NULL,
seance_date TIMESTAMP NOT NULL,
PRIMARY KEY(id_seance),
CONSTRAINT `fk_seance_salle` FOREIGN KEY(id_salle) REFERENCES salles(id_salle),
CONSTRAINT `fk_seance_film` FOREIGN KEY(id_film) REFERENCES films(id_film)
);
CREATE TABLE users(
id_user INT NOT NULL AUTO_INCREMENT UNIQUE,
first_name VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
phone VARCHAR(255) NOT NULL,
birthdate DATE NOT NULL,
password VARCHAR(255),
role VARCHAR(255),
PRIMARY KEY(id_user)
);
CREATE TABLE reservation(
id_reservation INT NOT NULL AUTO_INCREMENT UNIQUE,
id_seance INT NOT NULL,
id_user INT NOT NULL,
quantity INT NOT NULL,
PRIMARY KEY(id_reservation),
CONSTRAINT `max_quantity` CHECK(quantity <=4),
CONSTRAINT `fk_reservation_seance` FOREIGN KEY(id_seance) REFERENCES seances(id_seance),
CONSTRAINT `fk_reservation_user` FOREIGN KEY(id_user) REFERENCES users(id_user)
);

SET @max_quantity_salle_1 := 35;
SET @max_quantity_salle_2 := 20;
SET @max_quantity_salle_3 := 2;

INSERT INTO seances VALUE(null,1,1,'2021-09-30 16:00:00');
INSERT INTO seances VALUE(null,1,1,'2021-10-01 16:00:00');
INSERT INTO seances VALUE(null,1,1,'2021-10-03 16:00:00');
INSERT INTO seances VALUE(null,1,1,'2021-10-02 16:00:00');
INSERT INTO seances VALUE(null,1,1,'2021-10-15 16:00:00');

#View for films day +1 
CREATE VIEW film_day1 AS
SELECT seances.seance_date,
salles.salle_name,salles.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') = current_date() + interval 1 DAY ;

#View for film day +2
CREATE VIEW film_day2 AS
SELECT seances.seance_date,
salles.salle_name,salles.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') = current_date() + interval 2 DAY ;

#View for film day+3
CREATE VIEW film_day3 AS
SELECT seances.seance_date,
salles.salle_name,salles.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') = current_date() + interval 3 DAY ;

#View for film day+4
CREATE VIEW film_day4 AS
SELECT seances.seance_date,
salles.salle_name,salles.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') = current_date() + interval 4 DAY ;

#View for film day +5
CREATE VIEW film_day5 AS
SELECT seances.seance_date,
salles.salle_name,salles.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') = current_date() + interval 5 DAY ;

#view for film day +6
CREATE VIEW film_day6 AS
SELECT seances.seance_date,
salles.salle_name,salles.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') = current_date() + interval 6 DAY ;

#View for today film
CREATE VIEW film_day AS
SELECT seances.seance_date, date_format(seances.seance_date,'%h-%m') AS seance_time,
salles.salle_name,salles.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') = current_date();

#View all film from today to day + 6
CREATE VIEW film_day_today_6 AS
SELECT seances.seance_date,
salles.salle_name,salles.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') <= current_date() + interval 6 day 
AND date_format(seance_date,'%y-%m-%d') >= current_date();

#TEST VIEWS
SELECT * FROM film_day; 
SELECT * FROM film_day1;
SELECT * FROM film_day2;
SELECT * FROM film_day3;
SELECT * FROM film_day4;
SELECT * FROM film_day5;
SELECT * FROM film_day6;
SELECT * FROM film_day_today_6;

#PROCEDURE seance on interval
DELIMITER |
CREATE PROCEDURE film_on_interval (IN date_start date, IN date_end date)
BEGIN
    SELECT seances.seance_date,
	salles.salle_name,salles.nb_place,
	films.film_name,films.affiche_url,films.realease_date,films.duration,
	films.filmaker,films.genre 
	FROM seances 
	INNER JOIN salles ON seances.id_salle = salles.id_salle
	INNER JOIN films ON seances.id_film = films.id_film
	WHERE date_format(seance_date,'%y-%m-%d') <= date_end
	AND date_format(seance_date,'%y-%m-%d') >= date_start;
END |
DELIMITER ;
#Test procedure
CALL film_on_interval('2021-09-29','2021-10-10');

#PROCEDURE get first and last seance of moovie
DELIMITER |
CREATE PROCEDURE first_last_seance_film (IN film_id int)
BEGIN
	(SELECT * FROM seances WHERE id_film = film_id ORDER BY seance_date ASC LIMIT 1) 
	UNION
	(SELECT * FROM seances WHERE id_film = film_id ORDER BY seance_date DESC LIMIT 1);
END |
DELIMITER ;

#test procedure
CALL first_last_seance_film(1);


SELECT seances.seance_date, date_format(seances.seance_date,'%HH%mm') AS seance_time,
salles.salle_name,salles.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') = current_date();
