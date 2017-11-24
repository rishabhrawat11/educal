import { UserService } from './../../service/userservice';
import { KnowledgePlatform } from './../../models/knowledgeplatform';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';

/*
  Generated class for the Knowledgeplatform page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-knowledgeplatform',
  templateUrl: 'knowledgeplatform.html'
})
export class KnowledgeplatformPage implements OnInit {

  query: KnowledgePlatform[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController,
    public userservice: UserService, private loadingCtrl: LoadingController) { }



  onOpenMenu() {
    this.menuCtrl.open();
  }

  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content: 'Loading posts'
    });
    loading.present();
    this.userservice.getPost().subscribe(
      (list: KnowledgePlatform[]) => {
        loading.dismiss();
        if (list) {
          
          let json = list;
          let objs = Object.keys(json).map(key => json[key]);
          console.log(objs);
          this.query = objs;

        }
        else {

        }
      }
    );
  }

  onSave(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content:'Posting...'
    });
    loading.present();
    console.log(form);
    let post = form.value.query;
    this.userservice.addPost(form.value.query)
      .subscribe(
      (data: any) => {
        loading.dismiss();
        console.log(data);
        let query = {'query':post};
        this.query.push(query);
      
        console.log(query);
      },
      error => {
        alert(error.json().error);
      }
      )


    form.reset();

  }

  addComment(index: number, form: NgForm) {
    console.log(form);
    this.query[index].comments = this.query[index].comments || []
    this.query[index].comments.push(form.value.comment);
    form.reset();
  }


}
