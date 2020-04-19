import { NgModule } from '@angular/core';
// import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
// import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// CDK
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';

// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
// import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
// import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatTreeModule } from '@angular/material/tree';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

const MATERIAL_MODULE = [
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    // MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSelectModule,
    // MatToolbarModule,
    MatSnackBarModule,
    // MatAutocompleteModule,
    // MatFormFieldModule,
    // MatSliderModule,
    // MatBottomSheetModule,
    // MatButtonToggleModule,
    // MatDividerModule,
    // MatDatepickerModule,
    MatSidenavModule,
    // MatStepperModule,
    // MatSnackBarModule,
    // MatSlideToggleModule,
    // MatTabsModule,
    // MatTreeModule,
    MatTableModule,
    MatTooltipModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    MatSortModule,
    // MatNativeDateModule,
    // MatPaginatorModule,
    DragDropModule,
    LayoutModule
];

@NgModule({
    imports: [...MATERIAL_MODULE],

    exports: [...MATERIAL_MODULE]
})
export class OwnMaterialModule {
    // !TODO
    // 优化，在各个特性模块当中按需引入,而不是整个引入
}
