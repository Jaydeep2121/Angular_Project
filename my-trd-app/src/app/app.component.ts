import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverEle=[{type:'server',name:'TestServer',content:'just a test!'}];
  title = 'my-trd-app';

  onServerAdded(serverData:{ServerName:string, ServerContent:string}){
    this.serverEle.push({
      type:'server',
      name:serverData.ServerName,
      content:serverData.ServerContent
    });
  }
  onBlueServerAdded(bluedata:{ServerName:string, ServerContent:string}){
    this.serverEle.push({
      type:'blueprint',
      name:bluedata.ServerName,
      content:bluedata.ServerContent
    });
  }
}
