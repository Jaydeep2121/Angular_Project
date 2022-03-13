import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class UserService{
    // activatEmitter = new EventEmitter<boolean>();
    activatEmitter = new Subject<boolean>();
}