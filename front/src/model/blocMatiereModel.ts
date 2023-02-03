export type BlocMatiereState = {
    isOpen: boolean,
};

export type BlocMatiereProps = {
    niveau: string,
    links?: BlocMatiereLink[]  ,   //sera probablement chargé avec une requête au serveur
};

//liste des liens sous le niveau.
export type BlocMatiereLink = {
    link: string | undefined ,
    title: string , 
    
};
