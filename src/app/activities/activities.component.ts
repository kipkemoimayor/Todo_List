import { Component, OnInit } from '@angular/core';
import { List } from '../list';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activity=[
    new List(1,"Create an adroid app","This app will take in user input and store it",new Date(2019,0,25)),
    new List(2,"Travel to London","I will be visiting london ",new Date(2019,0,25)),
    new List(3,"Do the friday IP","Independent Project is the full name",new Date(2019,0,25)),
    new List(4,"Attend an Interview","Safaricom software engineering Position",new Date(2019,0,25)),
    new List(5,"Take a holiday","Plan to visit Nairobi naitional Park",new Date(2019,0,25))
  ]
  toogleDetails(index){
    this.activity[index].showDescription=!this.activity[index].showDescription;

  }
  completeActivity(isComplete,index){
    if(true){
      let toDelete=confirm(`Are you sure you want to delete ${this.activity[index].title}`);
      if(toDelete){
        this.activity.splice(index,1);
      }
    }

  }

  addNewList(list){
    let listLength=this.activity.length;
    list.id=listLength+1;
    list.date=new Date(list.date)
    this.activity.push(list)
  }


  constructor() { }

  ngOnInit() {
  }

}
