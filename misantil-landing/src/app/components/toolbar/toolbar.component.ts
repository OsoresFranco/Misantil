
import { Component } from '@angular/core';
import { ToolbarService } from '../../services/toolbar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  toolbarStatus: boolean = false;

  constructor(private toolbarService: ToolbarService) {}

  ngOnInit(): void {
    this.getToolbarStatus();
  }

  getToolbarStatus() {
    this.toolbarService.currentToolbar$.subscribe({
      next: (status) => {
        this.toolbarStatus = status;
      },
    });
  }

  setActive(): void {
    this.toolbarService.setToolbar(!this.toolbarStatus);
  }
}
