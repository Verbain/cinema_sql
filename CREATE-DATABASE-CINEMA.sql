CREATE DATABASE cinema;
USE cinema;
/*utiliser pour autoriser les connexions du back use ur db password*/
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'myDatabasePassword';
FLUSH privileges;

/* salles tables + insert salles par défault du brief */
CREATE TABLE salles(
id_salle INT NOT NULL auto_increment UNIQUE,
salle_name VARCHAR(255),
nb_place INT,
PRIMARY KEY(id_salle)
);
INSERT INTO salles VALUES(NULL,'Rettah',35);
INSERT INTO salles VALUES(NULL,'Verbain',20);
INSERT INTO salles VALUES(NULL,'Hashix',20);

/*films table + insert 1 films exemple*/
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

/*seances table*/
CREATE TABLE seances(
id_seance INT NOT NULL AUTO_INCREMENT UNIQUE,
id_salle INT NOT NULL,
id_film INT NOT NULL,
seance_date TIMESTAMP NOT NULL,
nb_place INT NOT NULL,
PRIMARY KEY(id_seance),
CONSTRAINT `nb_place_above_0` CHECK(nb_place >= 0),
CONSTRAINT `fk_seance_salle` FOREIGN KEY(id_salle) REFERENCES salles(id_salle),
CONSTRAINT `fk_seance_film` FOREIGN KEY(id_film) REFERENCES films(id_film)
);
/* table user pour récupérer les infos user et le login */
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

/*table de reservation*/
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

/*table hours table fonctionnel utiliser pour dropdown*/
CREATE TABLE hours(
hours VARCHAR(255)
);
insert into hours VALUE('8:00');
insert into hours VALUE('8:30');
insert into hours VALUE('9:00');
insert into hours VALUE('9:30');
insert into hours VALUE('10:00');
insert into hours VALUE('10:30');
insert into hours VALUE('11:00');
insert into hours VALUE('11:30');
insert into hours VALUE('12:00');
insert into hours VALUE('12:30');
insert into hours VALUE('13:00');
insert into hours VALUE('13:30');
insert into hours VALUE('14:00');
insert into hours VALUE('14:30');
insert into hours VALUE('15:00');
insert into hours VALUE('15:30');
insert into hours VALUE('16:00');
insert into hours VALUE('16:30');
insert into hours VALUE('17:00');
insert into hours VALUE('17:30');
insert into hours VALUE('18:00');
insert into hours VALUE('18:30');
insert into hours VALUE('19:00');
insert into hours VALUE('19:30');
insert into hours VALUE('20:00');
insert into hours VALUE('20:30');
insert into hours VALUE('21:00');
insert into hours VALUE('21:30');
insert into hours VALUE('22:00');
insert into hours VALUE('22:30');




SET @max_quantity_salle_1 := 35;
SET @max_quantity_salle_2 := 20;
SET @max_quantity_salle_3 := 2;

/*test insert seances et default credentials pour user et admin*/
INSERT INTO seances VALUE(null,1,1,'2021-09-30 16:00:00','35');
INSERT INTO seances VALUE(null,1,1,'2021-10-01 16:00:00','35');
INSERT INTO seances VALUE(null,1,1,'2021-10-03 16:00:00','35');
INSERT INTO seances VALUE(null,1,1,'2021-10-02 16:00:00','35');
INSERT INTO seances VALUE(null,1,1,'2021-10-15 16:00:00','35');

insert into users values(null,'admin','admin','admin@gmail.com','0613946470','1997-09-29','admin','admin');
insert into users values(null,'user','user','user@gmail.com','0613946470','1997-09-29','user','user');

/*creations de view */
#View for films day +1 
CREATE VIEW film_day1 AS
SELECT seances.seance_date,
salles.salle_name,seances.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') = current_date() + interval 1 DAY ;

#View for film day +2
CREATE VIEW film_day2 AS
SELECT seances.seance_date,
salles.salle_name,seances.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') = current_date() + interval 2 DAY ;

#View for film day+3
CREATE VIEW film_day3 AS
SELECT seances.seance_date,
salles.salle_name,seances.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') = current_date() + interval 3 DAY ;

#View for film day+4
CREATE VIEW film_day4 AS
SELECT seances.seance_date,
salles.salle_name,seances.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') = current_date() + interval 4 DAY ;

