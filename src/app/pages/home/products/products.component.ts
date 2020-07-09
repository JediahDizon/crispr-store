import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { StyleRenderer, lyl } from '@alyle/ui';
import { ProductDialogComponent } from "./product-dialog/product-dialog.component";
import * as _ from 'lodash';
import Product from "src/models/product";
import * as seed from "src/models/seed.json";

const STYLES = () => ({
	root: lyl `{
	  box-shadow: none
	}`
  });

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	readonly classes = this.sRenderer.renderSheet(STYLES);
	productList: Array<Product>;

	constructor(public dialog: MatDialog, readonly sRenderer: StyleRenderer) {
		this.productList = _.map(seed.products, data => new Product().deserialize(data));
	}

	ngOnInit(): void {}

	onSelect(productId): void {
		const dialogRef = this.dialog.open(ProductDialogComponent, {
			maxWidth: "100vw",
			data: _.find(this.productList, { id: productId }),
			scrollStrategy: new NoopScrollStrategy(),
			autoFocus: false
		});

		dialogRef.afterClosed().subscribe(result => {
		});
	}

	onCart(productId) {

	}
}
