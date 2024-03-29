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
            'SELECT idRubrique, nom FROM `rubrique` WHERE idMatiere= ?',request.params.idMatiere,
            function onResult (err:any, result:any) {
                reply.send(err || result)
            }
        )

    })

    fastify.get('/id/:idRubrique', (request:FastifyRequest<{
        Params: {
            idRubrique: string,
        };
    }>, reply:FastifyReply) => {
        fastify.mysql.query(
            'SELECT * FROM rubrique where idRubrique= ?;',
            request.params.idRubrique,
            function onResult (err:any, result:any) {
                reply.send(err || result)
            }
        )
    })

    //data correspond au info retourné par la requete sql
    //return un cours 
    fastify.get('/:idMatiere', (request:FastifyRequest<{
        Params: {
        
            idMatiere: string,
        };
    }>, reply:FastifyReply) => {
        fastify.mysql.query(
            'SELECT r.idRubrique,e.idExoLong, e.titreExoLong, c.idCours,c.titreCours, q.idQuizz, q.titreQuizz FROM rubrique r LEFT JOIN exolong e ON r.idExoLong=e.idExoLong LEFT JOIN quizz q ON r.idQuizz=q.idQuizz LEFT JOIN cours c ON r.idCours=c.idCours WHERE idMatiere= ?;',request.params.idMatiere,
            function onResult (err:any, result:any) {
                reply.send(err || result)
            }
        )
    })

    type PutRequestRubrique = FastifyRequest<{
        Params: {
            idRubrique: string,
        }
        Body: { 
            idCours: string,
            idMatiere: string,
            idQuizz: string,
            idExoLong: string,
        };
    }>

    fastify.put('/putRequest/:idRubrique', (request:PutRequestRubrique, reply:FastifyReply) => {
        fastify.mysql.query(
            'UPDATE `rubrique` SET idcours = '+request.body.idCours+',idmatiere = '+request.body.idMatiere+',idquizz = '+request.body.idQuizz+', idCours = '+request.body.idCours+', idexolong = '+request.body.idExoLong+' WHERE idrubrique = '+ request.params.idRubrique,
            function onResult (err:any, result:any) {
                reply.send(err || result[0])
            }
        )
    })

    fastify.delete('/delete/:idRubrique', (request:FastifyRequest<{
            Params: {
                idRubrique: string,
            };
        }>, reply:FastifyReply) => {
            fastify.mysql.query(
                'DELETE FROM `rubrique` WHERE idRubrique = ' + request.params.idRubrique,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })
}
