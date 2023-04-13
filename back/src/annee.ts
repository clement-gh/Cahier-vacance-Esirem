import { FastifyReply, FastifyRequest } from "fastify";

const opts = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        }
      }
    }
  }

export default async function routes (fastify : any, options : any) {
    
        //data correspond au info retourné par la requete sql
        //return la liste des annees 
        fastify.get("/annee", (request : FastifyRequest, reply : FastifyReply) => {
            fastify.mysql.query(
                'SELECT * FROM `anneeesirem`',
                function onResult (err:any, result:any) {
                    reply.send(err || result)
                }
            )
        })
        //data correspond au info retourné par la requete sql
        //return une annee 
        fastify.get('/annee/:id', (request:FastifyRequest<{
            Params: {
              id: string,
            };
        }>, reply:FastifyReply) => {
            fastify.mysql.query(
                'SELECT * FROM `anneeesirem` WHERE idanneeesirem = ' + request.params.id,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })


        
        type PutRequestAnnee = FastifyRequest<{
            Params: {
                idannee: string,
            }
            Body: { nom: string };
        }>

        fastify.put('/annee/putRequest/:idannee', (request:PutRequestAnnee, reply:FastifyReply) => {
            fastify.mysql.query(
                'UPDATE `anneeesirem` SET nom = '+ request.body.nom +' where idanneeesirem = ' + request.params.idannee,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })

        
    }