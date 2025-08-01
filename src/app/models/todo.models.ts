//les modèles de données sont les entités du system
//fichier qui décrit la forme des données
//semblable a une table de données

import { Projet } from "./projet.model";

export interface Todo {
    //memberIds: never[];
    // | en typescript c'est possibilite d'avoir
    // plusieurs types

    // | null cad champ optionel

    //identifiant
    id: number | null;
    title: string | null;
    completed: boolean | null;
    priority: string | null;
    //dueDate: Date | null;
    dueDate: string;
    description?: string | null;
    memberIds: number[];
    projet?: Projet;
    projetId: number | null; 
    utilisateurId: number;

    

    //projet: { id: number; nom?: string }|null | undefined;
    
    

}