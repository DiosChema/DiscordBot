
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/';

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("perraco");
  var query = { nombre: "topcomandos" };
  /*dbo.collection("Comandos").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });*/
  var myquery = { nombre: 'dsadsadsaads' };
  dbo.collection("Comandos").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
  });
  /*dbo.collection("Comandos").find().sort({contador:1}).limit(10).toArray(function(err, result) {
  	console.info(result);
  });*/
  db.close();
});


//Comandos
//nombre, contador
//play, 1





/*

async function mongoPrueba() 
{
    var mongoClient = require('mongodb').MongoClient;
  const uri = 'mongodb+srv://ChemardoPrueba:corta123@perraco.bg9hv.gcp.mongodb.net/test?retryWrites=true&w=majority';
  const client = new mongoClient(uri);
  
  try {
      // Connect to the MongoDB cluster
      console.info('Conexion');
      await client.connect();

      // Make the appropriate DB calls
      console.info('Logre conexion');
      await insertarZura(client);
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

async function insertarZura(client){
  console.info('Metodo');
  var dbo = client.db("Botonazos");
  var script = { nombreBoton: "MiraiZura", contador: 0 };
  await dbo.collection('botonContador').insertOne(script);
  console.info('Lo logre');
};

mongoPrueba();

*/