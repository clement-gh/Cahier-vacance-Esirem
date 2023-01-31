export interface Course {
    id: number;
    idRubrique: number;
    title: string;
    subTitle: string;
    content: string;
    annotation: string;
}

//function to load a course with his id
export async function loadCourse(id: number): Promise<Course> {
    let response = await fetch('http://[::1]:4000/cours/' + id);
    let principal = await response.json();
    let secondary = JSON.parse(principal.contenu);

    //parse the string to find annotation tag
    let splitContent = secondary.texte.split("<annotation>");
    console.log(splitContent);
    let content = splitContent[0];
    let annotation = "";
    if(splitContent.length > 1) {  //if their is a tag, delete and tag balise
        annotation = splitContent[1].split("</annotation>");
    }
    
    let course : Course = {
        id:         principal.idCours,
        idRubrique: principal.idRubrique,
        title:      principal.titreCours,
        subTitle:   secondary.titre,
        content:    content,
        annotation: annotation,
    }
    return course;
}