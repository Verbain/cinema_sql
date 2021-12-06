# cinema_sql
repository for the cinema project on SQL T&amp;C 

## Le projet
Projet de gestion d'un cinéma en nodeJS et MySQL

## Clone du projet
Afin de clôner le projet 
> $git clone https://github.com/Verbain/cinema_sql.git
>
> ce déplacer dans le fichier clôner
>
> $npm install
>
> $npm start

## Setup le projet pour une utilisation locale
Afin d'éxécuter le projet en locale certain fichier sont à éditer ou crée

1. à la racine crée un fichier .env avec les information suivante
    > DATABASE_USER = monUser
    >
    > DATABASE_DATABASE = maDatabase
    >
    > DATABASE_PASSWORD = monPassword
2. Dans le fichier .SQL line 4
    > mettre le mot de passe de ca database

## user par default (modifiable dans le .SQL)

1. admin user credential
    > FirstName: admin
    >
    > Password: admin
2. user credential
    > FirstName: user
    >
    > Password: user