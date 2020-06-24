import { Component, OnInit } from '@angular/core';
import { ThemeVariables, ThemeRef, lyl, StyleRenderer } from '@alyle/ui';

const STYLES = (theme: ThemeVariables, ref: ThemeRef) => {
	const __ = ref.selectorsOf(STYLES);

	/* Alyle Styles OVerrides */
	return {
		$global: lyl `{
			#container {
				background-color: ${theme.background.primary.default}
			}
			.indicatorIcon-k {
				box-shadow: none
			}
			.actions-c {
				border-radius: 2em
				background: none
				color: ${theme.background.primary.default}
			}
			.bar-n {
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
	productList = [
		{
			id: 1,
			name: "Test 1",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image: "https://thumbs.dreamstime.com/b/light-orange-gradient-background-orange-radial-gradient-effect-wallpaper-light-orange-gradient-background-orange-radial-gradient-154658048.jpg",
			price: {
				msrp: 10000,
				christmas: 8000,
				weekend: 9000,
				type: "msrp"
			}
		}
	];

	constructor(readonly sRenderer: StyleRenderer) { }

	ngOnInit(): void {
	}
}
