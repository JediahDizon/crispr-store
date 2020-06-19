import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
	selector: 'app-product-dialog',
	templateUrl: './product-dialog.component.html',
	styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent {

	constructor(
		public dialogRef: MatDialogRef<ProductDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data) { }

	onNoClick(): void {
		this.dialogRef.close();
	}
}
