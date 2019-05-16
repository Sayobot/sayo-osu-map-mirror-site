import { OwnMaterialModule } from './own-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

export const MODULES = [
    CommonModule,
    OwnMaterialModule,
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
];


