import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GloblErrorHandlerService } from './exception/globl-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // add provider for global error handler service

    { provide: ErrorHandler, useClass: GloblErrorHandlerService}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
