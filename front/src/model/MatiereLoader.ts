

export async function loadNomMatiere(): Promise<string[]> {
    let nomMatieres :Set<string> = new Set();

    let response = await fetch('http://[::1]:4000/matiere');
    let data = await response.json();
 
    for(let i = 0; i< data.length; i++){
        nomMatieres.add(data[i].nomMatiere);
    }

    return Array.from(nomMatieres);
}