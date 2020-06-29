import { Component, OnInit } from '@angular/core';
import { ThemeVariables, ThemeRef, lyl, StyleRenderer } from '@alyle/ui';
import { Product } from "src/models/product";
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
			.indicatorIcon-l {
				box-shadow: none
			}
			.actions-d {
				border-radius: 2em
				background: none
				color: ${theme.background.primary.default}
			}
			.bar-o {
				background: ${theme.background.primary.default}
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

	constructor(readonly sRenderer: StyleRenderer) {
		this.productList = _.map(seed.products, data => new Product().deserialize(data));
	}

	ngOnInit(): void {
	}
}