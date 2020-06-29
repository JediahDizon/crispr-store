import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { lyl, LyTheme2, StyleRenderer, LY_THEME, LY_THEME_NAME, LY_THEME_GLOBAL_VARIABLES, LyHammerGestureConfig } from '@alyle/ui';

// Alyle Components
import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LyIconModule } from '@alyle/ui/icon';
import { LyCardModule } from '@alyle/ui/card';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
import { color } from '@alyle/ui/color';
import { LyCarouselModule } from '@alyle/ui/carousel';

// Material Components
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

// Pages
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/home/products/products.component';
import { ProductDialogComponent } from './pages/home/products/product-dialog/product-dialog.component';

// Alyle Override Styles - Might need to be in a separate file

export class GlobalVariables {
	Crispr = {
		default: `linear-gradient(135deg, #ffb812 0%, #ff9812 100%)`,
		contrast: color(0xffffff),
		shadow: color(0xB36FBC)
	};

	button = {
		root: () => lyl `{
			border-radius: 2em
		}`
	};

	card = {
		root: () => lyl `{
			box-shadow: none !important
		}`
	};
}

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		HomeComponent,
		ProductsComponent,
		ProductDialogComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,

		// UI Modules
		FlexLayoutModule,
		BrowserAnimationsModule,

		// Alyle Modules
		LyCardModule,
		LyButtonModule,
		LyFieldModule,
		LyIconModule,
		HammerModule,
		LyCarouselModule,

		// Material Modules
		MatDialogModule,
		MatCardModule,
		MatExpansionModule
	],
	providers: [
		[ LyTheme2 ],
		[ StyleRenderer ],
		// Theme that will be applied to this module
		{ provide: LY_THEME_NAME, useValue: 'minima-light' },
		{ provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
		{ provide: LY_THEME, useClass: MinimaDark, multi: true }, // name: `minima-dark`
		{ provide: LY_THEME_GLOBAL_VARIABLES, useClass: GlobalVariables },
		// Gestures
		{ provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
