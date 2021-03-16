const 
{
  Client,
  Discord
} = require('discord.js')

var request = require("request");

const bot = new Client();
const token = require("./auth.json").token;
const prefix = require("./auth.json").prefijo;
const tokenYoutube = require("./auth.json").tokenYoutube;
var version = '1.2';
const ytdl = require("ytdl-core");
var colaMusica = [];
var dispatcher;
var comandos = ['picul','kristel','k3','yoshiko','cli3','gustavo','ruben','chema','emilio',
  'bryan','jordan','golpea','trollearon','?','canica','hunt','jont','luisito','venezuela',
  'tengohambre','niconii','ruby','ganbaruby,','richi','miraizura','yousoro','topogigio',
  'mafiacity','explosion','image','reglas','perro','perrito','perrote','play','leave','pause',
  'resume','skip','taquero','monaschinas','topcomandos','comandos','bajarvolumen','subirvolumen',
  'volumen','madara'];

const queue = new Map();

comandos = ordenarLista(comandos);

var mongoScript = require('./mongo.js');
var url = 'mongodb://127.0.0.1:27017/';

bot.login(token);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', async msg => {

  if (msg.author.bot) return;

  if (msg.content.substring(0, prefix.length) != prefix)
  {
    return;
  }

  const serverQueue = queue.get(msg.guild.id);

  let args = msg.content.substring(prefix.length).split(" ");

  const voiceChannel = msg.member.voice.channel;

  if(comandos.includes(args[0]))
  {
    //mongoScript.AnadirComando(url,args[0]);  
  }

  switch(args[0])
  {
    case 'gallo':
      execute(msg,serverQueue,'https://www.youtube.com/watch?v=VJAh1p54LvY');
      break;
    case 'picul':
      msg.channel.send("No digas eso que me vomito", {files: ["https://nosomosnonos.com/wp-content/uploads/2019/05/Iya-na-Kao-Sare-Nagara-Opantsu-Misete-Moraitai.jpg"]});
      break;
    case 'kristel':
    case 'k3':
      msg.channel.send('Que yo no flameo bazura', {files: ["https://pm1.narvii.com/6439/be771492971aa61e9efb723c6608d2789836580a_hq.jpg"]});
      break;
    case 'yoshiko':
      msg.channel.send("Dakara Yohane yo maldita bazura", {files: ["https://i.pinimg.com/originals/be/0e/8e/be0e8eac7d6d75427f95ef1bc48caaff.gif"]});
      break;
    case 'cli3':
      msg.channel.send("Putarraca", {files: ["https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5536592a70a1ae8d775df88c/slide-cocodrilo.jpg"]});
      break;
    case 'gustavo':
      msg.channel.send("No quiero jugar slay the spire :'v", {files: ["https://www.mypokecard.com/my/galery/ZpOzOGw8doFf.jpg"]});
      break;
    case 'ruben':
      msg.channel.send("Diferencias de junglas", {files: ["https://i.ytimg.com/vi/heIjtft87Lc/maxresdefault.jpg"]});        
      break;
    case 'chema':
      msg.channel.send('MAL HECHO MAL HECHO');
      break;
    case 'emilio':
      msg.channel.send("Shyvanas, mi especialidad", {files: ["https://i.ytimg.com/vi/wHy3gjKcnCY/maxresdefault.jpg"]});
      break;
    case 'bryan':
      msg.channel.send("mic mic, subete", {files: ["https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_0b65d19e68e04537ae89423bec2d6c75.jpg"]});
      break;
    case 'jordan':
      msg.channel.send("Feliz Cumpleaños", {files: ["https://cdn.kiwilimon.com/recetaimagen/35112/th5-640x426-40965.jpg"]});
      break;
    case 'golpea':
      msg.channel.send("Le da unos golpes a "+args[1], {files: ["https://i.pinimg.com/originals/8c/4d/5f/8c4d5fa134d5f485d26735da7a9156e8.jpg"]});
      break;
    case 'trollearon':
      execute(msg,serverQueue,'https://www.youtube.com/watch?v=ls1gnCHr14Q');
      break;
    case '?':
      msg.channel.send('Ya perdimos');
      break;
    case 'canica':
      msg.channel.send("Nooooo Amlo esa no es la canica :sob:", {files: ["https://cdn.discordapp.com/attachments/343966316803129344/731375120622419978/107502405_588228898755242_3709036508303763984_o.png"]});
      break;
    case 'patas':
      msg.channel.send("", {files: ["https://cdn.discordapp.com/attachments/817617608647376916/821180585435070484/20210315_173031.png"]});
      break;
    case 'hunt':
    case 'jont':
      msg.channel.send("¿Sabra bien este jamon?", {files: ["https://www.24horas.cl/incoming/panjpg-2890104/ALTERNATES/BASE_LANDSCAPE/pan.JPG"]});
      break;
    case 'fishmoley':
      msg.channel.send("", {files: ["https://i.kym-cdn.com/entries/icons/original/000/025/305/fishmoley.jpg"]});
      break;
    case 'kripp':
      msg.channel.send("", {files: ["https://pbs.twimg.com/media/DCnggIrUAAEbEwB.jpg"]});
      break;
    case 'luisito':
    case 'venezuela':
    case 'tengohambre':
      execute(msg,serverQueue,'https://www.youtube.com/watch?v=sxXT8SyoUNA');
      break;
    case 'niconii':
      msg.channel.send("nico nii", {files: ["https://pa1.narvii.com/6364/844056892d96d297eb91b01be8cb022011fe6a66_hq.gif"]});
      execute(msg,serverQueue,'https://www.youtube.com/watch?v=_1JWoXM6jYg');
      break;
    case 'ruby':
    case 'ganbaruby':      
      execute(msg,serverQueue,'https://www.youtube.com/watch?v=v8Qq4fDwtRE');
      msg.channel.send("ganbaruby", {files: ["https://data.whicdn.com/images/281118013/original.gif"]});
      break;
    case 'richi':
      msg.channel.send("Por favor victoria, ya medi la casa y si cabe la compu", {files: ["https://i.ibb.co/VmD6RQL/aaaaaaaaaa.png"]});        
      break;
    case 'theo':
      execute(msg,serverQueue,'https://www.youtube.com/watch?v=GD1dpLSvoNU');
      msg.channel.send("¿Pa cuando la pija?", {files: ["https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/69611967_920828181611408_1316539048252145664_o.jpg?_nc_cat=100&_nc_sid=dd9801&_nc_ohc=whno7JAhLfUAX-jVlJh&_nc_ht=scontent.fmzt1-1.fna&oh=1e5dcc67a77b41aa3c2e9c1f6ab3ba58&oe=5FB1A307"]});        
      break;
    case 'peña':
      msg.channel.send("Peña nooooo :'v se me caio un idolo", {files: ["https://cdn.discordapp.com/attachments/345059524014505984/766106091704156210/unknown.png"]});        
      break;
    case 'fredy':
      msg.channel.send("Saquenme de surtidoAmericaaaaaaa", {files: ["https://cdn.shopify.com/s/files/1/2164/2083/products/7501000677368_800x.png?v=1578948718"]});        
      break;
    case 'berserk':
    case 'negro':
      msg.channel.send("Pero un negrote ... un NEGROTE", {files: ["https://cdn.discordapp.com/attachments/776188662371057714/799128640641695775/unknown.png"]});        
      break;
    case 'erik':
      msg.channel.send('cuando Eric años más tarde, intentó descubrir la verdad sobre su padre en "La Madre de Cartman es una Puta Sucia" y "La Madre de Cartman Sigue Siendo una Puta Sucia", toda la ciudad encubrió la verdad y alteró los resultados de paternidad, y le dijo a Eric que su madre era en verdad su padre, debido a que ella era hermafrodita.')
      break;
    case 'miraizura':
      msg.channel.send("Mirai zura bazura", {files: ["https://i.ytimg.com/vi/kWIqP0dURvQ/maxresdefault.jpg"]});
      execute(msg,serverQueue,'https://www.youtube.com/watch?v=kWIqP0dURvQ');
      break;
    case 'yousoro':
      msg.channel.send("Yousoro", {files: ["https://pbs.twimg.com/media/C9osyNCXsAE6ZnO.jpg"]});
      execute(msg,serverQueue,'https://www.youtube.com/watch?v=xLKHFDgtowA');
      break;
    case 'topogigio':
      msg.channel.send("Nooooo don pepe :sob:", {files: ["https://st3.depositphotos.com/4216129/13706/v/450/depositphotos_137064280-stock-illustration-two-boys-fist-fight-positions.jpg"]});
      execute(msg,serverQueue,'https://www.youtube.com/watch?v=1BrAX0IreOo');
      break;
    case 'mafiacity':
      msg.channel.send(":ermano:", {files: ["https://i.ytimg.com/vi/z7F8ty5-pFY/maxresdefault.jpg"]});
      execute(msg,serverQueue,'https://www.youtube.com/watch?v=z7F8ty5-pFY');
      break;      
    case 'explosion':
      msg.channel.send("Explosion", {files: ["https://www.itl.cat/pngfile/big/23-232805_download-megumin-image-megumin-konosuba.jpg"]});
      execute(msg,serverQueue,'https://www.youtube.com/watch?v=jar1LTxxAeM');
      break;
    case 'furro':
      execute(msg,serverQueue,'https://www.youtube.com/watch?v=bgo9dJB_icw');      
    case 'image':
      break;
    case 'reglas':
      msg.channel.send("AQUI NO SE PIENSA").then(async function  (message) {
            await message.react("🥒")
    });
      break;
    case 'pasta':
      msg.channel.send("[Aeropuerto de Santa Lucía, pérdidas por X millones de pesos, en realidad no se puede usar para vuelos comerciales ni le sirve a los militares. Tren Maya, gastaron X cantidad de millones en estudios que no existen y no avisaron que dejarán sin hogar a 2 mil indígenas. Cancelación del otro aeropuerto, 331 mil millones de pesos, suficiente para haber comprado todas las vacunas Pfizer que el país necesita y más, es posiblemente la mayor deuda que México haya contraído en tiempos modernos. Sobre las distintas becas, la mitad en realidad no existen o están muertos, todo ese dinero está desaparecido.]");
      break;
    case 'perro':
      if(!msg.channel.nsfw)
      { 
        msg.channel.send("Este es un canal de escuru aidorus cristiano."); 
        return; 
      }
      buscarImagenYendere(msg,args);
      break;
    case 'perrito':
      buscarImagenSafebooru(msg,args);
      break;
    case 'perrote':
      if(!msg.channel.nsfw)
      { 
        msg.channel.send("Este es un canal de escuru aidorus cristiano."); 
        return; 
      }
      buscarImagenDanbooru(msg,args);
      break;
    case 'play':
      if(args[1])
      {
        args.splice(0,1);
        var busqueda = args.join();
        //conseguirLink(msg,voiceChannel,busqueda);
        execute(msg,serverQueue,busqueda);
      }
      break;
    case 'leave':
      stop(msg, serverQueue);
      break;
    /*case 'pause':
      detenerMusica(voiceChannel);
      break;
    case 'resume':
      resumirMusica(voiceChannel);
      break;*/
    case 'skip':
      skip(msg, serverQueue);
      break;
    case 'taquero':
      execute(msg,serverQueue,'https://www.youtube.com/watch?v=9VnN7rhxABU');
      break;
    case 'monaschinas':
      args[1] = 'monas chinas';
      //buscarImagen(msg,args);
      execute(msg,serverQueue,'https://www.youtube.com/watch?v=21oWoL-Q5_Q');
      break;
    case 'topcomandos':
      /*mongoScript.ConsultarComandos(url).then(function(respuesta)
      {
        if(respuesta.length > 10)
        {
          msg.channel.send(respuesta);
        }
      });*/
      break;
    case 'comandos':
      msg.channel.send('**Lista de comandos:** ' + comandos.join(', '));      
      break;
    case 'madara':
      mensajeMadara(msg);
    /*case 'subirvolumen':
      if(dispatcher)
      {
        var volumenActual = dispatcher.volumeLogarithmic;
        if((.80) > volumenActual)
        {
          dispatcher.setVolumeLogarithmic((volumenActual + .20));
        }
        else
        {
          msg.channel.send('Volumen al maximo');
        }
      }      
      break;
    case 'bajarvolumen':
      if(dispatcher)
      {
        var volumenActual = dispatcher.volumeLogarithmic;
        if(volumenActual > .20)
        {
          dispatcher.setVolumeLogarithmic((volumenActual - .20));
        }
        else
        {
          msg.channel.send('Volumen al minimo');
        }
      }
      break;
    case 'volumen':
      if(dispatcher)
      {
        isNumeric(args[1])
        {
          var volumen = parseInt(args[1]) / 100;
          dispatcher.setVolumeLogarithmic((volumen - .20));
        }        
      }
      break;*/
  }
});


