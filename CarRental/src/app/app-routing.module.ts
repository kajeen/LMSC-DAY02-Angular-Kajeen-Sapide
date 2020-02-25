import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarlistComponent } from './carlist/carlist.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [{
    path: "", component:CarlistComponent
  },{

    path: "contact", component:ContactComponent

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
