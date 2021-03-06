import { Component, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import * as _ from 'lodash';

@Component({
	selector: 'app-product-dialog',
	templateUrl: './product-dialog.component.html',
	styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent {
	@ViewChild(MatAccordion) accordion: MatAccordion;
	_ = _;

	constructor(
		public dialogRef: MatDialogRef<ProductDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data) { }

	onNoClick(): void {
		this.dialogRef.close();
	}
}