function play(message,voiceChannel, str)
{
  var urlYoutube = '';

  //se consigue la url
  if(esURL(str))
  {
    urlYoutube = str;
  }
  else
  {
    buscarLinkYoutube(message,voiceChannel,str);
    return;
  }

  //Se agrega el link a la lista, si la lista ya tenia algo se sale del metodo
  if(urlYoutube != '')
  {
    colaMusica.push(urlYoutube);
    if(colaMusica.length == 1)
    {
      ponerCancion(voiceChannel);
    }
  }

  
}

function ponerCancion(voiceChannel)
{
  try
  {
    voiceChannel.join().then(connection => {

      dispatcher = null;
      dispatcher = connection.play(
        ytdl(colaMusica[0],{ quality: 'highestaudio' }));

      dispatcher.setVolumeLogarithmic(.5);

      dispatcher.on('finish', () => 
      {
        colaMusica.splice(0,1);
        if(!colaMusica[0])
        {
          voiceChannel.leave();
        }
        else
        {
          ponerCancion(voiceChannel)
        }
      })

    });
  }
  catch(error) {
    colaMusica = [];
  }
}

function conseguirLink(message,voiceChannel, str)
{
  var urlYoutube = '';

  if(esURL(str))
  {
    urlYoutube = str;
    play(message,voiceChannel, str);
  }
  else
  {
    urlYoutube = buscarLinkYoutube(message,voiceChannel,str);
  }
}

