import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import cors from '@fastify/cors';
import { REPL_MODE_SLOPPY } from 'repl';
import { ServiceBack } from './services';

//importation des differentes tables
import coursImp from './cours';
import quizzImp from './quizz';
import exoLongImp from './exolong';
import anneeImp from './annee';
import matiereImp from './matiere';
import rubriqueImp from './rubrique';
import corrigeImp from './corrige';

const server = require('fastify')()

/*server.register(require('@fastify/mysql'), {
  connectionString: 'mysql://root@localhost/Projet_Esirem'
})*/

server.register(cors,{});
let serviceBack = ServiceBack.getInstance();

server.register(coursImp,{ prefix: serviceBack.coursPre() });
server.register(quizzImp,{ prefix: serviceBack.quizzPre() });
server.register(exoLongImp,{ prefix: serviceBack.exoLongPre() });
server.register(anneeImp,{ prefix: serviceBack.anneePre() });
server.register(matiereImp,{ prefix: serviceBack.matierePre() });
server.register(rubriqueImp,{ prefix: serviceBack.rubriquePre() });
server.register(corrigeImp,{ prefix: serviceBack.correctionPre() });

server.get('/', function(request: FastifyRequest, reply: FastifyReply) {

  console.log("connect")
    server.mysql.query(
      'SELECT * FROM `cours`',
      function onResult (err:any, result:any) {
        reply.send(err || result)
      }
    )
})

server.listen({ port: serviceBack.port() }, (err:any, address:any) => {
    if (err) throw err
    console.log(`server listening on ` + address)
  })
