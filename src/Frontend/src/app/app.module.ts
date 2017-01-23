import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// feature modules
import { HomeModule } from './home/home.module';
import { AuthModule } from './shared/auth/auth.module';
import { AlertModule } from './shared/alert/alert.module';
import { DataModule } from './shared/data/data.module';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoadingDotsComponent } from './shared/ui/loading-dots/loading-dots.component';

// app settings
import { AppSettings } from './app-settings';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingDotsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HomeModule,
    AuthModule,
    AlertModule,
    DataModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [AppSettings]
})
export class AppModule { }
