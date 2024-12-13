import { Component } from '@angular/core';
import { ToolbarService } from '../../services/toolbar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar-menu.component.html',
  styleUrl: './toolbar-menu.component.scss'
})
export class ToolbarMenuComponent {

    constructor(private toolbarService: ToolbarService){  }
    toolbarStatus: boolean = false;

  ngOnInit(): void {
    this.getToolbarStatus()
   }

   getToolbarStatus(){
    this.toolbarService.currentToolbar$.subscribe({
      next:(status) => {
        this.toolbarStatus = status;
      }
    })
   }
}
