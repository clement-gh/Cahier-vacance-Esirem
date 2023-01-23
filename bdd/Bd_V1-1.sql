create schema IF NOT EXISTS Projet_Esirem;

use Projet_Esirem;

create table IF NOT EXISTS Utilisateur (
	idUser int primary key,
    prenom varchar(45),
    identifiant varchar(45),
    password varchar(45),
    mail varchar(45),
    idAnneeEsirem int,
    idFormation int
);

create table IF NOT EXISTS Formation (
	idFormation int primary key,
    nom varchar(45)
);

create table IF NOT EXISTS SuccesEffectues (
	idUser int,
	idSucces int,
    dateSucces date
);

create table IF NOT EXISTS Succes (
	idSucces int primary key,
	nom varchar(45),
    description varchar(500)
);

create table IF NOT EXISTS ExoLongEffectué (
	idUser int,
	idExoLong int,
    dateExoLong date
);

create table IF NOT EXISTS QuizzEffectué (
	idUser int,
	idQuizz int,
    dateQuizz date
);

create table IF NOT EXISTS CoursLu (
	idUser int,
	idCours int,
    dateCoursLu date
);

create table IF NOT EXISTS AnneeEsirem (
	idAnneeEsirem int primary key,
    nom varchar(45)
);

create table IF NOT EXISTS ExoLong (
	idExoLong int primary key,
    titreExoLong varchar(45),
    contenu json,
    difficulte int,
    idCorrection int,
    idRubrique int
);

create table IF NOT EXISTS Quizz (
	idQuizz int primary key,
    titreQuizz varchar(45),
    contenu json,
    difficulte int,
    idRubrique int
);

create table IF NOT EXISTS Cours (
	idCours int primary key,
    titreCours varchar(45),
    contenu json,
    idRubrique int
    
);

create table IF NOT EXISTS Matiere (
	idMatiere int primary key,
    nom varchar(45),
    idAnneeEsirem int
);

create table IF NOT EXISTS Rubrique (
	idRubrique int primary key,
    idCours int,
    idMatiere int,
    idQuizz int,
    idExoLong int,
    nom varchar(45)
);

create table if not exists Correction (
	idCorrection int primary key,
    titreCorrection varchar(45),
    contenu json
);

create table if not exists NiveauDifficulté (
	difficulte int primary key
);

## foreign key ##

ALTER TABLE Utilisateur
ADD CONSTRAINT FK_Utilisateur_AnneeEsirem
FOREIGN KEY (idAnneeEsirem) REFERENCES AnneeEsirem(idAnneeEsirem);

ALTER TABLE Utilisateur
ADD CONSTRAINT FK_Utilisateur_Formation
FOREIGN KEY (idFormation) REFERENCES Formation(idFormation);

ALTER TABLE SuccesEffectues
ADD CONSTRAINT FK_SuccesEffectues_Utilisateur
FOREIGN KEY (idUser) REFERENCES Utilisateur(idUser);

ALTER TABLE SuccesEffectues
ADD CONSTRAINT FK_SuccesEffectues_Succes
FOREIGN KEY (idSucces) REFERENCES Succes(idSucces);

ALTER TABLE ExoLongEffectué
ADD CONSTRAINT FK_ExoLongEffectué_Utilisateur
FOREIGN KEY (idUser) REFERENCES Utilisateur(idUser);

ALTER TABLE ExoLongEffectué
ADD CONSTRAINT FK_ExoLongEffectué_ExoLong
FOREIGN KEY (idExoLong) REFERENCES ExoLong(idExoLong);

ALTER TABLE QuizzEffectué
ADD CONSTRAINT FK_QuizzEffectué_Utilisateur
FOREIGN KEY (idUser) REFERENCES Utilisateur(idUser);

ALTER TABLE QuizzEffectué
ADD CONSTRAINT FK_QuizzEffectué_Quizz
FOREIGN KEY (idQuizz) REFERENCES Quizz(idQuizz);

ALTER TABLE CoursLu
ADD CONSTRAINT FK_CoursLu_Utilisateur
FOREIGN KEY (idUser) REFERENCES Utilisateur(idUser);

