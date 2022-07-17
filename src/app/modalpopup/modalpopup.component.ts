import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private Ref: MatDialogRef<ModalpopupComponent>) { }
  result: any;
  closemessage={name:"Test User"}

  ngOnInit(): void {
    this.result = this.data;
  }
  Closepopup() {
    this.Ref.close("Closing from function");
  }

}
