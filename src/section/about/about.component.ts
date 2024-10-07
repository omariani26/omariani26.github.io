import { Component } from '@angular/core';
import { ToggleComponent } from "../../components/toggle/toggle.component";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [ToggleComponent],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {}
