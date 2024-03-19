import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

const routes: Routes = [
  // add path for home component
  // add path for wishlist component
  // add path for home component as default

  { path: 'home', component: HomeComponent },
  { path: 'wishlist', component: WishListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
