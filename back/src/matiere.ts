import { FastifyReply, FastifyRequest } from "fastify";

export default async function routes (fastify : any, options : any) {
    



        //data correspond au info retourné par la requete sql
        //return la liste des nom de matières
        fastify.get("/matiere", (request : FastifyRequest, reply : FastifyReply) => {
            fastify.mysql.query(
               ' SELECT nom FROM `matiere` GROUP BY nom',
                //'SELECT * FROM `matiere`',
                function onResult (err:any, result:any) {
                    reply.send(err || result) 

                }
                )
            })
        
              
            
    }