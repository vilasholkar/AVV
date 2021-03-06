import { NgModule } from "@angular/core";
// import { MatTabsModule } from "@angular/material/tabs";
//import {MatDialogModule} from '@angular/material/dialog';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatRadioModule,
  MatInputModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatSidenavModule,
  MatExpansionModule

} from '@angular/material';

const Modules = [
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatRadioModule,
  MatInputModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatSidenavModule,
  MatExpansionModule
];

@NgModule({
  imports: [
    Modules

  ],
  exports: [
    Modules

  ],
})
export class CustomMaterialModule { }