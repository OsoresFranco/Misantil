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
      description: `<div>Objetivos Orientados: salud, estética corporal, rendimiento deportivo.</div> <div>Optimización de las Variables de programación del Entrenamiento.</div> <div>Horario y Lugar a coordinar (San Miguel deTucumán - Yerba Buena).</div> <div>Atención por cupos reducidos.<br> Control y valoración mensual de progresos en base a los objetivos.</div> <div>Estrategias nutricionales según objetivos planteados (opcional).</div> <div>Asesoramiento en suplementación (opcional).</div>`,
    },
    {
      title: 'Entrenamiento personalizado online',
      description:
        '<div>Objetivos: salud, estética corporal, rendimiento deportivo.</div><div>Optimizacion de las Variables del Entrenamiento periódicamente.</div><div>⁠Encuentro por video llamada una vez por mes, para revisión y análisis del proceso.</div><div>Resolución de consultas, por WhatsApp.</div><div>Control y valoración mensual de progresos en base a los objetivos.</div><div>Soporte en video de los ejercicios seleccionados para tu planificación.</div><div>Estrategias nutricionales según objetivos planteados (opcional).</div><div>Asesoramiento en  suplementación (opcional).</div>',
    },
    {
      title: 'Modalidad híbrida (online + presencial)',
      description:
        '<div>El servicio combina la flexibilidad del seguimiento online y la guía de sesiones presencial.</div> <div>Supervisión periódica en gimnasios y/o lugares acondicionados para entrenamientos con sobrecarga (San Miguel de Tucumán - Yerba Buena).</div><div>Optimización de las Variables del Entrenamiento.</div><div>Control y valoración mensual de progresos en base a los objetivos.</div><div>⁠Soporte en video de los ejercicios seleccionados en tu programa.</div><div>Estrategias nutricionales según objetivos planteados (opcional).</div><div>⁠Asesoramiento en  suplementación (opcional).</div>',
    },
  ];
}
