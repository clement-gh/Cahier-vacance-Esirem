import { FastifyReply, FastifyRequest } from "fastify";

export default async function routes (fastify : any, options : any) {
    
    //data correspond au info retourné par la requete sql
    //return la liste des quizz 
    fastify.get("", (request : FastifyRequest,reply : FastifyReply) => {
        fastify.mysql.query(
            'SELECT * FROM `quizz`',
            function onResult (err:any, result:any) {
                reply.send(err || result)
            }
        )
    })
    //data correspond au info retourné par la requete sql
    //return un quizz 
    fastify.get('/:id', (request:FastifyRequest<{
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

    type PutRequestQuizz = FastifyRequest<{
        Params: {
            idQuizz: string,
        }
        Body: {
            titreQuizz: string, 
            contenu: string,
            difficulte: string,
            idMatiere: string
        };
    }>

    fastify.put('/putRequest/:idQuizz', (request:PutRequestQuizz, reply:FastifyReply) => {
        fastify.mysql.query(
            'UPDATE `quizz` SET titreQuizz = '+request.body.titreQuizz+', contenu = '+ request.body.contenu+', difficulte ='+request.body.difficulte+', idMatiere ='+request.body.idMatiere+' WHERE idquizz = '+ request.params.idQuizz,
            function onResult (err:any, result:any) {
                reply.send(err || result[0])
            }
        )
    })

    type PutRequestQuizzEffectue = FastifyRequest<{
        Params: {
            idQuizz: string,
            idUser: string,
        }
        Body: { 
            dateQuizz: Date,
        };
    }>

    fastify.put('/putRequest/:idQuizz/:idUser', (request:PutRequestQuizzEffectue, reply:FastifyReply) => {
        fastify.mysql.query(
            'UPDATE `quizzeffectué` SET dateQuizz = '+request.body.dateQuizz+' WHERE idquizz = '+ request.params.idQuizz+' and iduser = '+ request.params.idUser,
            function onResult (err:any, result:any) {
                reply.send(err || result[0])
            }
        )
    })

    fastify.delete('/delete/:idquizz', (request:FastifyRequest<{
            Params: {
                idquizz: string,
            };
        }>, reply:FastifyReply) => {
            fastify.mysql.query(
                'DELETE FROM `quizz` WHERE idquizz = ' + request.params.idquizz,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })

     fastify.delete('/delete/:idquizz/:iduser', (request:FastifyRequest<{
            Params: {
                idquizz: string,
                iduser: string,
            };
        }>, reply:FastifyReply) => {
            fastify.mysql.query(
                'DELETE FROM `quizzeffectué` WHERE idquizz = ' + request.params.idquizz +' and iduser = '+request.params.iduser,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })
}
