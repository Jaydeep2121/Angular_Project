import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path:'promise',component:PromiseComponent},
  {path:'obser',component:ObservableComponent,children:[
    {path:'',component:ListComponent},
    {path:'fromEvent',component:FromEventComponent},
    {path:'intervl',component:IntervalComponent}
  ]},
  {path:'**',redirectTo:'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