ALTER TABLE CoursLu
ADD CONSTRAINT FK_CoursLu_Cours
FOREIGN KEY (idCours) REFERENCES Cours(idCours);

ALTER TABLE ExoLong
ADD CONSTRAINT FK_ExoLong_difficulte
FOREIGN KEY (difficulte) REFERENCES NiveauDifficulté(difficulte);

ALTER TABLE ExoLong
ADD CONSTRAINT FK_ExoLong_Correction
FOREIGN KEY (idCorrection) REFERENCES Correction(idCorrection);

ALTER TABLE Quizz
ADD CONSTRAINT FK_Quizz_difficulte
FOREIGN KEY (difficulte) REFERENCES NiveauDifficulté(difficulte);

ALTER TABLE Matiere
ADD CONSTRAINT FK_Matiere_AnneeEsirem
FOREIGN KEY (idAnneeEsirem) REFERENCES AnneeEsirem(idAnneeEsirem);

ALTER TABLE Rubrique
ADD CONSTRAINT FK_Rubrique_Cours
FOREIGN KEY (idCours) REFERENCES Cours(idCours);

ALTER TABLE Rubrique
ADD CONSTRAINT FK_Rubrique_Matiere
FOREIGN KEY (idMatiere) REFERENCES Matiere(idMatiere);

ALTER TABLE Rubrique
ADD CONSTRAINT FK_Rubrique_Quizz
FOREIGN KEY (idQuizz) REFERENCES Quizz(idQuizz);

ALTER TABLE Rubrique
ADD CONSTRAINT FK_Rubrique_ExoLong
FOREIGN KEY (idExoLong) REFERENCES ExoLong(idExoLong);

INSERT INTO anneeesirem(idAnneeEsirem,nom)VALUES
(1,"1A"),
(2,"2A"),
(3,"3A"),
(4,"4A"),
(5,"5A");
select * from anneeesirem;

INSERT INTO formation(idFormation,nom)VALUES
(1,"IE"),
(2,"ROB"),
(3,"Matériaux");
select * from formation;

INSERT INTO utilisateur(idUser,prenom,identifiant,password,mail,idAnneeEsirem,idFormation)VALUES
(1,"Jean","JeanMichMich","mdpbienfait","JeanMichMich@gmail.com",1,2),
(2,"Alice","Ali","mdpbienfait","Alih@gmail.com",3,1),
(3,"Bob","Bobo","mdpbienfait","Bobo@gmail.com",3,2);
select * from utilisateur;

