import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansComponent {
  items = [
    {
      title: 'Entrenamiento personalizado presencial',
      description: `<p>Objetivos Orientados: salud, estética corporal, rendimiento deportivo.</p> <p>Optimización de las Variables de programación del Entrenamiento.</p> <p>Horario y Lugar a coordinar (San Miguel deTucumán - Yerba Buena).</p> <p>Atención por cupos reducidos.<br> Control y valoración mensual de progresos en base a los objetivos.</p> <p>Estrategias nutricionales según objetivos planteados (opcional).</p> <p>Asesoramiento en suplementación (opcional).</p>`,
    },
    {
      title: 'Entrenamiento personalizado online',
      description:
        '<p>Objetivos: salud, estética corporal, rendimiento deportivo.</p><p>Optimizacion de las Variables del Entrenamiento periódicamente.</p><p>⁠Encuentro por video llamada una vez por mes, para revisión y análisis del proceso.</p><p>Resolución de consultas, por WhatsApp.</p><p>Control y valoración mensual de progresos en base a los objetivos.</p><p>Soporte en video de los ejercicios seleccionados para tu planificación.</p><p>Estrategias nutricionales según objetivos planteados (opcional).</p><p>Asesoramiento en  suplementación (opcional).</p>',
    },
    {
      title: 'Modalidad híbrida (online + presencial)',
      description:
        '<p>El servicio combina la flexibilidad del seguimiento online y la guía de sesiones presencial.</p> <p>Supervisión periódica en gimnasios y/o lugares acondicionados para entrenamientos con sobrecarga (San Miguel de Tucumán - Yerba Buena).</p><p>Optimización de las Variables del Entrenamiento.</p><p>Control y valoración mensual de progresos en base a los objetivos.</p><p>⁠Soporte en video de los ejercicios seleccionados en tu programa.</p><p>Estrategias nutricionales según objetivos planteados (opcional).</p><p>⁠Asesoramiento en  suplementación (opcional).</p>',
    },
  ];
}
