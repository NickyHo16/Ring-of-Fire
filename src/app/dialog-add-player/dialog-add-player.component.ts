import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { _MatInternalFormField } from '@angular/material/core';
import { MatDialog, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent, MatDialogModule, _MatInternalFormField, FormsModule, MatButtonModule, MatInputModule,MatFormFieldModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {

name:string='';

constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {}


onNoClick(){
  this.dialogRef.close();
}

}

