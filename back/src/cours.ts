import { FastifyReply, FastifyRequest } from "fastify";

export default async function routes (fastify : any, options : any) {
        //data correspond au info retourné par la requete sql
        //return la liste des cours 
        fastify.get("/cours", (request : FastifyRequest,reply : FastifyReply) => {
            fastify.mysql.query(
                'SELECT * FROM `cours`',
                function onResult (err:any, result:any) {
                    reply.send(err || result)
                }
            )
    
        })
        //data correspond au info retourné par la requete sql
        //return un cours 
        fastify.get('/cours/:id', (request:FastifyRequest<{
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

        type PutRequestCours = FastifyRequest<{
            Params: {
                idCours: string,
            }
            Body: {
                titreCours: string, 
                contenu: string,
                idMatiere: string
            };
        }>

        fastify.put('/cours/putRequest/:idCours', (request:PutRequestCours, reply:FastifyReply) => {
            fastify.mysql.query(
                'UPDATE `cours` SET titreCours = '+request.body.titreCours+', contenu = '+ request.body.contenu+', idMatiere ='+request.body.idMatiere+' WHERE idcours = '+ request.params.idCours,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })

        type PutRequestCoursLu = FastifyRequest<{
            Params: {
                idCours: string,
                idUser: string,
            }
            Body: { 
                dateCoursLu: Date,
            };
        }>

        fastify.put('/cours/putRequest/:idCours/:idUser', (request:PutRequestCoursLu, reply:FastifyReply) => {
            fastify.mysql.query(
                'UPDATE `courslu` SET dateCoursLu = '+request.body.dateCoursLu+' WHERE idCours = '+ request.params.idCours+' and iduser = '+ request.params.idUser,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })
    }