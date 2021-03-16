var audio = document.createElement('audio');

function btnSonido() {
  //audio.src = 'mirai_zura.mp3';
  //audio.play();
}

async function mongoPrueba() 
{
  var mongoClient = require('mongodb').MongoClient;
  const uri = 'mongodb+srv://ChemardoPrueba:corta123@perraco.bg9hv.gcp.mongodb.net/test?retryWrites=true&w=majority';
  const client = new mongoClient(uri);
  
  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      await  insertarZura(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

async function insertarZura(client){
  
  var dbo = client.db("Botonazos");
  var script = { nombreBoton: "MiraiZura", contador: 0 };
  await dbo.collection('botonContador').insertOne(script);
};








