import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css'],
})
export class ToArrayComponent implements OnInit {
  subsr: Subscription | undefined;
  users=[
    {name:'rakesh',skills:'HTML/CSS'},
    {name:'nayan',skills:'JS'},
    {name:'dharmesh',skills:'Sports,java'},
    {name:'pratik',skills:'Python'}
  ]
  constructor() {}
  ngOnInit(): void {
    //Ex-01
    const source = interval(1000);
    this.subsr = source.pipe(
      take(5),toArray()
    ).subscribe((res) => {
      // console.log('ex-1=> ',res);
    });

    //Ex-02
    const source1 = from(this.users);    
    source1.pipe(
      toArray()
    ).subscribe(res=>{
      // console.log(res)
    })

    //Ex-03
    const source2 = of('anup','rahul','tejas');
    source2.pipe(
      toArray()
    ).subscribe(res=>{
      // console.log(res)
    })
  }
}
