import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';



@Component({
    selector: 'save-as-modal-cont',
    templateUrl: 'save-as-modal-cont.component.html'
})
export class SaveAsModalContComponent {
    public filename: string;

    constructor(
        public dialogRef: MatDialogRef<SaveAsModalContComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}


    public save() {
        this.dialogRef.close(this.filename);
    }
}