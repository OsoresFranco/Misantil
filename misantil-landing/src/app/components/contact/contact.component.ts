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
    // Construct the WhatsApp message
    const whatsappMessage = `Hola, mi nombre es ${this.contactData.name}
    Telefono: ${this.contactData.phone}
    Mail: ${this.contactData.email}
    Mensaje: ${this.contactData.message}`;

    // Encode the message to be URL-safe
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp URL with the encoded message
    const whatsappUrl = `https://wa.me/5493816506456?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  }
}
