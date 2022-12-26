import { NgModule } from "@angular/core";
import { SandpitRoutingModule } from "./sandpit-routing.module";
import { SandpitComponent } from "./sandpit.component";

@NgModule({
    imports: [SandpitRoutingModule],
    declarations: [SandpitComponent]
  })
  export class SandpitModule { }