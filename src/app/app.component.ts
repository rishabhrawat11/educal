import { CompareuniversityPage } from './../pages/compareuniversity/compareuniversity';
import { UserService } from './../service/userservice';
import { ActivityplatformPage } from './../pages/activityplatform/activityplatform';
import { KnowledgeplatformPage } from './../pages/knowledgeplatform/knowledgeplatform';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { ComparecoursesPage } from './../pages/comparecourses/comparecourses';
import { ListfacultyPage } from './../pages/listfaculty/listfaculty';
import { ListuniversityPage } from './../pages/listuniversity/listuniversity';
import { ListcoursesPage } from './../pages/listcourses/listcourses';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = DashboardPage;
  listCourses = ListcoursesPage;
  listUniversity = ListuniversityPage;
  listFaculty = ListfacultyPage;
  compareCourse = ComparecoursesPage;
  compareUniversity = CompareuniversityPage;
  dashboard = DashboardPage;
  knowledgePage = KnowledgeplatformPage;
  activityPage = ActivityplatformPage;
  isAuthenticated = false;

  @ViewChild('nav') nav: NavController
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl:MenuController,private userservice:UserService) {

    firebase.initializeApp({
      apiKey:"AIzaSyBgoDNIHEqawOqrdwglJuw7bJSxEFqaJoo",
      authDomain:"educal-865eb.firebaseapp.com",
      databaseURL:"https://educal-865eb.firebaseio.com"
    });

    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page:any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

 
}
