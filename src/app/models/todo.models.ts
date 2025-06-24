//les modèles de données sont les entités du system
//fichier qui décrit la forme des données
//semblable a une table de données

export interface Todo {
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
    description: string | null;
}