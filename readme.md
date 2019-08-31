Crie um banco de dados usando o arquivo SQL na pasta raíz.
No arquivo ./models/db.js altere para os dados de seu banco em :

***
    const sequelize = new Sequelize('postapp','root', 'sua senha', {
        host: 'localhost',
        dialect : 'mysql'
    });

***

###
npm i sequelize --save
###
###
npm i mysql2 --save
###
###
npm i express --save
###
###
npm i express-handlebars --save
###
###
npm i body-parser --save
###
