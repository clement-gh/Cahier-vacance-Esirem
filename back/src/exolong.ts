import { FastifyReply, FastifyRequest } from "fastify";

export default async function routes (fastify : any, options : any) {

    //data correspond au info retourné par la requete sql
    //return la liste des exo long 
    fastify.get("", (request : FastifyRequest,reply : FastifyReply) => {
        fastify.mysql.query(
            'SELECT * FROM `exolong`',
            function onResult (err:any, result:any) {
                reply.send(err || result)
            }
        )

    })
    //data correspond au info retourné par la requete sql
    //return un exo long 
    fastify.get('/:id', (request:FastifyRequest<{
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

    type PutRequestExoLong = FastifyRequest<{
        Params: {
            idExoLong: string,
        }
        Body: { 
            contenu: string,
            difficulte: string,
            idCorrection: string,
            idMatiere: string,
            titreExoLong: string,
        };
    }>

    fastify.put('/putRequest/:idExoLong', (request:PutRequestExoLong, reply:FastifyReply) => {
        fastify.mysql.query(
            'UPDATE `exolong` SET titreExoLong = '+request.body.titreExoLong+', contenu = '+ request.body.contenu+', difficulte ='+request.body.difficulte+', idCorrection =' +request.body.idCorrection+', idMatiere ='+request.body.idMatiere+' WHERE idexolong = '+ request.params.idExoLong,
            function onResult (err:any, result:any) {
                reply.send(err || result[0])
            }
        )
    })

    type PutRequestExoLongCorrige = FastifyRequest<{
        Params: {
            idExoLong: string,
            idUser: string,
        }
        Body: { 
            dateExoLong: Date,
        };
    }>

    fastify.put('/putRequest/:idExoLong/:idUser', (request:PutRequestExoLongCorrige, reply:FastifyReply) => {
        fastify.mysql.query(
            'UPDATE `exolongeffectué` SET dateExoLong = '+request.body.dateExoLong+' WHERE idexolong = '+ request.params.idExoLong+' and iduser = '+ request.params.idUser,
            function onResult (err:any, result:any) {
                reply.send(err || result[0])
            }
        )
    })

    fastify.delete('/delete/:idExoLong', (request:FastifyRequest<{
            Params: {
                idExoLong: string,
            };
        }>, reply:FastifyReply) => {
            fastify.mysql.query(
                'DELETE FROM `exolong` WHERE idexolong = ' + request.params.idExoLong,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })

    fastify.delete('/delete/:idExoLong/:iduser', (request:FastifyRequest<{
            Params: {
                idExoLong: string,
                iduser: string
            };
        }>, reply:FastifyReply) => {
            fastify.mysql.query(
                'DELETE FROM `exolongeffectué` WHERE idexolong = ' + request.params.idExoLong + ' and iduser = '+request.params.iduser,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })


    }
