import { callAPI } from "./api_caller";


export async function loadNomMatiere(): Promise<string[]> {
    let nomMatieres: string[] = [];

    let data = await callAPI("matiere/listeMatieres");

    for(let i = 0; i < data?.length; i++){
        nomMatieres.push(data[i].nom);
    }

    return nomMatieres;
}