import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { AddCustomerComponent} from "../../pages/customer/add-customer.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbDatepickerModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ListitemComponent } from "src/app/pages/listitem/listitem.component";
import { ViewCustomerComponent } from "src/app/pages/customer/view-customer.component";
import { AgGridModule } from 'ag-grid-angular';
import { AddNewproductComponent } from "src/app/pages/newproduct/add-newproduct.component";
import { ViewProductComponent } from "src/app/pages/newproduct/view-product.component";
import { NgbdDatepickerRange } from "src/app/components/datepicker/datepicker";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbdDatepickerRange,
    NgbDatepickerModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    DashboardComponent,
    ListitemComponent,
    TablesComponent,
    AddCustomerComponent,
    ViewCustomerComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    AddNewproductComponent,
    ViewProductComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
