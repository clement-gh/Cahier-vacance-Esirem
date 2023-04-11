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

server.register(require('@fastify/mysql'), {
  connectionString: 'mysql://root@localhost/Projet_Esirem'
})

server.register(cors,{});

server.register(coursImp,{ prefix: ServiceBack.getInstance().coursPre() });
server.register(quizzImp,{ prefix: ServiceBack.getInstance().quizzPre() });
server.register(exoLongImp,{ prefix: ServiceBack.getInstance().exoLongPre() });
server.register(anneeImp,{ prefix: ServiceBack.getInstance().anneePre() });
server.register(matiereImp,{ prefix: ServiceBack.getInstance().matierePre() });
server.register(rubriqueImp,{ prefix: ServiceBack.getInstance().rubriquePre() });
server.register(corrigeImp,{ prefix: ServiceBack.getInstance().correctionPre() });

server.get('/', function(request: FastifyRequest, reply: FastifyReply) {

  console.log("connect")
    server.mysql.query(
      'SELECT * FROM `cours`',
      function onResult (err:any, result:any) {
        reply.send(err || result)
      }
    )
})

server.listen({ port: ServiceBack.getInstance().port() }, (err:any, address:any) => {
    if (err) throw err
    console.log(`server listening on ` + address)
  })
