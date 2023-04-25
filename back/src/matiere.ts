import { FastifyReply, FastifyRequest } from "fastify";

export default async function routes (fastify : any, options : any) {
    



        //data correspond au info retourné par la requete sql
        //return la liste des nom de matières
        fastify.get("/listeMatieres", (request : FastifyRequest, reply : FastifyReply) => {
            fastify.mysql.query(
        ' SELECT * FROM `matiere`  GROUP BY nom ORDER BY idMatiere ASC',
                //'SELECT * FROM `matiere`',
                function onResult (err:any, result:any) {
                    reply.send(err || result) 

                }
                )
            })
            fastify.get('/:id', (request:FastifyRequest<{
                Params: {
                  id: String,
                };
            }>, reply:FastifyReply) => {
                fastify.mysql.query(

                    'SELECT * FROM  `matiere` WHERE nom= ?',request.params.id,
                    
                    function onResult (err:any, result:any) {
                        reply.send(err || result)
                    }
                )
             
            })
            fastify.get('', (request:FastifyRequest, reply:FastifyReply) => {
                fastify.mysql.query(
                    
                    'SELECT anneeesirem.nom AS nomAnnee, matiere.nom AS nomMatiere , matiere.idMatiere FROM `anneeesirem` RIGHT JOIN `matiere` ON anneeesirem.idAnneeEsirem = matiere.idAnneeEsirem ',
                    
                    function onResult (err:any, result:any) {
                        reply.send(err || result)
                    }
                )
             
            })
              
            
    }
