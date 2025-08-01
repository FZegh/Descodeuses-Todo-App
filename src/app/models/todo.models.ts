//les modèles de données sont les entités du system
//fichier qui décrit la forme des données
//semblable a une table de données

<<<<<<< HEAD
import { Projet } from "./projet.model";

export interface Todo {
    //memberIds: never[];
=======
export interface Todo {
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
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
<<<<<<< HEAD
    description?: string | null;
    memberIds: number[];
    projet?: Projet;
    projetId: number | null; 
    utilisateurId: number;

    

    //projet: { id: number; nom?: string }|null | undefined;
    
    

=======
    description: string | null;
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
}