import { FormControl} from "@angular/forms";

// on crée un formulaire typé pour pouvoir récupérer les valeurs saisies

export interface Userform {
    id:FormControl<number | null>;
    firsName:FormControl<string | null>; // null : champ optionnel
    lastName:FormControl<string | null>;
    genre: FormControl<boolean | null>;
}