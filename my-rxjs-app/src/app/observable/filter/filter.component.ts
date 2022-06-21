import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  data: any;
  data1: any;
  data2:any;
  constructor() {}
  users = from([
    {
      id: 1,
      name: 'Ramesh',
      gender: 'male',
    },
    {
      id: 2,
      name: 'pratik',
      gender: 'male',
    },
    {
      id: 3,
      name: 'priyanka',
      gender: 'female',
    },
    {
      id: 4,
      name: 'mohan',
      gender: 'male',
    },
    {
      id: 5,
      name: 'Dharmesh',
      gender: 'male',
    },
    {
      id: 6,
      name: 'ishita',
      gender: 'female',
    },
    {
      id: 7,
      name: 'priya',
      gender: 'female',
    },
    {
      id: 8,
      name: 'priya',
      gender: 'female',
    },
    {
      id: 9,
      name: 'rohan',
      gender: 'male',
    },
    {
      id: 10,
      name: 'jitesh',
      gender: 'male',
    },
  ]);
  ngOnInit(): void {
    //Ex-01
    this.users
      .pipe(
        filter((data: any) => data.name.length > 5),
        toArray()
      )
      .subscribe((res: any) => {
        this.data=res
      });

    //Ex-02
    this.users
    .pipe(
      filter((data: any) => data.gender == 'male'),
      toArray()
    )
    .subscribe((res: any) => {
      this.data1=res
    });
    
    //Ex-03
    this.users
    .pipe(
      filter((data: any) => data.id <= 8),
      toArray()
    )
    .subscribe((res: any) => {
      this.data2=res
    });
  }
}
