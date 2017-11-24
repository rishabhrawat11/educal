import { UserService } from './../../service/userservice';
import { University } from './../../models/university';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';


@Component({
  selector: 'page-compareuniversity',
  templateUrl: 'compareuniversity.html'
})
export class CompareuniversityPage implements OnInit {

  university: University[] = [];

  firstUniversity: string;
  secondUniversity: string;
  showCompareTabel: boolean = false;

  ngOnInit(){
    const loading = this.loadingCtrl.create({
      content:'Loading'
    });
    loading.present();
    this.userservice.getUniversity().subscribe(
      (list: University[]) => {
        loading.dismiss();
        if(list){
          this.university = list;
          console.log(list);
        }
        else{

        }
      }
    );
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
   private userservice:UserService, private loadingCtrl: LoadingController, private menuCtrl:MenuController) {}

  onOpenMenu(){
   this.menuCtrl.open();
 }

 compareUniversity(firstUniversity:string, secondUniversity:string){
   this.firstUniversity = firstUniversity;
   console.log(this.firstUniversity);
   this.secondUniversity = secondUniversity;
   this.showCompareTabel = true;
 }

}
