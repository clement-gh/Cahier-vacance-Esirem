export interface Course {
    id: number;
    idRubrique: number;
    title: string;
    subTitle: string;
    content: string;
}

//function to load a course with his id
export async function loadCourse(id: number): Promise<Course> {
    let response = await fetch('http://[::1]:4000/cours/' + id);
    let principal = await response.json();
    let secondary = JSON.parse(principal.contenu);
    
    let course : Course = {
        id:         principal.idCours,
        idRubrique: principal.idRubrique,
        title:      principal.titreCours,
        subTitle:   secondary.titre,
        content:    secondary.texte,
    }
    return course;
}