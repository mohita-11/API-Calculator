import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import axios from 'axios'; 

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

  public async onSubmit() {
    // Process checkout data here
    const data = await axios.post('http://localhost:3000/api/customers/send', {
      email: this.checkoutForm.value.email,
      password: this.checkoutForm.value.password
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    //alert(this.checkoutForm.value.email);
    
  }

  ngOnInit(): void {
  }

}
