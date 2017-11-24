import { UserService } from './../../service/userservice';
import { DashboardPage } from './../dashboard/dashboard';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  dashboardPage = DashboardPage;

  constructor(public navCtrl: NavController,  private userservice:UserService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSignin(form: NgForm){
    
  }

}
