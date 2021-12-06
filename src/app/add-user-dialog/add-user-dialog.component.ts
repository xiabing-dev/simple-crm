import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.class';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {

  user: User =  new User();
  birthDate?: Date;

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    this.user.birthDate = this.birthDate ? this.birthDate.getTime() : 0;
    console.log(this.user);
  }

}
