import { callAPI } from "./api_caller";

export type Year = {
    idAnnee: number,
    nom: string,
}

export async function loadAllYears() : Promise<Year[]> {
    let years: Year[] = [];
    let data = await callAPI("annee");

    for(let i = 0; i < data?.length; i++) {
        let year: Year = {
            idAnnee: data[i].idAnneeEsirem,
            nom: data[i].nom,
        };

        years.push(year);
    }
    
    return years;
}