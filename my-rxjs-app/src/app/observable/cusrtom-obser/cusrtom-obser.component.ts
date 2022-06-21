import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ServiceService } from 'src/app/app-service/service.service';

@Component({
  selector: 'app-cusrtom-obser',
  templateUrl: './cusrtom-obser.component.html',
  styleUrls: ['./cusrtom-obser.component.css'],
})
export class CusrtomObserComponent implements OnInit,OnDestroy {
  techStatus : string ='';
  techStatus2: string ='';
  subs2:Subscription | undefined;
  names: string ='';
  nameStatus: string ='';
  constructor(private serv: ServiceService) {}

  ngOnInit(): void {
    // Ex-01 (Manual)
    const cusObs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('TypeSript');
      }, 2000);
      setTimeout(() => {
        observer.next('Html/Css');
        observer.error(new Error('limit exceed'));
      }, 3000);
      setTimeout(() => {
        observer.next('Jquery');
      }, 4000);
      setTimeout(() => {
        observer.next('JavaScript');
        observer.complete();
      }, 5000);
    });
    cusObs1.subscribe(
      (res: any) => {
        this.serv.print('elContainer', res);
      },
      (error: any) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
    );

      // Ex-02 (Custom Observable)
      const Arr=['Angular','JavaScript','Html','Css','TypeScript'];
      const cusObs2 = Observable.create((observer: any) => {
        let count=0;
          setInterval(() => {
            observer.next(Arr[count++]);
            if (count>=5) {
              observer.complete();
            }
          }, 1000)
      });
      cusObs2.subscribe(
        (res: any) => {
          this.serv.print('elContainer1', res);
        },
        (error: any) => {
          this.techStatus2 = 'error';
        },
        () => {
          this.techStatus2 = 'completed';
        }
      );

      // Ex-03 (Custom Names)
      const Arr1=['Anup','Shekhar','Sharma','Dharmesh','kapil'];
      const cusObs3 = Observable.create((observer: any) => {
        let count=0;
          setInterval(() => {
            observer.next(Arr1[count++]);
            // if (count>=3) {
            //   observer.error(new Error('names limit exceed'));
            // }
            if (count>=5) {
              observer.complete();
            }
          }, 1000)
      });
      cusObs3.subscribe((res:any)=>{
        this.names=res;
      },
      (error: any) => {
        this.nameStatus = 'error';
      },
      () => {
        this.nameStatus = 'completed';
      });
    }  
    ngOnDestroy(): void {
        this.subs2?.unsubscribe();
    }
}