#View for film day +5
CREATE VIEW film_day5 AS
SELECT seances.seance_date,
salles.salle_name,seances.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') = current_date() + interval 5 DAY ;

#view for film day +6
CREATE VIEW film_day6 AS
SELECT seances.seance_date,
salles.salle_name,seances.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') = current_date() + interval 6 DAY ;

#View for today seances
CREATE VIEW film_day AS
SELECT seances.seance_date, date_format(seances.seance_date,'%HH%i') AS seance_time,
salles.salle_name,seances.nb_place,
films.film_name,films.affiche_url,films.realease_date,films.duration,films.id_film,
films.filmaker,films.genre,seances.id_seance
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') = current_date();

#View all seances from day+1 to day + 6
CREATE VIEW film_day_1_to_6 AS
SELECT seances.seance_date, date_format(seances.seance_date,'%HH%i') AS seance_time,
salles.salle_name,seances.nb_place, date_format(seances.seance_date,'%d-%m') AS seance_day,
films.film_name,films.affiche_url,films.realease_date,films.duration,films.id_film,
films.filmaker,films.genre,seances.id_seance 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
WHERE date_format(seance_date,'%y-%m-%d') <= current_date() + interval 6 day 
AND date_format(seance_date,'%y-%m-%d') >= current_date() + interval 1 day
ORDER BY seance_day;

#View for seance information
CREATE VIEW seance_information AS
SELECT seances.seance_date, date_format(seances.seance_date,'%HH%i') AS seance_time,
salles.salle_name,seances.nb_place, date_format(seances.seance_date,'%d-%m') AS seance_day,
films.film_name,films.affiche_url,films.realease_date,films.duration,
films.filmaker,films.genre,seances.id_seance 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
ORDER BY seance_day;

#TEST VIEWS
SELECT * FROM film_day; 
SELECT * FROM film_day1;
SELECT * FROM film_day2;
SELECT * FROM film_day3;
SELECT * FROM film_day4;
SELECT * FROM film_day5;
SELECT * FROM film_day6;
SELECT * FROM film_day_1_to_6;
SELECT * FROM seance_information;

#PROCEDURE seance on interval
DELIMITER |
CREATE PROCEDURE film_on_interval (IN date_start date, IN date_end date)
BEGIN
SELECT seances.seance_date, date_format(seances.seance_date,'%HH%i') AS seance_time,
salles.salle_name,seances.nb_place, date_format(seances.seance_date,'%d-%m') AS seance_day,
films.film_name,films.affiche_url,films.realease_date,films.duration,films.id_film,
films.filmaker,films.genre,seances.id_seance 
FROM seances 
INNER JOIN salles ON seances.id_salle = salles.id_salle
INNER JOIN films ON seances.id_film = films.id_film
	WHERE date_format(seance_date,'%y-%m-%d') <= date_end
	AND date_format(seance_date,'%y-%m-%d') >= date_start;
END |
DELIMITER ;

#Test procedure
CALL film_on_interval('2021-11-18','2021-11-20');

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

#TRANSACTION verifie que des places sont encore disponible avant de crée la réservation
DELIMITER |
CREATE PROCEDURE transaction_reservation(IN IDseance INT,IN IDuser INT,IN quantity INT)
BEGIN 
	DECLARE EXIT HANDLER FOR SQLEXCEPTION 
    SET autocommit = 0;
	START TRANSACTION;
		UPDATE seances SET nb_place = (nb_place - quantity) WHERE id_seance = IDseance;
		INSERT INTO reservation VALUE(null,IDseance,IDuser,quantity);
	COMMIT WORK;
    SET autocommit = 1;
END|
DELIMITER ;

/*test transaction*/
UPDATE seances SET nb_place = 1 WHERE id_seance = 1;
/* aucune reservation est crée car on reserve 4 place pour une seance avec 1 place restante */
CALL transaction_reservation(1,1,4);
/* OUTPUT : le nombre de place de la seance est toujours à 1 et la table reservation na pas de nouvelle ligne*/

/* une reservation à était crée car il reste assez de place pour la seance */
CALL transaction_reservation(1,1,1);  
/* OUTPUT : le nombre de place de la seance est à 0 et une nouvelle ligne sur la table reservation */