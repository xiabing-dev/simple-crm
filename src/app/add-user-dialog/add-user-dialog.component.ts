import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {

  user: User =  new User();
  birthDate?: Date;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<AddUserDialogComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  save(): void {
    this.user.birthDate = this.birthDate ? this.birthDate.getTime() : 0;
    //console.log(this.user);
    this.loading = true;
    this.firestore.collection('users').add(this.user.toJSON()).then(
      (result:any) => {
        console.log('Add user : ', result);
        this.loading = false;
        this.dialogRef.close();
      }
    );
  }

}
