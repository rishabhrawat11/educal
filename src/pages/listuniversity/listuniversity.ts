import { University } from './../../models/university';
import { UserService } from './../../service/userservice';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import 'rxjs/Rx';

@Component({
  selector: 'page-listuniversity',
  templateUrl: 'listuniversity.html'
})
export class ListuniversityPage implements OnInit {
university: University[]=[];
loadedUniversity: University[] = [];
 constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController,private userservice:UserService, private loadingCtrl:LoadingController) {}

ngOnInit(){
  const loading = this.loadingCtrl.create({
      content:'Loading University'
    });
    loading.present();
    this.userservice.getUniversity().subscribe(
      (list: University[]) => {
        loading.dismiss();
        if(list){
          this.university = list;
          this.loadedUniversity = list;
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

  initializeItems(): void {
  this.university = this.loadedUniversity;
}

 getItems(searchBar){
   
   this.initializeItems();
   var q = searchBar.srcElement.value;

   if(!q){
     return;
   }

   this.university = this.university.filter((v) => {
    if(v.university_name && q){
      if(v.university_name.toLowerCase().indexOf(q.toLowerCase()) > -1){
        return true;
      }
      return false;
    }
   });
   console.log(q,this.university.length);
 }

}
