import { NgModule } from "@angular/core";
import { RouterModule, Routes, ExtraOptions } from "@angular/router";

export const routes: Routes = [
  // Your routes here
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: "enabled", // Restores the scroll position to the anchor
  anchorScrolling: "enabled", // Enables anchor link scrolling
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
class AppRoutingModule {}
