import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NbActionsModule, NbIconConfig, NbThemeModule } from "@nebular/theme";
import { NbIconModule } from "@nebular/theme";
import { CommonModule } from "@angular/common";

@Component({
  selector: "nb-menu",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  templateUrl: "./menu.component.html",
  imports: [
    NbThemeModule,
    NbActionsModule,
    NbIconModule,
    NbIconModule,
    CommonModule,
  ],
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent {
  disabledIconConfig: NbIconConfig = {
    icon: "settings-2-outline",
    pack: "eva",
  };
  menuItems = [
    { name: "ABOUT" },
    { name: "SKILLS" },
    { name: "PROJECTS" },
    { name: "EXPERIENCE" },
  ];
}
