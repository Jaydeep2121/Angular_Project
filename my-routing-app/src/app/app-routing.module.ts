import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from "./error-page/error-page.component";
// import { AuthGuard } from "./auth-guard-service";

const appRoutes:Routes = [
  { path:'', component:HomeComponent },
  { path:'users', component:UsersComponent },
  { path:'users/:id/:name', component:UserComponent },
  { path:'servers' , component:ServersComponent,children:[
    { path:':id/edit', component:EditServerComponent }
  ] },
  // {path:'not-found',component:PageNotFoundComponent},
  {path:'not-found',component:ErrorPageComponent,data:{message:'page not found!'}},
  {path:'**',redirectTo:'/not-found'} //add at the end
];
@NgModule({
  imports:[
    // RouterModule.forRoot(appRoutes,{useHash:true})
    RouterModule.forRoot(appRoutes)

  ],
  exports:[RouterModule]
})
export class AppRoutingModule{

}