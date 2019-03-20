import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { List } from '../list';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {
  @Input() list:List;
  @Output() isComplete= new EventEmitter<boolean>();
  activityComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }


  ngOnInit() {
  }

}
