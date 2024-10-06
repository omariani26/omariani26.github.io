import { Component, Input } from "@angular/core";
import { NbLayoutModule } from "@nebular/theme";
import { AboutComponent } from "../section/about/about.component";
import { SkillsComponent } from "../section/skills/skills.component";
import { ProjectsComponent } from "../section/projects/projects.component";
import { ExperienceComponent } from "../section/experience/experience.component";

@Component({
  selector: "app-nb-layout",
  standalone: true,
  imports: [
    NbLayoutModule,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
  ],
  templateUrl: "./layout.component.html",
})
export class LayoutComponent {
  @Input() header: string = "Default Header"; // Default header text
  @Input() footer: string = "Default Footer"; // Default footer text
}
