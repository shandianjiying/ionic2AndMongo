import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/modals/login/login';
import { Register } from '../pages/modals/register/register';
import { UserDetail } from '../pages/userDetail/userDetail';
import { ConfigService } from '../services/ConfigService';
import { GlobalVarsService } from '../services/GlobalVarService';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    Register,
    UserDetail
    // ConfigService
    // HttpService
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    Register,
    UserDetail
  ],
  providers: [ConfigService,GlobalVarsService]
})
export class AppModule {}
