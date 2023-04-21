import { FormControl } from "@angular/forms"

export type OrderForm = {
    name: FormControl<string>,
    surname: FormControl<string>,
    address: FormControl<string>
}