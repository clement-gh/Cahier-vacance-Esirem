export type BlocMatiereState = {
    isOpen: boolean,
};

export type BlocMatiereProps = {
    niveau: '1A'| '2A' | '3A' | '4A' | '5A',
    links?: BlocMatiereLink[],   //sera probablement chargé avec une requête au serveur
};

//liste des liens sous le niveau.
export type BlocMatiereLink = {
    link: string,
    title: string,
};
