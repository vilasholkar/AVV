// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// OnlineTest Component
import { TestTypeComponent } from './test-type/test-type.component';
import { TestSeriesComponent } from './test-series/test-series.component';

import {TestTypeService} from '../../services/admin/test-type.service';
import { CustomMaterialModule } from "../../custommaterial.module";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxSpinnerModule } from 'ngx-spinner';
// Components Routing
import { MasterRoutingModule } from './master-routing.module';
import { TopicComponent } from './topic/topic.component';
import { SubTopicComponent } from './sub-topic/sub-topic.component';

@NgModule({
    imports: [
      NgxSpinnerModule,
      CommonModule,
      FormsModule,
      MasterRoutingModule,
      CustomMaterialModule,
      PerfectScrollbarModule
    ],
    declarations: [
      TestTypeComponent,
      TestSeriesComponent,
      TopicComponent,
      SubTopicComponent
    ],
    providers: [TestTypeService]
  })
  export class MasterModule { }
