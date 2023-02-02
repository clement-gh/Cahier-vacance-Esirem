import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import cors from '@fastify/cors';
import { REPL_MODE_SLOPPY } from 'repl';

//importation des differentes tables
import coursImp from './cours';
import quizzImp from './quizz';
import exoLongImp from './exolong';
import anneeImp from './annee';
import matiereImp from './matiere';
import rubriqueImp from './rubrique';

const server = require('fastify')()

server.register(require('@fastify/mysql'), {
  connectionString: 'mysql://root@localhost/Projet_Esirem'
})

server.register(cors,{});

server.register(coursImp);
server.register(quizzImp);
server.register(exoLongImp);
server.register(anneeImp);
server.register(matiereImp);
server.register(rubriqueImp);

server.get('/', function(request: FastifyRequest, reply: FastifyReply) {

  console.log("connect")
    server.mysql.query(
      'SELECT * FROM `cours`',
      function onResult (err:any, result:any) {
        reply.send(err || result)
      }
    )
})

server.listen({ port: 4000 }, (err:any, address:any) => {
    if (err) throw err
    console.log(`server listening on ` + address)
  })