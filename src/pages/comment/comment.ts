import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Dish } from '../../shared/dish';



/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  comment: FormGroup;
  

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl: ViewController,
     private formBuilder: FormBuilder) {
      this.comment = this.formBuilder.group({
        author: '',
        rating: 1,
        comment: '',
        date : new Date()
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  onSubmit() {
    console.log(this.comment.value);    
    this.viewCtrl.dismiss(this.comment.value);
  }

}
