

export async function loadNomMatiere(): Promise<string[]> {
    let nomMatieres: string[] = [];

    let response = await fetch('http://[::1]:4000/listeMatieres');
    let data = await response.json();
 
    for(let i = 0; i< data.length; i++){
        nomMatieres.push(data[i].nom);
    }

    return nomMatieres;
}