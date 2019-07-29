Crie um banco de dados usando o arquivo SQL na pasta raíz.
No arquivo ./models/db.js altere para os dados de seu banco em :

***
    const sequelize = new Sequelize('postapp','root', 'sua senha', {
        host: 'localhost',
        dialect : 'mysql'
    });

***


Necessário instalar : sequelize, mysql2, express, handlebars e body-parser