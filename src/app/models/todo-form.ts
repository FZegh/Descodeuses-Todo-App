import { FormControl } from "@angular/forms";


//Creer un formulaire type
export interface TodoForm {
    id: FormControl<number | null>;
    title: FormControl<string | null>
<<<<<<< HEAD
    description: FormControl<string | null>;
    //completed: FormControl<boolean | null>;
    //priority: FormControl<string | null>;
    //dueDate: FormControl<Date | null>;
=======
    completed: FormControl<boolean | null>;
    priority: FormControl<string | null>;
    dueDate: FormControl<Date | null>;
>>>>>>> 87cf5ee64b15a1d8b71430e1407f5e4e8926e7ed
}