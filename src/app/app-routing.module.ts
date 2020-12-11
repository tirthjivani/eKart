import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseListComponent } from './browse-list/browse-list.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component.ts';

const routes: Routes = [
  { path: '', redirectTo: '/browse', pathMatch: 'full' },
  { path: 'browse', component: BrowseListComponent },
  { path: 'cart', component: CartListComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  BrowseListComponent,
  CartListComponent,
  ContactUsComponent,
  PageNotFoundComponent,
];
