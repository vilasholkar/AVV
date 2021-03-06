import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from "../../custommaterial.module";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { StudentModule } from "../student/student.module";
import { NgxSpinnerModule } from 'ngx-spinner';

import { ResultRoutingModule } from './result-routing.module';
import { ResultAnalysisComponent } from './result-analysis/result-analysis.component';
import { TestResultComponent } from './test-result/test-result.component';
import { ResultComponent } from './result/result.component';
import { GenerateResultComponent } from './generate-result/generate-result.component';
import { StudentResponseComponent } from './student-response/student-response.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ResultRoutingModule,
      CustomMaterialModule,
      PerfectScrollbarModule,
      ChartsModule,
      StudentModule,
      NgxSpinnerModule
    ],
    declarations: [
       ResultAnalysisComponent,
       TestResultComponent,
       ResultComponent,
       GenerateResultComponent,
       StudentResponseComponent
    ],
    providers: [HttpClientModule]
  })
  export class ResultModule { }
