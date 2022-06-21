import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css'],
})
export class PluckComponent implements OnInit {
  data: any;
  data1:any;
  constructor() {}
  users = from([
    { 
      name: 'Ramesh', 
      skills: 'Html/Css',
      job:{
        title:'frontEnd Developer',
        salary:100000
      } 
    },
    { 
      name: 'Prakash', 
      skills: 'Angular',
      job:{
        title:'JavaScript Developer',
        salary:200000
      } 
    },
    { 
      name: 'Dharmesh',
      skills: 'VueJs',
      job:{
        title:'UI Developer',
        salary:90000
      } 
    },
    { 
      name: 'ravi', 
      skills: 'React',
      job:{
        title:'React Developer',
        salary:500000
      } 
    },
    { 
      name: 'harsh', 
      skills: 'ReactNative',
      job:{
        title:'App Developer',
        salary:300000
      } 
    },
  ]);
  ngOnInit(): void {
    //Ex-01
    this.users.pipe(pluck('name'), toArray()).subscribe((val) => {
      this.data = val;
    });
    //Ex-02
    this.users.pipe(pluck('job','title'), toArray()).subscribe((val) => {
      this.data1 = val;
    });
  }
}
