const db = require('./db');

//criar tabela
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo : {
        type: db.Sequelize.TEXT
    }
});

//Comentar linha do sync para não recriar tabela
//Post.sync({force: true})

module.exports = Post;