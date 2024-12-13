import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './methodology.component.html',
  styleUrl: './methodology.component.scss',
})
export class MethodologyComponent {
  items = [
    {
      icon: 'icons/method1.svg',
      title: 'Evaluación Inicial',
      description:
        'Realizamos un análisis completo de tu condición física, historial de entrenamiento y objetivos para desarrollar un plan adecuado.',
    },
    {
      icon: 'icons/method2.svg',
      title: 'Asesoría Continua',
      description:
        'Te acompañaré en cada etapa de tu proceso con los ajustes necesarios en tu plan de entrenamiento, buscando una progresión constante. ',
    },
    {
      icon: 'icons/method3.svg',
      title: 'Control de tu progreso',
      description:
        'Control y valoración mensual de tus progresos, en base a los objetivos planteados al inicio del plan de entrenamiento.',
    },
    {
      icon: 'icons/method4.svg',
      title: 'Enfoque científico',
      description:
        'Mi formación me permite guiarte mediante estrategias seguras y basadas en evidencia científica. ',
    },
    {
      icon: 'icons/method5.svg',
      title: 'Soporte en video de ejercicios',
      description:
        'Obtendrás tutoriales en video para que puedas realizar los ejercicios correctamente y con seguridad.',
    },
    {
      icon: 'icons/method6.svg',
      title: 'Feedback continuo',
      description:
        'Retroalimentación directa de las variables del entrenamiento y devolución de aspectos técnicos de los ejercicios que realizas. ',
    },
  ];
}
