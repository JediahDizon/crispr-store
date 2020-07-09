import { Component, OnInit } from '@angular/core';
import { ThemeVariables, ThemeRef, lyl, StyleRenderer } from '@alyle/ui';
import Product from "src/models/product";
import ProductFeature from "src/models/product-feature";
import * as seed from "src/models/seed.json";
import * as _ from "lodash";

const STYLES = (theme: ThemeVariables, ref: ThemeRef) => {
	const __ = ref.selectorsOf(STYLES);

	/* Alyle Styles OVerrides */
	return {
		$global: lyl `{
			#container {
				background-color: ${theme.background.primary.default}
			}
		}`,
		root: lyl `{
			display: block
		}`
	};
};


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [StyleRenderer]
})
export class HomeComponent implements OnInit {
	readonly classes = this.sRenderer.renderSheet(STYLES, true);
	productList: Array<Product>;
	featureList: Array<ProductFeature>; 

	constructor(readonly sRenderer: StyleRenderer) {
		// Populate state with seed data
		this.productList = _.map(seed.products, data => new Product().deserialize(data));
		this.featureList = _.map(seed.featuredProducts, data => new ProductFeature().deserialize(data));
	}

	ngOnInit(): void {
	}
}