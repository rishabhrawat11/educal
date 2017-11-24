import { NgForm } from '@angular/forms';
import { Courses } from './../../models/courses';
import { UserService } from './../../service/userservice';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController, AlertController, LoadingController } from 'ionic-angular';
import 'rxjs/Rx';
import firebase from 'firebase';
/*
  Generated class for the Listcourses page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-listcourses',
  templateUrl: 'listcourses.html'
})
export class ListcoursesPage implements OnInit {
  courses: Courses[] = [];
  loadedCourses: Courses[] = [];
  constructor(public navCtrl: NavController, private menuCtrl: MenuController, private userservice: UserService
  , private alertCtrl:AlertController, private loadingCtrl: LoadingController) {}

  ngOnInit(){
    const loading = this.loadingCtrl.create({
      content:'Loading courses'
    });
    loading.present();
    this.userservice.getCourses().subscribe(
      (list: Courses[]) => {
        loading.dismiss();
        if(list){
          this.loadedCourses = list;
          this.courses = list;
          console.log(list);
        }
        else{

        }
      }
    );

    

  }

  onOpenMenu(){
   this.menuCtrl.open();
 }

 onSearch(form: NgForm){
   console.log(form);
 }

 initializeItems(): void {
  this.courses = this.loadedCourses;
}

 getItems(searchBar){
   console.log("here",this.courses);
   this.initializeItems();
   var q = searchBar.srcElement.value;

   if(!q){
     return;
   }

   this.courses = this.courses.filter((v) => {
    if(v.course_name && q){
      if(v.course_name.toLowerCase().indexOf(q.toLowerCase()) > -1){
        return true;
      }
      return false;
    }
   });
   console.log(q,this.courses.length);
 }
}
