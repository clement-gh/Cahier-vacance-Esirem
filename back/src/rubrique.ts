import { FastifyReply, FastifyRequest } from "fastify";

export default async function routes (fastify : any, options : any) {
        //data correspond au info retourné par la requete sql
        //return la liste des cours 
        fastify.get("/rubrique", (request : FastifyRequest,reply : FastifyReply) => {
            fastify.mysql.query(
                'SELECT * FROM `rubrique`',
                function onResult (err:any, result:any) {
                    reply.send(err || result)
                }
            )
    
        })
        //data correspond au info retourné par la requete sql
        //return un cours 
        fastify.get('/rubrique/:id/:idM', (request:FastifyRequest<{
            Params: {
              id: string,
                idM: string,
            };
        }>, reply:FastifyReply) => {
            fastify.mysql.query(
                'SELECT * FROM  `rubrique` WHERE idRubrique = ' + request.params.id + ' AND WHERE idMatiere = ' + request.params.idM,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })
    }