import { NgForm, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'

export class Customer {
    customerCode = '';
    customerName = '';
    customerAmount = 0;
    formGroup: FormGroup = null;

    constructor(){
        let _builder = new FormBuilder();
        this.formGroup = _builder.group({});
        this.formGroup.addControl("CustomerNameControl", new FormControl('', Validators.required));

        let validationCollection = [];
        validationCollection.push(Validators.required, Validators.pattern("^[0-9]{4,4}$"));
        this.formGroup.addControl("CustomerCodeControl", new FormControl('', Validators.compose(validationCollection)));

        this.formGroup.addControl("CustomerAmountControl", new FormControl('', Validators.pattern("[0-9]*")));
    }
}
