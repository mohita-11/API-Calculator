import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, NgModel  } from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  
  constructor(private formBuilder: FormBuilder) { }

  checkoutForm= this.formBuilder.group({
    email: '',
    password: ''
  });

  public onSubmit(): void {
    // Process checkout data here

    alert(this.checkoutForm.value.email);
    
  }

  ngOnInit(): void {
  }

}
