import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
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