function quitarMusica(voiceChannel)
{
  voiceChannel.leave();
  colaMusica = [];
}

function detenerMusica(voiceChannel)
{
  if(dispatcher)
  {
    dispatcher.pause(true);
  }
}

function resumirMusica(voiceChannel)
{
  if(dispatcher)
  {
    dispatcher.resume();
  }
}

function saltarMusica(voiceChannel)
{
  if(dispatcher)
  {
    dispatcher.end();
  }
}

function buscarImagenYendere(message, parts)
{
  var search = parts.slice(1).join("_");
  var options = 
  {
    url: "https://yande.re/post.json?api_version=2&limit=30&tags="+ search,
    method: "GET",
    headers: 
    {
      "Accept": "text/html",
      "User-Agent": "Chrome"
    }
  };

  request(options, function(error, response, responseBody)
  {
    if(error)
    {
      message.channel.send('Me baniaron');
      return;
    }

    Promise.resolve(responseBody.toString()).then(JSON.parse).then(respuesta => 
    {
      var urls = [];

      for (var i = 0; i < respuesta.posts.length; i++) {
        if(respuesta.posts[i].file_size < 4999999)
        {
          urls.push(respuesta.posts[i].sample_url);
        }          
      }

      if(!urls.length)
      {
        message.channel.send("No encontre nada " + message.author.toString());
        return;
      }

      shuffleArray(urls);

      message.channel.send(message.author.toString(), {files: [urls[0]]});
    });

  })
}

