import { FastifyReply, FastifyRequest } from "fastify";

export default async function routes (fastify : any, options : any) {
    
        //data correspond au info retourné par la requete sql
        //return la liste des quizz 
        fastify.get("/quizz", (request : FastifyRequest,reply : FastifyReply) => {
            fastify.mysql.query(
                'SELECT * FROM `quizz`',
                function onResult (err:any, result:any) {
                    reply.send(err || result)
                }
            )
        })
        //data correspond au info retourné par la requete sql
        //return un quizz 
        fastify.get('/quizz/:id', (request:FastifyRequest<{
            Params: {
              id: string,
            };
        }>, reply:FastifyReply) => {
            fastify.mysql.query(
                'SELECT * FROM `quizz` WHERE idquizz = ' + request.params.id,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })
    }