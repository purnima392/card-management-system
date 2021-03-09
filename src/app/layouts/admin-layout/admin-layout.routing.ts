import { Routes } from "@angular/router";
import { ListitemComponent } from "src/app/pages/listitem/listitem.component";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { AddCustomerComponent } from "../../pages/customer/add-customer.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { ViewCustomerComponent } from "src/app/pages/customer/view-customer.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "addcustomer", component: AddCustomerComponent },
  { path: "viewcustomer", component: ViewCustomerComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "listitem", component: ListitemComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }
];
