import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {TimeslineComponent} from './timesline/timesline.component';


const routes: Routes = [{
  path: 'timesline',
  component: TimeslineComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
