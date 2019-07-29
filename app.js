const express =  require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

//configs
    // view engine
    
    app.engine('handlebars', handlebars({
        defaultLayout:'main'
    }));
    app.set('view engine', 'handlebars');
    //depois disso, é necessário criar uma pasta views no diretorio do projeto

    //body-parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
//


    
app.get('/', function(req, res){
    //Exibir os dados do bd na pagina 'home'
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        //o express automaticamente entende que o arquivo que vai ser renderizado está dentro da 'views'
        res.render('home', { posts })
    })
    
})

app.get('/cad', function(req, res) {
    //o express automaticamente entende que o arquivo que vai ser renderizado está dentro da 'views'
    res.render('formulario')
})

//ao usar o método post, essa rota só pode ser acessada pelo envio de um formulario do tipo POst
app.post('/adicionar', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    .then(suc => res.redirect('/'))
    .catch(err => res.send('Aconteceu um erro ao cadastrar! ' + err))
})

app.get('/deletar/:id', function(req, res) {
    // para eliminar um registro do banco de dados
    Post.destroy({
        where:{
            'id' : req.params.id
        }
    })
    .then(suc => res.send('Postagem deletada com sucesso'))
    .catch(err => res.send('Esta postagem não existe'))
})


app.listen(8080, function(){
    console.log('Conexão iniciada')
});