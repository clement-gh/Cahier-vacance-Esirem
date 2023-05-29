use projet_esirem;

#Drop contraint

ALTER TABLE Utilisateur
DROP CONSTRAINT FK_Utilisateur_AnneeEsirem;

ALTER TABLE Utilisateur
DROP CONSTRAINT FK_Utilisateur_Formation;

ALTER TABLE SuccesEffectues
DROP CONSTRAINT FK_SuccesEffectues_Utilisateur;

ALTER TABLE SuccesEffectues
DROP CONSTRAINT FK_SuccesEffectues_Succes;

ALTER TABLE ExoLongEffectué
DROP CONSTRAINT FK_ExoLongEffectué_Utilisateur;

ALTER TABLE ExoLongEffectué
DROP CONSTRAINT FK_ExoLongEffectué_ExoLong;

ALTER TABLE QuizzEffectué
DROP CONSTRAINT FK_QuizzEffectué_Utilisateur;

ALTER TABLE QuizzEffectué
DROP CONSTRAINT FK_QuizzEffectué_Quizz;

ALTER TABLE CoursLu
DROP CONSTRAINT FK_CoursLu_Utilisateur;

ALTER TABLE CoursLu
DROP CONSTRAINT FK_CoursLu_Cours;

ALTER TABLE ExoLong
DROP CONSTRAINT FK_ExoLong_difficulte;

ALTER TABLE ExoLong
DROP CONSTRAINT FK_ExoLong_Correction;

ALTER TABLE Quizz
DROP CONSTRAINT FK_Quizz_difficulte;

ALTER TABLE Matiere
DROP CONSTRAINT FK_Matiere_AnneeEsirem;

ALTER TABLE Rubrique
DROP CONSTRAINT FK_Rubrique_Cours;

ALTER TABLE Rubrique
DROP CONSTRAINT FK_Rubrique_Matiere;

ALTER TABLE Rubrique
DROP CONSTRAINT FK_Rubrique_Quizz;

ALTER TABLE Rubrique
DROP CONSTRAINT FK_Rubrique_ExoLong;




#Ajout contraint

ALTER TABLE Utilisateur
ADD CONSTRAINT FK_Utilisateur_AnneeEsirem
FOREIGN KEY (idAnneeEsirem) REFERENCES AnneeEsirem(idAnneeEsirem) On delete cascade;

ALTER TABLE Utilisateur
ADD CONSTRAINT FK_Utilisateur_Formation
FOREIGN KEY (idFormation) REFERENCES Formation(idFormation) On delete cascade;

ALTER TABLE SuccesEffectues
ADD CONSTRAINT FK_SuccesEffectues_Utilisateur
FOREIGN KEY (idUser) REFERENCES Utilisateur(idUser) On delete cascade;

ALTER TABLE SuccesEffectues
ADD CONSTRAINT FK_SuccesEffectues_Succes
FOREIGN KEY (idSucces) REFERENCES Succes(idSucces) On delete cascade;

ALTER TABLE ExoLongEffectué
ADD CONSTRAINT FK_ExoLongEffectué_Utilisateur
FOREIGN KEY (idUser) REFERENCES Utilisateur(idUser) On delete cascade;

ALTER TABLE ExoLongEffectué
ADD CONSTRAINT FK_ExoLongEffectué_ExoLong
FOREIGN KEY (idExoLong) REFERENCES ExoLong(idExoLong) On delete cascade;

ALTER TABLE QuizzEffectué
ADD CONSTRAINT FK_QuizzEffectué_Utilisateur
FOREIGN KEY (idUser) REFERENCES Utilisateur(idUser) On delete cascade;

ALTER TABLE QuizzEffectué
ADD CONSTRAINT FK_QuizzEffectué_Quizz
FOREIGN KEY (idQuizz) REFERENCES Quizz(idQuizz) On delete cascade;

ALTER TABLE CoursLu
ADD CONSTRAINT FK_CoursLu_Utilisateur
FOREIGN KEY (idUser) REFERENCES Utilisateur(idUser) On delete cascade;

ALTER TABLE CoursLu
ADD CONSTRAINT FK_CoursLu_Cours
FOREIGN KEY (idCours) REFERENCES Cours(idCours) On delete cascade;

ALTER TABLE ExoLong
ADD CONSTRAINT FK_ExoLong_difficulte
FOREIGN KEY (difficulte) REFERENCES NiveauDifficulté(difficulte) On delete cascade;

ALTER TABLE ExoLong
ADD CONSTRAINT FK_ExoLong_Correction
FOREIGN KEY (idCorrection) REFERENCES Correction(idCorrection) On delete cascade;

ALTER TABLE Quizz
ADD CONSTRAINT FK_Quizz_difficulte
FOREIGN KEY (difficulte) REFERENCES NiveauDifficulté(difficulte) On delete cascade;

ALTER TABLE Matiere
ADD CONSTRAINT FK_Matiere_AnneeEsirem
FOREIGN KEY (idAnneeEsirem) REFERENCES AnneeEsirem(idAnneeEsirem) On delete cascade;

ALTER TABLE Rubrique
ADD CONSTRAINT FK_Rubrique_Cours
FOREIGN KEY (idCours) REFERENCES Cours(idCours) On delete cascade;

ALTER TABLE Rubrique
ADD CONSTRAINT FK_Rubrique_Matiere
FOREIGN KEY (idMatiere) REFERENCES Matiere(idMatiere) On delete cascade;

ALTER TABLE Rubrique
ADD CONSTRAINT FK_Rubrique_Quizz
FOREIGN KEY (idQuizz) REFERENCES Quizz(idQuizz) On delete cascade;

ALTER TABLE Rubrique
ADD CONSTRAINT FK_Rubrique_ExoLong
FOREIGN KEY (idExoLong) REFERENCES ExoLong(idExoLong)On delete cascade;