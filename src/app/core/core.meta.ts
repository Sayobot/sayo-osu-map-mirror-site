import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { OwnMaterialModule } from './module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const MODULES = [
    BrowserModule,
    CommonModule,
    OwnMaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
];

export { COMPONENTS, DIALOGS } from './components';
