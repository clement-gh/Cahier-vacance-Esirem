import { FastifyReply, FastifyRequest } from "fastify";

export default async function routes (fastify : any, options : any) {
    //data correspond au info retourné par la requete sql
    //return la liste des cours 
    fastify.get("", (request : FastifyRequest,reply : FastifyReply) => {
        fastify.mysql.query(
            'SELECT * FROM `cours`',
            function onResult (err:any, result:any) {
                reply.send(err || result)
            }
        )

    })
    //data correspond au info retourné par la requete sql
    //return un cours 
    fastify.get('/:id', (request:FastifyRequest<{
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

    //return le cours, avec le nom de la matiere et de son année, selon son id
    fastify.get('Complets/:idCours', (request:FastifyRequest<{
        Params: {
            idCours: string,
        };
    }>, reply:FastifyReply) => {
        fastify.mysql.query(
            "SELECT cours.idCours, cours.titreCours, matiere.nom as nomMatiere, anneeesirem.nom as annee, rubrique.idRubrique, contenu, dateCreation "
            +"FROM cours "
            +"left join rubrique on cours.idCours = rubrique.idCours "
            +"left join matiere on matiere.idMatiere = rubrique.idMatiere "
            +"left join anneeesirem on matiere.idAnneeEsirem = anneeesirem.idAnneeEsirem "
            +"where cours.idCours = ?;",
            request.params.idCours,
            function onResult (err:any, result:any) {
                reply.send(err || result[0])
            }
        )
    })

    //return le cours avec le nom de la matiere et de son année
    fastify.get('Complets', (request:FastifyRequest, reply:FastifyReply) => {
        fastify.mysql.query(
            "SELECT cours.idCours, cours.titreCours, matiere.nom as nomMatiere, anneeesirem.nom as annee, rubrique.idRubrique, contenu, dateCreation "
            +"FROM cours "
            +"left join rubrique on cours.idCours = rubrique.idCours "
            +"left join matiere on rubrique.idMatiere = matiere.idMatiere "
            +"left join anneeesirem on matiere.idAnneeEsirem = anneeesirem.idAnneeEsirem "
            +"group by cours.idCours;",
            function onResult (err:any, result:any) {
                reply.send(err || result)
            }
        )
    })

    type PostRequestCours = FastifyRequest<{
        Body: {
            titreCours: string, 
            contenu: Text,
        };
    }>
    
    fastify.post("/post/", (request:PostRequestCours, reply:FastifyReply) => {
        const body = request.body;
        const today = new Date();
        fastify.mysql.query(
            'INSERT INTO cours (titreCours, contenu, dateCreation) VALUES (? , ?, ?); ',
            [body.titreCours, body.contenu, today],
            function onResult (err:any, result:any) {
                reply.send(err || result[0])
            }
        )
    });

    type PutRequestCours = FastifyRequest<{
        Params: {
            idCours: string,
        }
        Body: {
            titreCours: string, 
            contenu: string,
        };
    }>

    fastify.put('/putRequest/:idCours', (request:PutRequestCours, reply:FastifyReply) => {
        fastify.mysql.query(
            'UPDATE `cours` SET titreCours = ?, contenu = ? WHERE idcours = ?;',
            [request.body.titreCours, request.body.contenu, request.params.idCours],
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

    fastify.put('/putRequest/:idCours/:idUser', (request:PutRequestCoursLu, reply:FastifyReply) => {
        fastify.mysql.query(
            'UPDATE `courslu` SET dateCoursLu = '+request.body.dateCoursLu+' WHERE idCours = '+ request.params.idCours+' and iduser = '+ request.params.idUser,
            function onResult (err:any, result:any) {
                reply.send(err || result[0])
            }
        )
    })
    fastify.delete('/delete/:idcours/:iduser', (request:FastifyRequest<{
            Params: {
                idcours: string,
                iduser: string,
            };
        }>, reply:FastifyReply) => {
            fastify.mysql.query(
                'DELETE FROM `courslu` WHERE idCours = ' + request.params.idcours +' and iduser = '+request.params.iduser,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })
    fastify.delete('/delete/:idcours', (request:FastifyRequest<{
            Params: {
                idcours: string,
            };
        }>, reply:FastifyReply) => {
            fastify.mysql.query(
                'DELETE FROM `cours` WHERE idcours = ' + request.params.idcours,
                function onResult (err:any, result:any) {
                    reply.send(err || result[0])
                }
            )
        })
}
