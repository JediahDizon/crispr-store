import { Component } from '@angular/core';
import { ThemeVariables, ThemeRef, lyl, StyleRenderer } from '@alyle/ui';

const STYLES = (theme: ThemeVariables, ref: ThemeRef) => {
	const __ = ref.selectorsOf(STYLES);
	return {
		$global: lyl `{
			body {
				background-color: ${theme.background.default}
				color: ${theme.text.default}
				font-family: ${theme.typography.fontFamily}
				direction: ${theme.direction}
			}
		}`,
		root: lyl `{
			display: block
		}`
	};
};

@Component({
	selector: 'body',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [StyleRenderer]
})
export class AppComponent {
	readonly classes = this.sRenderer.renderSheet(STYLES, true);
	title = 'crispr-store';
	constructor(readonly sRenderer: StyleRenderer) { }
}
