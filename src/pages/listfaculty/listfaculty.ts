import { UserService } from './../../service/userservice';
import { Faculty } from './../../models/faculty';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';

/*
  Generated class for the Listfaculty page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-listfaculty',
  templateUrl: 'listfaculty.html'
})
export class ListfacultyPage implements OnInit {

  faculty: Faculty[] = [];
  loadedFaculty: Faculty[] = [];

  ngOnInit(){
    const loading = this.loadingCtrl.create({
      content:'Loading Faculty'
    });
    loading.present();
    this.userservice.getFaculty().subscribe(
      (list: Faculty[]) => {
        loading.dismiss();
        if(list){
          this.faculty = list;
          this.loadedFaculty = list;
          console.log(list);
        }
        else{

        }
      }
    )
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
   private menuCtrl:MenuController, private loadingCtrl:LoadingController, private userservice: UserService) {}



 onOpenMenu(){
   this.menuCtrl.open();
 }

  initializeItems(): void {
  this.faculty = this.loadedFaculty;
}

 getItems(searchBar){
   console.log("here",this.faculty);
   this.initializeItems();
   var q = searchBar.srcElement.value;

   if(!q){
     return;
   }

   this.faculty = this.faculty.filter((v) => {
    if(v.faculty_name && q){
      if(v.faculty_name.toLowerCase().indexOf(q.toLowerCase()) > -1){
        return true;
      }
      return false;
    }
   });
   console.log(q,this.faculty.length);
 }

}
