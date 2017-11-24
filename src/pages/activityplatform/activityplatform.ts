import { UserService } from './../../service/userservice';
import { Activity } from './../../models/activity';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import 'rxjs/Rx';


@Component({
  selector: 'page-activityplatform',
  templateUrl: 'activityplatform.html'
})
export class ActivityplatformPage implements OnInit {

  activity: Activity [] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController, public userservice:UserService,
   public loadingCtrl:LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityplatformPage');
  }

  ngOnInit(){
    const loading = this.loadingCtrl.create({
      content:'Loading activities'
    });
    loading.present();
    this.userservice.getActivity().subscribe(
      (list: Activity[]) =>{
        loading.dismiss();
        if(list){
          this.activity = list;
          console.log(list);
        }
        else{

        }
      }
    )
  }

   onOpenMenu(){
   this.menuCtrl.open();
 }


}
