import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  //selector:'[app-servers]' another way of defining the component in selector,
  //what written in app-server part
  //template:
    //<app-server></app-server>
    //<app-server></app-server>
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{ 
  allowNewServer = false;
  ServerCreationStatus = 'No server was created as of now';
  ServerName='Test basic App';
  ServerStatus = false;
  servers=['TestServer1','TestServer2'];
  constructor(){
    setTimeout(()=>this.allowNewServer = true,3000);
  }
  ngOnInit() {
  }
  onCreateServer() {
    this.ServerStatus = true;
    this.servers.push(this.ServerName);
    this.ServerCreationStatus = 'Server was created! Name is ' + this.ServerName;
  }
}
