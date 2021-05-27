import { Component, OnInit } from '@angular/core';
import {format} from "date-fns";
declare var window;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  
  date:string="";
 
  constructor() { }

  ngOnInit() {
    
    // get current date
    this.showDate();
  
  }

  // close modal
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    window.reports.dismissModal();
   
  }

  // get date meyhod
  showDate(){
   this.date = new Date().toString()
    format(new Date(this.date), "dd-MM-yyyy");
    this.date = this.date.split(' ').slice(0, 4).join(' ');
    console.log("Current Date ",this.date);
  }

}
