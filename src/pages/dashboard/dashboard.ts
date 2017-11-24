import { CompareuniversityPage } from './../compareuniversity/compareuniversity';
import { ActivityplatformPage } from './../activityplatform/activityplatform';
import { KnowledgeplatformPage } from './../knowledgeplatform/knowledgeplatform';
import { ComparecoursesPage } from './../comparecourses/comparecourses';
import { ListfacultyPage } from './../listfaculty/listfaculty';
import { ListuniversityPage } from './../listuniversity/listuniversity';
import { ListcoursesPage } from './../listcourses/listcourses';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  listCourses = ListcoursesPage;
  listUniversity = ListuniversityPage;
  listFaculty = ListfacultyPage;
  compareCourse = ComparecoursesPage;
  knowledgePage = KnowledgeplatformPage;
  activityPage = ActivityplatformPage;
  compareUniveristy = CompareuniversityPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController) {}



 onOpenMenu(){
   this.menuCtrl.open();
 }

 onLoad(page:any){
   this.navCtrl.setRoot(page);
 }

}
