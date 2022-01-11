const express = require('express')
const servidor = express()


let ObjectID = require("mongodb").ObjectId;

const indexRouter = require('./routes/index')

servidor.set('view engine', 'ejs')
servidor.set('views', __dirname + '/views')

servidor.use(express.static('public'))

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://aff_1245:1245@cluster0-shard-00-00.ug9iz.mongodb.net:27017,cluster0-shard-00-01.ug9iz.mongodb.net:27017,cluster0-shard-00-02.ug9iz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-h9d9jf-shard-0&authSource=admin&retryWrites=true&w=majority";
const client = new MongoClient(uri,{useUnifiedTopology: true});

client.connect(err => {
    //Imprime na consola o erro, caso este exista
    if(err){console.log(err)};
  
    servidor.listen(5000,function () {
      console.log("Servidor ligado!");
    })

    servidor.use('/', indexRouter)
    
})