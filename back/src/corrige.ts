import { FastifyReply, FastifyRequest } from "fastify";

export default async function routes (fastify : any, options : any) {
    //data correspond au info retourné par la requete sql
    //return la liste des corriges
    fastify.get("", (request : FastifyRequest,reply : FastifyReply) => {
        fastify.mysql.query(
            'SELECT * FROM `correction`',
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
            'SELECT * FROM `correction` WHERE idCorrection = ' + request.params.id,
            function onResult (err:any, result:any) {
                reply.send(err || result[0])
            }
        )
    })

    type PutRequestCorrection = FastifyRequest<{
        Params: {
            idCorrection: string,
        }
        Body: { 
            titreCorrection: string,
            contenu: string,
        };
    }>

    fastify.put('/putRequest/:idCorrection', (request:PutRequestCorrection, reply:FastifyReply) => {
        fastify.mysql.query(
            'UPDATE `correction` SET titreCorrection = '+request.body.titreCorrection+',contenu = '+request.body.contenu+' WHERE idcorrection = '+ request.params.idCorrection,
            function onResult (err:any, result:any) {
                reply.send(err || result[0])
            }
        )
    })
    fastify.delete('/delete/:idCorrection', (request:FastifyRequest<{
            Params: {
                idCorrection: string,
            };
        }>, reply:FastifyReply) => {
            fastify.mysql.query(
                'DELETE FROM `correction` WHERE idCorrection = ' + request.params.idCorrection,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })
}