INSERT INTO correction(idCorrection,titreCorrection,contenu)VALUES
(1,"Exo1-Maths",'{"reponse": "c", "explication": "Parce que"}'),
(2,"Exo2-Maths",'{"reponse": "b", "explication": "Parce que"}'),
(3,"Exo3-Maths",'{"reponse": "a", "explication": "Parce que"}'),
(4,"Exo1-Info",'{"reponse": "b", "explication": "Parce que"}'),
(5,"Exo2-Info",'{"reponse": "a", "explication": "Parce que"}'),
(6,"Exo3-Info",'{"reponse": "c", "explication": "Parce que"}'),
(7,"Exo1-Elec",'{"reponse": "b", "explication": "Parce que"}'),
(8,"Exo2-Elec",'{"reponse": "c", "explication": "Parce que"}'),
(9,"Exo3-Elec",'{"reponse": "a", "explication": "Parce que"}');
select * from correction;
INSERT INTO niveaudifficulté(difficulte)VALUES
(1),
(2),
(3);
select * from niveaudifficulté;
INSERT INTO exolong(idExoLong,titreExoLong,contenu,difficulte,idCorrection,idRubrique)VALUES
(1,"Exo1-Maths",'{"question": "4052 x 7786 = ?","proposition": [{"nom": "a", "details": "45 896 111"},{"nom": "b", "details": "17 558 214"},{"nom": "c", "details": "31 548 872"}]}',1,1,3),
(2,"Exo2-Maths",'{"question": "1+4=?","proposition": [{"nom": "a", "details": "-5"},{"nom": "b", "details": "5"},{"nom": "c", "details": "1"}]}',2,2,3),
(3,"Exo3-Maths",'{"question": "89-77=?","proposition": [{"nom": "a", "details": "12"},{"nom": "b", "details": "57"},{"nom": "c", "details": "66"}]}',3,3,3),
(4,"Exo1-Info",'{"question": "En shell, que fait echo $?","proposition": [{"nom": "a", "details": "Permet d afficher la liste des fichiers et dossier dans le repertoir actuel,retourne 0 si le repertoir est vide et 1 si il n existe pas."},{"nom": "b", "details": "Permet de vérifier ce que retourne la dernière commande utilisé, en général quand tout se passe bien, la commande retourne 0"},{"nom": "c", "details": "afficher le contenu d un fichier, retourne 0 si le fichier est vide "}]}',1,4,1),
(5,"Exo2-Info",'{"question": "En c++, un tableau dynamique est crée a partir de : ","proposition": [{"nom": "a", "details": "std::vector"},{"nom": "b", "details": "std::array"},{"nom": "c", "details": "tout simplement en ajoutant [] devant notre variable"}]}',2,5,1),
(6,"Exo3-Info",'{"question": "En poo, un variable doit toujours être dans quel état ?","proposition": [{"nom": "a", "details": "public, la base"},{"nom": "b", "details": "toujours protected"},{"nom": "c", "details": "bien évidement en private"}]}',3,6,1),
(7,"Exo1-Elec",'{"question": "Lors d un passage de thévenin vers norton, comment branche-t-on le circuit ?","proposition": [{"nom": "a", "details": "série"},{"nom": "b", "details": "parallèle"},{"nom": "c", "details": "on le laisse a vide"}]}',1,7,2),
(8,"Exo2-Elec",'{"question": "Dans le modèle idéeal de la diode, V sera égal a combien lorsque la diode sera passante ? ","proposition": [{"nom": "a", "details": "Il faut le calculer"},{"nom": "b", "details": "1"},{"nom": "c", "details": "0"}]}',2,8,2),
(9,"Exo3-Elec",'{"question": "Quesqu un transistor saturé ? ","proposition": [{"nom": "a", "details": "Element electronique permettant de réguler le courant, il est saturé quand il n est pas possible de faire passer plus de courant dans le collecteur du transistor"},{"nom": "b", "détail": "Element electronique permettant de réguler le courant, il est saturé quand le courant ne passe pas"},{"nom": "c", "details": "Element electronique permettant de réguler le courant, il est saturé quand il est utilisé en amplification et que le courant ne passe pas"}]}',3,9,2);
select * from exolong;

INSERT INTO cours(idCours,titreCours,contenu,idRubrique)VALUES
(1,"PID du script courant",'{"titre": "PID", "texte": "$$"}',1),
(2,"PID du processus père du script",'{"titre": "PID", "texte": "$PPID"}',2),
(3,"Code retour de la dernière commande",'{"titre": "Code retour", "texte": "$?"}',3);
select * from cours;

INSERT INTO courslu(idUser,idCours,dateCoursLu)VALUES
(1,1,curdate()),
(2,1,curdate()),
(1,3,curdate()),
(2,2,curdate());
select * from courslu;

INSERT INTO exolongeffectué(idUser,idExoLong,dateExoLong)VALUES
(3,4,curdate()),
(2,1,curdate()),
(1,5,curdate()),
(2,2,curdate());
select * from exolongeffectué;

INSERT INTO matiere(idMatiere,nom,idAnneeEsirem)VALUES
(1,"Info",1),
(2,"Info",2),
(3,"Info",3),
(4,"Info",4),
(5,"Info",5),
(6,"Maths",1),
(7,"Maths",2),
(8,"Maths",3),
(9,"Maths",4),
(10,"Maths",5),
(11,"Elec",1),
(12,"Elec",2),
(13,"Elec",3),
(14,"Elec",4),
(15,"Elec",5);

select * from matiere;

