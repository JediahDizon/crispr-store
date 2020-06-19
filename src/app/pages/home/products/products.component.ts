import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from "./product-dialog/product-dialog.component";
import * as _ from 'lodash';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	productList = [
		{
			id: 1,
			name: "Test 1",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem.",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFB-hhDzVkuzUMqS24hCXwu0_oZ44iL6_Hhyf9PSkj7fkykqu_&usqp=CAU",
			price: {
				msrp: 10000,
				christmas: 8000,
				weekend: 9000,
				type: "christmas"
			}
		},
		{
			id: 2,
			name: "Test 2",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem.",
			image: "https://yourbusinessfoundation.co.uk/wp-content/uploads/2014/05/ybf-light-orange-bg.jpg",
			price: {
				msrp: 10000,
				christmas: 8000,
				weekend: 9000,
				type: "msrp"
			}
		},
		{
			id: 3,
			name: "Test 3",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem.",
			image: "https://thumbs.dreamstime.com/b/light-orange-gradient-background-orange-radial-gradient-effect-wallpaper-light-orange-gradient-background-orange-radial-gradient-154658048.jpg",
			price: {
				msrp: 10000,
				christmas: 8000,
				weekend: 9000,
				type: "msrp"
			}
		},
		{
			id: 4,
			name: "Test 4",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem.",
			image: "https://www.yorksummerfest.com/wp-content/uploads/2019/06/light-orange-background-hd-1.jpg",
			price: {
				msrp: 10000,
				christmas: 8000,
				weekend: 9000,
				type: "msrp"
			}
		},
		{
			id: 4,
			name: "Test 4",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem.",
			image: "https://www.yorksummerfest.com/wp-content/uploads/2019/06/light-orange-background-hd-1.jpg",
			price: {
				msrp: 10000,
				christmas: 8000,
				weekend: 9000,
				type: "msrp"
			}
		},
		{
			id: 4,
			name: "Test 4",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem.",
			image: "https://www.yorksummerfest.com/wp-content/uploads/2019/06/light-orange-background-hd-1.jpg",
			price: {
				msrp: 10000,
				christmas: 8000,
				weekend: 9000,
				type: "msrp"
			}
		},
		{
			id: 4,
			name: "Test 4",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem.",
			image: "https://www.yorksummerfest.com/wp-content/uploads/2019/06/light-orange-background-hd-1.jpg",
			price: {
				msrp: 10000,
				christmas: 8000,
				weekend: 9000,
				type: "msrp"
			}
		},
		{
			id: 4,
			name: "Test 4",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem.",
			image: "https://www.yorksummerfest.com/wp-content/uploads/2019/06/light-orange-background-hd-1.jpg",
			price: {
				msrp: 10000,
				christmas: 8000,
				weekend: 9000,
				type: "msrp"
			}
		},
		{
			id: 4,
			name: "Test 4",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem.",
			image: "https://www.yorksummerfest.com/wp-content/uploads/2019/06/light-orange-background-hd-1.jpg",
			price: {
				msrp: 10000,
				christmas: 8000,
				weekend: 9000,
				type: "msrp"
			}
		},
	];

	constructor(public dialog: MatDialog) {}

	ngOnInit(): void {}

	onSelect(productId): void {
		const dialogRef = this.dialog.open(ProductDialogComponent, {
			data: _.find(this.productList, { id: productId })
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}

	onCart(productId) {

	}
}