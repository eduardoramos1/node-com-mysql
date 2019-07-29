const Sequelize = require('sequelize');

// parametros : schema , usuario , senha / para fazer a conexão
const sequelize = new Sequelize('postapp','root', 'sua senha', {
    host: 'localhost',
    dialect : 'mysql'
});


module.exports = {
    Sequelize,
    sequelize
}