function buscarImagenSafebooru(message, parts)
{
  var search = parts.slice(1).join("_");
  var respuesta;
  var url;
  var options = 
  {
    url: "https://safebooru.org/index.php?page=dapi&s=post&q=index&tags="+ search+"&json=1&limit=35",
    method: "GET",
    headers: 
    {
      "Accept": "text/html",
      "User-Agent": "Chrome"
    }
  };

  request(options, function(error, response, responseBody)
  {
    if(error)
    {
      message.channel.send('Me baniaron');
      return;
    }

    if(responseBody.length == 0)
    {
      message.channel.send('No encontre nada');
      return;
    }

    Promise.resolve(responseBody.toString()).then(JSON.parse).then(respuesta => 
    {
      for (var i = 0; respuesta.length > i; i++) {
        var random = Math.floor(Math.random() * (respuesta.length));

        if(respuesta[random].sample && respuesta[random].image.substring(respuesta[random].image.length - 3) != 'png' && respuesta[random].image.substring(respuesta[random].image.length - 4) != 'jpeg')
        {
          url = "https://safebooru.org/samples/"+respuesta[random].directory+"/sample_"+respuesta[random].image;
          break;
        }
        else if((respuesta[random].height * respuesta[random].width) < 5000000)
        {
          url = "https://safebooru.org/images/"+respuesta[random].directory+"/"+respuesta[random].image;         
          break;
        }
      }
      message.channel.send(message.author.toString(), {files: [url]});
    });



  })
}

