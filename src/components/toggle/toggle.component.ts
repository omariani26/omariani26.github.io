import { Component } from "@angular/core";
import { NbToggleModule } from "@nebular/theme";
import { NgIf, CommonModule } from "@angular/common";
import { Input } from "@angular/core";

@Component({
  selector: "app-toggle",
  standalone: true,
  imports: [NbToggleModule, NgIf, CommonModule],
  templateUrl: "./toggle.component.html",
  styleUrl: "./toggle.component.css",
})
export class ToggleComponent {
  @Input() onContent: any; // Content to display when toggle is ON
  @Input() offContent: any;
  isToggled: boolean = false;

  onToggleChange(event: boolean) {
    this.isToggled = event;
  }
}
