import { Component, Input } from "@angular/core";
import { NbLayoutModule } from "@nebular/theme";

@Component({
  selector: "app-nb-layout",
  standalone: true,
  imports: [NbLayoutModule],
  templateUrl: "./layout.component.html",
})
export class LayoutComponent {
  @Input() header: string = "Default Header"; // Default header text
  @Input() footer: string = "Default Footer"; // Default footer text
}
