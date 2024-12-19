import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  contactData = {
    name: '',
    phone: '',
    email: '',
    message: '',
  };

  onSubmit() {
    const whatsappMessage = `Hola, mi nombre es ${this.contactData.name}
    Telefono: ${this.contactData.phone}
    Mail: ${this.contactData.email}
    Mensaje: ${this.contactData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappUrl = `https://wa.me/5493816506456?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  }
}
