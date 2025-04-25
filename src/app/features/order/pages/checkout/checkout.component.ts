import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  shippingForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder,private orders:OrdersService,private router:Router) {
    this.shippingForm = this.fb.group({
      street: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      city: ['', Validators.required],
      lat: ['', Validators.required],
      long: ['', Validators.required],
    });
  }

  submitOrder(paymentType: 'cash' | 'checkout') {
    if (this.shippingForm.invalid) {
      this.shippingForm.markAllAsTouched();
      return;
    }

    const payload = {
      shippingAddress: this.shippingForm.value,
    };

    this.isSubmitting = true;
    if(paymentType == 'cash'){
      this.orders.cashOrder(payload).subscribe({
        next: (res) => {
          console.log('Order submitted:', res);
          this.isSubmitting = false;
          this.router.navigate(['/allOrders'])
        },
        error: (err) => {
          console.error('Error:', err);
          this.isSubmitting = false;
        },
      });
    }else if(paymentType == 'checkout'){
      console.log('hi')
      this.orders.checkOut(payload).subscribe({
        next: (res) => {
          this.isSubmitting = false;
          console.log(res)
          window.location.href=res.session.url;
        },
        error: (err) => {
          console.error('Error:', err);
          this.isSubmitting = false;
        },
      });
    }



  }
}
