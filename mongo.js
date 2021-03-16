function AnadirComando(url,comando){
  var mongo = require('mongodb').MongoClient;
  mongo.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("perraco");
    var query = { nombre: comando };
      dbo.collection("Comandos").find(query).toArray(function(err, result) {
      if (err) throw err;
      if(result[0])
      {
        var actualizarContador = {$set: {contador: result[0].contador + 1} };
        dbo.collection("Comandos").updateMany(query, actualizarContador, function(err, res) {
        });
        db.close();
      }
      else
      {
        var nuevoInsert = { nombre: comando, contador: 1 };
        dbo.collection("Comandos").insertOne(nuevoInsert, function(err, res) {
          if (err) throw err;
        });
        db.close();
      }
    });
  });
}

function ConsultarComandos(url){
  return new Promise(resolve => {
    var respuesta = '';
    var mongo = require('mongodb').MongoClient;
    mongo.connect(url,async function(err, db) {
      if (err) throw err;
      var dbo = db.db("perraco");
        dbo.collection("Comandos").find().sort({contador:-1}).limit(10).toArray(async function(err, result) {
        for (var i = 0; result.length > i; i++) {
          respuesta += '**'+(i+1)+'** ' + result[i].nombre + ' - '+ result[i].contador + '\n';
        }
        db.close();
        //return await respuesta;
        resolve(respuesta);
      });
      db.close();
    });
  });
}

module.exports = {
    AnadirComando: AnadirComando,
    ConsultarComandos: ConsultarComandos
}