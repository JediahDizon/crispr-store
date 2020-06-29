import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from "./product-dialog/product-dialog.component";
import * as _ from 'lodash';
import { Product } from "src/models/product";
import * as seed from "src/models/seed.json";

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	productList: Array<Product>;

	constructor(public dialog: MatDialog) {
		this.productList = _.map(seed.products, data => new Product().deserialize(data));
	}

	ngOnInit(): void {}

	onSelect(productId): void {
		const dialogRef = this.dialog.open(ProductDialogComponent, {
			width: "100vw",
			maxWidth: "100vw",
			data: _.find(this.productList, { id: productId })
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}

	onCart(productId) {

	}
}
