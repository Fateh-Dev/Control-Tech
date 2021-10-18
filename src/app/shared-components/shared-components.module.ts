import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-module';
import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedComponentsRoutingModule,
  ],
  exports: [MaterialModule, FlexLayoutModule],
})
export class SharedComponentsModule {}
