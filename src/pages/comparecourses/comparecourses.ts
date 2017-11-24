import { NgForm } from '@angular/forms';
import { UserService } from './../../service/userservice';
import { Courses } from './../../models/courses';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-comparecourses',
  templateUrl: 'comparecourses.html'
})
export class ComparecoursesPage implements OnInit {

  selectOptions : string[] = ['B.Tech','B.A','B.S.C'];
  courses: Courses[] = [];
  showCompareTabel = false;
  firstCourse: any;
  secondCourse:any;
  ngOnInit(){
    const loading = this.loadingCtrl.create({
      content:'Loading courses'
    });
    loading.present();
    this.userservice.getCourses().subscribe(
      (list: Courses[]) => {
        loading.dismiss();
        if(list){
          
          this.courses = list;
          console.log(list);
        }
        else{

        }
      }
    );
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController,
  private userservice:UserService, private loadingCtrl: LoadingController) {}



 onOpenMenu(){
   this.menuCtrl.open();
 }

 compareCourse(firstCourse:any,secondCourse:any){
   console.log(firstCourse);
   this.firstCourse = firstCourse;
   console.log(secondCourse);
   this.secondCourse = secondCourse;
   this.showCompareTabel = true;
 }

}
