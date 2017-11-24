import { CompareuniversityPage } from './../pages/compareuniversity/compareuniversity';
import { ActivityplatformPage } from './../pages/activityplatform/activityplatform';
import { KnowledgeplatformPage } from './../pages/knowledgeplatform/knowledgeplatform';
import { UserService } from './../service/userservice';
import { ContactPage } from './../pages/contact/contact';
import { AboutusPage } from './../pages/aboutus/aboutus';
import { ComparecoursesPage } from './../pages/comparecourses/comparecourses';
import { ListfacultyPage } from './../pages/listfaculty/listfaculty';
import { ListuniversityPage } from './../pages/listuniversity/listuniversity';
import { ListcoursesPage } from './../pages/listcourses/listcourses';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    ListcoursesPage,
    ListuniversityPage,
    ListfacultyPage,
    ComparecoursesPage,
    AboutusPage,
    ContactPage,
    KnowledgeplatformPage,
    ActivityplatformPage,
    CompareuniversityPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    ListcoursesPage,
    ListuniversityPage,
    ListfacultyPage,
    ComparecoursesPage,
    AboutusPage,
    ContactPage,
    KnowledgeplatformPage,
    ActivityplatformPage,
    CompareuniversityPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
