import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserData } from '../interface';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {
  private usersData: UserData[];
  constructor(private dataService: DataService) { }

  onUsersList(data) {
    this.usersData = data.data;
  }
  
  ngOnInit() {
    this.dataService.getUsers().subscribe(this.onUsersList.bind(this))
  }

}