INSERT INTO quizz(idQuizz,titreQuizz,contenu,difficulte,idRubrique)VALUES
(1,"quizz1-Maths",'{"question": "4052 x 7786 = ?","proposition": [{"nom": "a", "details": "45 896 111"},{"nom": "b", "details": "17 558 214"},{"nom": "c", "details": "31 548 872"}]}',1,3),
(2,"quizz2-Maths",'{"question": "1+4=?","proposition": [{"nom": "a", "details": "-5"},{"nom": "b", "details": "5"},{"nom": "c", "details": "1"}]}',2,3),
(3,"quizz3-Maths",'{"question": "89-77=?","proposition": [{"nom": "a", "details": "12"},{"nom": "b", "details": "57"},{"nom": "c", "details": "66"}]}',3,3),
(4,"quizz1-Info",'{"question": "En shell, que fait echo $?","proposition": [{"nom": "a", "details": "Permet d afficher la liste des fichiers et dossier dans le repertoir actuel,retourne 0 si le repertoir est vide et 1 si il n existe pas."},{"nom": "b", "details": "Permet de vérifier ce que retourne la dernière commande utilisé, en général quand tout se passe bien, la commande retourne 0"},{"nom": "c", "details": "afficher le contenu d un fichier, retourne 0 si le fichier est vide "}]}',1,1),
(5,"quizz2-Info",'{"question": "En c++, un tableau dynamique est crée a partir de : ","proposition": [{"nom": "a", "details": "std::vector"},{"nom": "b", "details": "std::array"},{"nom": "c", "details": "tout simplement en ajoutant [] devant notre variable"}]}',2,1),
(6,"quizz3-Info",'{"question": "En poo, un variable doit toujours être dans quel état ?","proposition": [{"nom": "a", "details": "public, la base"},{"nom": "b", "details": "toujours protected"},{"nom": "c", "details": "bien évidement en private"}]}',3,1),
(7,"quizz1-Elec",'{"question": "Lors d un passage de thévenin vers norton, comment branche-t-on le circuit ?","proposition": [{"nom": "a", "details": "série"},{"nom": "b", "details": "parallèle"},{"nom": "c", "details": "on le laisse a vide"}]}',1,2),
(8,"quizz2-Elec",'{"question": "Dans le modèle idéeal de la diode, V sera égal a combien lorsque la diode sera passante ? ","proposition": [{"nom": "a", "details": "Il faut le calculer"},{"nom": "b", "details": "1"},{"nom": "c", "details": "0"}]}',2,2),
(9,"quizz3-Elec",'{"question": "Quesqu un transistor saturé ? ","proposition": [{"nom": "a", "details": "Element electronique permettant de réguler le courant, il est saturé quand il n est pas possible de faire passer plus de courant dans le collecteur du transistor"},{"nom": "b", "Element electronique permettant de réguler le courant, il est saturé quand le courant ne passe pas": "et oui"},{"nom": "c", "details": "Element electronique permettant de réguler le courant, il est saturé quand il est utilisé en amplification et que le courant ne passe pas"}]}',3,2);
select * from quizz;

INSERT INTO quizzeffectué(idUser,idQuizz,dateQuizz)VALUES
(3,4,curdate()),
(2,1,curdate()),
(1,5,curdate()),
(2,2,curdate());
select * from quizzeffectué;

INSERT INTO rubrique(idRubrique,idCours,idMatiere,idQuizz,idExoLong,nom)VALUES
(1,2,1,1,1,"R1"),
(2,1,11,5,5,"R2"),
(3,3,3,7,7,"R3"),
(4,3,11,8,7,"R4"), 
(5,3,11,9,NULL,"R5");
select * from rubrique;

INSERT INTO succes(idSucces,nom,description)VALUES
(1,"vous etes nouveau ?","vous vous êtes inscrit"),
(2,"konami code","haut,haut,bas,bas...."),
(3,"premiere exo fait","vous avez fait votre premiere exercice");
select * from succes;

INSERT INTO succeseffectues(idUser,idSucces,dateSucces)VALUES
(1,3,curdate()),
(2,2,curdate()),
(3,1,curdate());
select * from succeseffectues;


select idExoLong,titreExoLong,contenu,difficulte,matiere.nom,anneeesirem.nom from exolong inner join rubrique on exolong.idRubrique = rubrique.idRubrique inner join anneeesirem on matiere.idAnneeEsirem = anneeesirem.idAnneeEsirem;
 
#drop schema Projet_Esirem;