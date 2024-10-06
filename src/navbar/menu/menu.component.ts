import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NbActionsModule, NbIconConfig, NbThemeModule } from "@nebular/theme";

@Component({
  selector: "nb-menu",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  templateUrl: "./menu.component.html",
  imports: [NbThemeModule, NbActionsModule],
  styleUrl: "./menu.component.css",
})
export class MenuComponent {
  disabledIconConfig: NbIconConfig = {
    icon: "settings-2-outline",
    pack: "eva",
  };
}
