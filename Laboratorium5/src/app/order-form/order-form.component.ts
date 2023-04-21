import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OrderForm } from './order-form.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  order!: FormGroup<OrderForm>
  subFormValue!: Subscription
  subFormStatus!: Subscription
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.order = this.fb.nonNullable.group({
      name: '',
      surname: '',
      address: ''
    })

    this.subFormValue = this.order.valueChanges.subscribe(data => console.log(data))
    this.subFormStatus = this.order.statusChanges.subscribe(data => console.log('Status: ', data))
  }

  onSubmit(){
    console.log(this.order.value)
  }

}
