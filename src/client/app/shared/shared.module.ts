import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownModule, TooltipModule  } from 'ng2-bootstrap';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CorsSiteService } from './cors-site/index';
import { SiteLogService } from './site-log/index';
import { JsonixService } from './jsonix/index';
import { WFSService } from './wfs/index';
import { MiscUtils, DialogService  } from './global/index';
import { ConstantsService, HttpUtilsService } from './global/index';
import { JsonViewModelService } from './json-data-view-model/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DropdownModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    ToolbarComponent,
    NavbarComponent
  ],
  exports: [
    ToolbarComponent,
    NavbarComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MiscUtils, JsonixService, SiteLogService,
                  CorsSiteService, WFSService, ConstantsService, HttpUtilsService, JsonViewModelService]
    };
  }
}
