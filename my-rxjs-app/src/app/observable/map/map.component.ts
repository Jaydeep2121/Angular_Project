import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { ServiceService } from 'src/app/app-service/service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  subscr: Subscription | undefined;
  Msg1: string = '';
  subscr1: Subscription | undefined;
  Msg2: string = '';
  subscr2: Subscription | undefined;
  constructor(private serv:ServiceService) {}

  ngOnInit(): void {
    const broadcastVideo = interval(1000);
    // Ex-01
    this.subscr = broadcastVideo
      .pipe(map((data: any) => 'Video ' + (data + 1)))
      .subscribe((val: any) => (this.Msg1 = val));
    setTimeout(() => {
      this.subscr?.unsubscribe();
    }, 10000);

    // Ex-02
    this.subscr1 = broadcastVideo
      .pipe(map((data: any) => data * 10))
      .subscribe((val: any) => (this.Msg2 = val));
    setTimeout(() => {
      this.subscr1?.unsubscribe();
    }, 10000);

    //Ex-03
    const users = from([
      { id: 101, name: 'Rajesh' },
      { id: 102, name: 'Manish' },
      { id: 103, name: 'Pratik' },
      { id: 104, name: 'Kapil' },
      { id: 105, name: 'Vivek' },
      { id: 106, name: 'Ankit' },
    ]);
    this.subscr2 = users
      .pipe(map((data: any) => data.name))
      .subscribe((res) => {
        this.serv.print('elementAdd',res);
      });
  }
}
