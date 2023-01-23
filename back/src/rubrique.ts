import { FastifyReply, FastifyRequest } from "fastify";

export default async function routes (fastify : any, options : any) {
        //data correspond au info retourné par la requete sql
        //return la liste des cours 
        fastify.get('/listRubrique/:idMatiere', (request:FastifyRequest<{
            Params: {
              
              idMatiere: string,
            };
        }>, reply:FastifyReply) => {
            fastify.mysql.query(
                'SELECT nom FROM `rubrique` WHERE idMatiere= ?',request.params.idMatiere,
                function onResult (err:any, result:any) {
                    reply.send(err || result)
                }
            )
    
        })
        //data correspond au info retourné par la requete sql
        //return un cours 
        fastify.get('/rubrique/:idMatiere', (request:FastifyRequest<{
            Params: {
          
              idMatiere: string,
            };
        }>, reply:FastifyReply) => {
            fastify.mysql.query(
                'SELECT * FROM  `rubrique` WHERE idMatiere= ?',request.params.idMatiere,
                function onResult (err:any, result:any) {
                    reply.send(err || result)
                }
            )
        })
    }