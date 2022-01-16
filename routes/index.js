const express = require('express')
const router = express.Router()
const mongo = require('mongodb');
const assert = require('assert')

const url = 'mongodb://localhost:5000';

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/carro1', (req, res) => {
    res.render('carro1')
  })

router.get('/admin', (req, res) => {
  res.render('admin')
})


router.get('/receber-dados', function(req, res, next){
  var Lista = [];
  mongo.connect(url, function(err,db){
    assert.equal(null, err);
    var cursor = db.collection('dados utilizador').find();
    cursor.forEach(function(doc, err){
      assert.equal(null, err);
      Lista.push(doc);
    }, function(){
      db.close;
      res.render('index', {items: resultArray});
    })
  })

})

router.post('/publicar', function(req,res,next){
  var item = {
    marca: req.body.marca,
    modelo: req.body.modelo,
    ano: req.body.ano,
  };

  mongo.ConnectionCheckOutFailedEvent(url, function(err,db){
    assert.equal(null,err);
    db.collection('user-data'.insertOne(item, function(err, result){
      assert.equal(null, error);
      console.log('publicado');
      db.close();
    }))
  })
})
  
module.exports = router