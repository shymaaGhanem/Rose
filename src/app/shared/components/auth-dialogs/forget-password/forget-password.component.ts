import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-forget-password',
  imports: [DialogModule,ButtonModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

  constructor(private ref: DynamicDialogRef) {}

  close() {
    this.ref.close();
  }

  send() {
    // handle email sending
    this.ref.close();
  }
  
}
