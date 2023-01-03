import { FastifyReply, FastifyRequest } from "fastify";

export default async function routes (fastify : any, options : any) {
    
        //data correspond au info retourné par la requete sql
        //return la liste des exo long 
        fastify.get("/exoL", (request : FastifyRequest,reply : FastifyReply) => {
            fastify.mysql.query(
                'SELECT * FROM `exolong`',
                function onResult (err:any, result:any) {
                    reply.send(err || result)
                }
            )
    
        })
        //data correspond au info retourné par la requete sql
        //return un exo long 
        fastify.get('/exoL/:id', (request:FastifyRequest<{
            Params: {
              id: string,
            };
        }>, reply:FastifyReply) => {
            fastify.mysql.query(
                'SELECT * FROM `exolong` WHERE idexolong = ' + request.params.id,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })
        }