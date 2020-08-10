import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const firebaseConfig = {
  apiKey: "AIzaSyC4aC_rNJzr-qlaUU33m-Nu7HMGy0G6Rc4",
  authDomain: "ewallet-b99df.firebaseapp.com",
  databaseURL: "https://ewallet-b99df.firebaseio.com",
  projectId: "ewallet-b99df",
  storageBucket: "ewallet-b99df.appspot.com",
  messagingSenderId: "669019117785",
  appId: "1:669019117785:web:731d77ba65691f7e4c06c8"
};

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
