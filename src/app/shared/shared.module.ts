import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatProgressBarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSliderModule,
  MatRadioModule,
  MatAutocompleteModule
} from "@angular/material";
import { GravatarModule } from "ngx-gravatar";
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { MonacoEditorModule } from "@materia-ui/ngx-monaco-editor";
import { ClipboardModule } from "ngx-clipboard";
import { NgxFilesizeModule } from "ngx-filesize";
import { MomentModule } from "ngx-moment";

import { SpinnerBtnComponent } from "./spinner-btn/spinner-btn.component";
import { CopyToClipboardBtnComponent } from "./copy-to-clipboard-btn/copy-to-clipboard-btn.component";

const importedAndExportedModules = [
  FormsModule,
  ReactiveFormsModule,
  GravatarModule,
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatProgressBarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSliderModule,
  MatRadioModule,
  MatAutocompleteModule,
  NgxMatSelectSearchModule,
  MonacoEditorModule,
  ClipboardModule,
  NgxFilesizeModule,
  MomentModule
];

@NgModule({
  declarations: [SpinnerBtnComponent, CopyToClipboardBtnComponent],
  imports: [CommonModule, ...importedAndExportedModules],
  exports: [
    ...importedAndExportedModules,
    SpinnerBtnComponent,
    CopyToClipboardBtnComponent
  ]
})
export class SharedModule {}
