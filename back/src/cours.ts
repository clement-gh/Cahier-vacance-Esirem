import { FastifyReply, FastifyRequest } from "fastify";

export default async function routes (fastify : any, options : any) {
        //data correspond au info retourné par la requete sql
        //return la liste des cours 
        fastify.get("", (request : FastifyRequest,reply : FastifyReply) => {
            fastify.mysql.query(
                'SELECT * FROM `cours`',
                function onResult (err:any, result:any) {
                    reply.send(err || result)
                }
            )
    
        })
        //data correspond au info retourné par la requete sql
        //return un cours 
        fastify.get('/:id', (request:FastifyRequest<{
            Params: {
              id: string,
            };
        }>, reply:FastifyReply) => {
            fastify.mysql.query(
                'SELECT * FROM `cours` WHERE idcours = ' + request.params.id,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })
    }
