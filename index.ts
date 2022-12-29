import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import cors from '@fastify/cors';
import { REPL_MODE_SLOPPY } from 'repl';

//importation des differentes tables
import coursImp from './Cours_table/cours';
import quizzImp from './Quizz_table/quizz';
import exoLongImp from './ExoLong_table/exolong';
import anneeImp from './Annee_table/annee';

const server = require('fastify')()

server.register(require('@fastify/mysql'), {
  connectionString: 'mysql://root@localhost/Projet_Esirem'
})

// Declare a route
/*app.get('/', async (request, reply) => {
  return { hello: 'world' }
})*/
server.register(cors,{});

server.register(coursImp);
server.register(quizzImp);
server.register(exoLongImp);
server.register(anneeImp);

server.get('/', function(request: FastifyRequest, reply: FastifyReply) {
    server.mysql.query(
      'SELECT * FROM `cours`',
      function onResult (err:any, result:any) {
        reply.send(err || result)
      }
    )
})

server.listen({ port: 3000 }, (err:any, address:any) => {
    if (err) throw err
    console.log(`server listening on ` + address)
  })