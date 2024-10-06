import { NgModule } from "@angular/core";
import { RouterModule, Routes, ExtraOptions } from "@angular/router";

const routes: Routes = [];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: "enabled", // Restores the scroll position to the anchor
  anchorScrolling: "enabled", // Enables anchor link scrolling
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
