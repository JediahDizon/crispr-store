import { Component, OnInit } from '@angular/core';
import { ThemeVariables, ThemeRef, lyl, StyleRenderer } from '@alyle/ui';

const STYLES = (theme: ThemeVariables, ref: ThemeRef) => {
	const __ = ref.selectorsOf(STYLES);
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
	constructor(readonly sRenderer: StyleRenderer) { }

	ngOnInit(): void {
	}
}