function buscarImagenDanbooru(message, parts)
{
  var search = parts.slice(1).join("_");
  var respuesta;
  var urls = [];
  var contador = 0;
  var options = 
  {
    url: "https://danbooru.donmai.us/posts.json?tags="+ search+"&limit=35",
    method: "GET",
    headers: 
    {
      "Accept": "text/html",
      "User-Agent": "Chrome"
    }
  };

  request(options, function(error, response, responseBody)
  {
    if(error)
    {
      message.channel.send('Me baniaron');
      return;
    }

    if(responseBody.length < 10)
    {
      buscarDanbooruPorTag(message, parts);
      return;
    }

    Promise.resolve(responseBody.toString()).then(JSON.parse).then(respuesta => 
    {
      
      var random = 0;
      
      for (var i = 0; respuesta.length > i; i++) {
        if(!respuesta[i].is_deleted && respuesta[i].large_file_url != undefined)
        {
          urls.push(respuesta[i].large_file_url);
        } 
      }

      if(!urls[0])
      {
        message.channel.send('No encontre nada');
        return;
      }
      
      var random = Math.floor(Math.random() * (urls.length));
      message.channel.send(message.author.toString(), {files: [urls[random]]});
      
    })

  })
}

function buscarDanbooruPorTag(message, parts){
  var search = parts.slice(1).join("_");
  var nombreTags = [];
  var tagSeleccionado = '';
  var listaBusqueda = '';
  var opcionEscogida = false;
  var index = 0;
  var listaEmojis = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣'];
  var limiteEmojis = 0;

  var options = 
  {
    url: "https://danbooru.donmai.us/tags.json?search[name_matches]=*"+ search+"*&limit=5&search[order]=count",
    method: "GET",
    headers: 
    {
      "Accept": "text/html",
      "User-Agent": "Chrome"
    }
  };

  request(options, function(error, response, responseBody)
  {
    if(error)
    {
      message.channel.send('Me baniaron');
      return;
    }

    if(responseBody.length < 10)
    {
      message.channel.send('No encontre nada '+message.author.toString());
      return;
    }

    Promise.resolve(responseBody.toString()).then(JSON.parse).then(respuestaApiDanbooru =>
    {
      if(!respuestaApiDanbooru[0])
      {
        message.channel.send('No encontre nada '+message.author.toString());
        return;
      }

      for (var i = 0; i < respuestaApiDanbooru.length; i++) {
        listaBusqueda += "**"+(i+1) + "**: " + respuestaApiDanbooru[i].name + "\n";
        nombreTags.push(respuestaApiDanbooru[i].name);
      }

      if(nombreTags.length == 1)
      {
        buscarImagenDanbooru(message,['',respuestaApiDanbooru[0].name]);
        return;
      }

      message.channel.send(listaBusqueda).then(sent => {
        idMensaje = sent.id;
        setTimeout(() => 
          {
            sent.delete();
          }, 30000);
        return sent;
        }).catch((error) => {
        }).then(async function(messageTags)
        {
          bot.on('messageReactionAdd', (messageReaction, user) => {
            if(user.bot)  return;
            
            if(messageTags.id === idMensaje && message.author.id === user.id && !opcionEscogida) {
              switch(messageReaction.emoji.name)
              {
                case "1️⃣":
                  tagSeleccionado = nombreTags[0];
                  break;
                case "2️⃣":
                  tagSeleccionado = nombreTags[1];
                  break;
                case "3️⃣":
                  tagSeleccionado = nombreTags[2];
                  break;
                case "4️⃣":
                  tagSeleccionado = nombreTags[3];
                  break;
                case "5️⃣":
                  tagSeleccionado = nombreTags[4];
                  break;
                case "❌":
                  messageTags.edit('Busqueda cancelada');
                  break;
                default:
                  break;

              }
              if(tagSeleccionado != '')
              {
                opcionEscogida = true;
                messageTags.edit('Se selecciono: ' + tagSeleccionado);
                buscarImagenDanbooru(message,['',tagSeleccionado]);
              }
              messageTags.reactions.removeAll();
            }
          });

          limiteEmojis = nombreTags.length;
          
          while(!opcionEscogida && limiteEmojis > index)
          {
            await messageTags.react(listaEmojis[index]);
            index++;
          }

          if(!opcionEscogida)
          {
            await messageTags.react('❌');
          }

        }).catch((error) => {
        });

    })

  })
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function esURL(str) {
  var pattern = new RegExp('^((https?:)?\\/\\/)?'+ // protocol
      '(?:\\S+(?::\\S*)?@)?' + // authentication
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locater
  if (!pattern.test(str)) {
      return false;
  } else {
      return true;
  }
}

function ordenarLista(lista)
{
  lista.sort(function (a, b) {
    if (a > b) {
        return 1;
    }
    if (b > a) {
        return -1;
    }
    return 0;
  });

  return lista;
}

function buscarLinkYoutube(message,voiceChannel,busqueda)
{
  var listaBusqueda = '';
  var linkYoutube = '';
  var urls = [];
  var nombreVideos = [];
  var idMensaje;
  var opcion;
  var opcionEscogida = false;
  var index = 0;
  var listaEmojis = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣'];
  var limiteEmojis = 0;
  var tiempoCancion = '';

  var options = 
  {
    url: "https://www.googleapis.com/youtube/v3/search?key=" + tokenYoutube + "&type=video&part=snippet,id&q="+ busqueda,
    method: "GET",
    headers: 
    {
      "Accept": "text/html",
      "User-Agent": "Chrome"
    }
  };

  request(options,async function(error, response, responseBody)
  {
    if(error)
    {
      message.channel.send('Me baniaron');
      return linkYoutube;
    }

    var respuestaApiYoutube = JSON.parse(responseBody.toString());
    Promise.resolve(responseBody.toString()).then(JSON.parse).then(async function(respuestaApiYoutube)
    {
      if(!respuestaApiYoutube.items[0])
      {
        return linkYoutube;
      }

      for (var i = 0; i < respuestaApiYoutube.items.length; i++) {
        tiempoCancion = await obtenerTiempoCancion(respuestaApiYoutube.items[i].id.videoId);

        listaBusqueda += "**"+(i+1) + "**: " +respuestaApiYoutube.items[i].snippet.title + tiempoCancion;
        urls.push(respuestaApiYoutube.items[i].id.videoId);
        nombreVideos.push(respuestaApiYoutube.items[i].snippet.title);
      }

      message.channel.send(listaBusqueda).then(sent => {
        idMensaje = sent.id;
        setTimeout(() => 
          {
            sent.delete();
          }, 30000);
        return sent;
      }).catch((error) => {
      }).then(async function(messageVideo)
      {
        bot.on('messageReactionAdd', (messageReaction, user) => {
          if(user.bot)  return;
          if(messageVideo.id === idMensaje) {
            switch(messageReaction.emoji.name)
            {
              case "1️⃣":
                linkYoutube = urls[0];
                opcion = 0;
                break;
              case "2️⃣":
                linkYoutube = urls[1];
                opcion = 1;
                break;
              case "3️⃣":
                linkYoutube = urls[2];
                opcion = 2;
                break;
              case "4️⃣":
                linkYoutube = urls[3];
                opcion = 3;
                break;
              case "5️⃣":
                linkYoutube = urls[4];
                opcion = 4;
                break;
              case "❌":
                messageVideo.edit('Busqueda cancelada');
                break;
              default:
                break;

            }
            if(linkYoutube != '')
            {
              opcionEscogida = true;
              linkYoutube = 'https://www.youtube.com/watch?v=' + linkYoutube;
              messageVideo.edit('Se selecciono: '+nombreVideos[opcion]);
              play(message, voiceChannel, linkYoutube);              
            }
            messageVideo.reactions.removeAll()
          }
        })
        
        limiteEmojis = urls.length;
          
        while(!opcionEscogida && limiteEmojis > index)
        {
          await messageVideo.react(listaEmojis[index]);
          index++;
        }

        if(!opcionEscogida)
        {
          await messageVideo.react('❌');
        }

      }).catch((error) => {
      });
    });

  })
}

async function obtenerTiempoCancion(idCancion)
{
  var options = 
  {
    url: 'https://www.googleapis.com/youtube/v3/videos?id=' + idCancion +'&key=' + tokenYoutube + '&part=snippet,contentDetails,statistics,status',
    method: "GET",
    headers: 
    {
      "Accept": "text/html",
      "User-Agent": "Chrome"
    }
  };

  return new Promise(function(resolve, reject) {
    try
    {
      request(options, function(error, response, responseBody)
      {
        if(error)
        {
        }

        var respuestaApiYoutubeId = JSON.parse(responseBody.toString()); 
        
        if(!respuestaApiYoutubeId.items[0])
        {
        }

        var perrazo = '';
        var perro = respuestaApiYoutubeId.items[0].contentDetails.duration;
        var perraco = [perro];
        perro = perro.substring(2);
        if(perro.includes('H'))
        {
          perraco = perro.split('H');
          perrazo += ' -- Hrs: ' + perraco[0];
          perro = perraco.slice(1).join('');
        }
        if(perro.includes('M'))
        {
          perraco = perro.split('M');
          perrazo += ' Min: ' + perraco[0];
          perro = perraco.slice(1).join('');
        }
        if(perro.includes('S'))
        {
          perraco = perro.split('S');
          perrazo += ' Seg: ' + perraco[0];
        }
        perrazo += " \n";
        
        resolve(perrazo);
        

      })
    }
    catch(error) {
      resolve('');
    }
    

  })
}

function isNumeric(num){
  return !isNaN(num)
}


function buscarLinkYoutube2(message,busqueda)
{
  var listaBusqueda = '';
  var linkYoutube = '';
  var urls = [];
  var nombreVideos = [];
  var idMensaje;
  var opcion;
  var opcionEscogida = false;
  var index = 0;
  var listaEmojis = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣'];
  var limiteEmojis = 0;
  var tiempoCancion = '';

  var options = 
  {
    url: "https://www.googleapis.com/youtube/v3/search?key=" + tokenYoutube + "&type=video&part=snippet,id&q="+ busqueda,
    method: "GET",
    headers: 
    {
      "Accept": "text/html",
      "User-Agent": "Chrome"
    }
  };

  return new Promise(function(resolve, reject) {

    request(options,async function(error, response, responseBody)
    {
      if(error)
      {
        message.channel.send('Me baniaron');
        return linkYoutube;
      }

      var respuestaApiYoutube = JSON.parse(responseBody.toString());
      Promise.resolve(responseBody.toString()).then(JSON.parse).then(async function(respuestaApiYoutube)
      {
        if(!respuestaApiYoutube.items[0])
        {
          return linkYoutube;
        }

        for (var i = 0; i < respuestaApiYoutube.items.length; i++) {
          tiempoCancion = await obtenerTiempoCancion(respuestaApiYoutube.items[i].id.videoId);

          listaBusqueda += "**"+(i+1) + "**: " +respuestaApiYoutube.items[i].snippet.title + tiempoCancion;
          urls.push(respuestaApiYoutube.items[i].id.videoId);
          nombreVideos.push(respuestaApiYoutube.items[i].snippet.title);
        }

        message.channel.send(listaBusqueda).then(sent => {
          idMensaje = sent.id;
          setTimeout(() => 
            {
              sent.delete();
            }, 30000);
          return sent;
        }).catch((error) => {
        }).then(async function(messageVideo)
        {
          bot.on('messageReactionAdd', (messageReaction, user) => {
            if(user.bot)  return;
            if(messageVideo.id === idMensaje) {
              switch(messageReaction.emoji.name)
              {
                case "1️⃣":
                  linkYoutube = urls[0];
                  opcion = 0;
                  break;
                case "2️⃣":
                  linkYoutube = urls[1];
                  opcion = 1;
                  break;
                case "3️⃣":
                  linkYoutube = urls[2];
                  opcion = 2;
                  break;
                case "4️⃣":
                  linkYoutube = urls[3];
                  opcion = 3;
                  break;
                case "5️⃣":
                  linkYoutube = urls[4];
                  opcion = 4;
                  break;
                case "❌":
                  messageVideo.edit('Busqueda cancelada');
                  break;
                default:
                  break;

              }
              if(linkYoutube != '')
              {
                messageVideo.reactions.removeAll()
                opcionEscogida = true;
                linkYoutube = 'https://www.youtube.com/watch?v=' + linkYoutube;
                messageVideo.edit('Se selecciono: '+nombreVideos[opcion]);
                resolve(linkYoutube);
              }              
            }
          })
          
          limiteEmojis = urls.length;
            
          while(!opcionEscogida && limiteEmojis > index)
          {
            await messageVideo.react(listaEmojis[index]);
            index++;
          }

          if(!opcionEscogida)
          {
            await messageVideo.react('❌');
          }

        }).catch((error) => {
        });
      });

    })
  })
}



async function execute(message,serverQueue,busqueda) {

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "Entra primero a un canal de voz!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "No tengo permisos para entrar/hablar :v!"
    );
  }

  if(!esURL(busqueda))
  {
    busqueda = await buscarLinkYoutube2(message,busqueda);
    if(busqueda == '')
    {
      return;
    }
  }

  const songInfo = await ytdl.getInfo(busqueda);
  const song = {
    title: songInfo.title,
    url: busqueda
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} Se anadio a la cola de reproduccion giran!`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "Entra primero a un canal de voz!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "Entra primero a un canal de voz!"
    );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

function mensajeMadara(msg) {
  msg.channel.send(
    "Is there a character that could even possibly EVEN TOUCH Madara Uchiha? Let alone defeat him. "+
    "And I'm not talking about Edo Tensei Uchiha Madara. I'm not talking about Gedou Rinne Tensei "+
    "Uchiha Madara either. Hell, I'm not even talking about Juubi Jinchuuriki Gedou Rinne Tensei Uchiha "+
    "Madara with the Eternal Mangekyou Sharingan and Rinnegan doujutsus (with the rikodou abilities and "+
    "being capable of both Amateratsu and Tsukuyomi genjutsu), equipped with his Gunbai, a perfect "+
    "Susano'o, control of the juubi and Gedou Mazou, with Hashirama Senju's DNA implanted in him so "+
    "he has mokuton kekkei genkai and can perform yin yang release ninjutsu while being an expert in "+
    "kenjutsu and taijutsu. I’m also not talking about Kono Yo no Kyūseishu Futarime no Rikudō Juubi "+
    "Jinchuuriki Gedou Rinne Tensei Uchiha Madara with the Eternal Mangekyou Sharingan (which is capable "+
    "of Enton Amaterasu, Izanagi, Izanami and the Tsyukuyomi Genjutsu), his two original Rinnegan (which "+
    "grant him Chikushōdō, Shuradō, Tendō, Ningendō, Jigokudō, Gakidō, Gedō, Banshō Ten’in, Chibaku Tensei," +
    "Shinra Tensei, Tengai Shinsei and Banbutsu Sōzō) and a third Tomoe Rinnegan on his forehead, capable "+
    "of using Katon, Fūton, Raiton, Doton, Suiton, Mokuton, Ranton, Inton, Yōton and even Onmyōton Jutsu, "+
    "equipped with his Gunbai(capable of using Uchihagaeshi) and a Shakujō because he is a master in "+
    "kenjutsu and taijutsu...").then(async function  (message) {
      msg.channel.send(
        "... a perfect Susano’o (that can use Yasaka no Magatama ), control of both the Juubi and the"+
        " Gedou Mazou, with Hashirama Senju’s DNA and face implanted on his chest, his four Rinbo "+
        "Hengoku Clones guarding him and nine Gudōdama floating behind him AFTER he absorbed Senjutsu "+
        "from the First Hokage, entered Rikudō Senjutsu Mode, cast Mugen Tsukuyomi on everybody and"+
        " used Shin: Jukai Kōtan so he can use their Chakra while they are under Genjutsu."+
        " I'm definitely NOT Talking about sagemode sage of the six paths Juubi Jinchuuriki Gedou Rinne Tensei "+
        "Super Saiyan 4 Uchiha Madara with the Eternal Mangekyou Sharingan, Rinnegan, Mystic Eyes of Death "+
        "Perception, and Geass doujutsus, equipped with Shining Trapezohedron while casting Super Tengen Topp+a "+
        "Gurren Lagann as his Susanoo, controlling the Gold Experience Requiem stand, having become the "+
        "original vampire after Alucard, able to tap into the speedforce, wearing the Kamen Rider Black"+
        " RX suit and Gedou Mazou, with Hashirama Senju's DNA implanted in him so he has mokuton kekkei "+
        "genkai and can perform yin yang release ninjutsu while being an expert in kenjutsu and taijutsu "+
        "and having eaten Popeye's spinach. I'm talking about sagemode sage of the six paths Juubi "+
        "Jinchuuriki Gedou Rinne Tensei Legendary Super Saiyan 4 Uchiha Madara with the Eternal Mangekyou "+
        "Sharingan, Rinnegan, Mystic Eyes of Death Perception, and Geass doujutsus, equipped with his Shining "+
        "Trapezohedron while casting Super Tengen Toppa Gurren Lagann as his Susanoo, controlling the Gold "+
        "Experience Requiem stand, having become the original vampire after having absorbed Alucard as "+
        "well as a God Hand, able to tap into the speedforce, wearing the Kamen Rider Black RX suit, "+
        "with Kryptonian DNA implanted in him and having eaten Popeye's spinach while possessing quantum "+
        "powers like Dr. Manhattan and having mastered Hokuto Shinken."
        );
    });

}
