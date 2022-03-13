import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    console.log(this.route.snapshot.fragment);
  }

}
