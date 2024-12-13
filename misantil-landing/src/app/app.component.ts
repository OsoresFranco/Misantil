import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { ToolbarMenuComponent } from "./components/toolbar-menu/toolbar-menu.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { MethodologyComponent } from "./components/methodology/methodology.component";
import { PlansComponent } from "./components/plans/plans.component";
import { NutritionComponent } from "./components/nutrition/nutrition.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, ToolbarMenuComponent, HeroComponent, AboutMeComponent, MethodologyComponent, PlansComponent, NutritionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'misantil-landing';
}
