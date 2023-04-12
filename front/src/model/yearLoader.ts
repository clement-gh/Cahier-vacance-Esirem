export type Year = {
    idAnnee: number,
    nom: string,
}

export async function loadAllYears() : Promise<Year[]> {
    let years: Year[] = [];

    let response = await fetch('http://[::1]:4000/annee');
    let data = await response.json();

    for(let i = 0; i < data.length; i++) {
        let year: Year = {
            idAnnee: data[i].idAnneeEsirem,
            nom: data[i].nom,
        };

        years.push(year);
    }
    
    return years;
}