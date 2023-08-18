import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AddApplicationComponent } from './website/add-application/add-application.component';
import { ReviewApplicationComponent } from './website/review-application/review-application.component';
import { LoginComponent } from './website/login/login.component';
import { RegisterComponent } from './website/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPartsComponent } from './website/add-parts/add-parts.component';
import { ReviewPartsComponent } from './website/review-parts/review-parts.component';
import { ReviewApplicationWorkerComponent } from './website/review-application-worker/review-application-worker.component';
import { BrowseEmployeesComponent } from './website/browse-employees/browse-employees.component';
import { BrowseReportComponent } from './website/browse-report/browse-report.component';
import { ManageAccountComponent } from './website/manage-account/manage-account.component';
import { BasketComponent } from './shop/basket/basket.component';
import { ShopComponent } from './shop/shop.component';
import { DeliveryComponent } from './shop/delivery/delivery.component';
import { SummaryComponent } from './shop/summary/summary.component';
import { ElectronicsPartsComponent } from './shop/parts/electronics/electronics.component';
import { EquipmentPartsComponent } from './shop/parts/equipment/equipment.component';
import { LightingPartsComponent } from './shop/parts/lighting/lighting.component';
import { OilsPartsComponent } from './shop/parts/oils/oils.component';
import { TiresPartsComponent } from './shop/parts/tires/tires.component';
import { ToolsPartsComponent } from './shop/parts/tools/tools.component';
import { BrakePadsComponent } from './shop/parts/spare-parts/brake-pads/brake-pads.component';
import { BrakeSystemComponent } from './shop/parts/spare-parts/brake-system/brake-system.component';
import { DriveSystemComponent } from './shop/parts/spare-parts/drive-system/drive-system.component';
import { EnginePartsComponent } from './shop/parts/spare-parts/engine-parts/engine-parts.component';
import { SparePartsComponent } from './shop/parts/spare-parts/spare-parts.component';
import { BodyPartsComponent } from './shop/parts/body-parts/body-parts.component';
import { PaymentBlikComponent } from './shop/payment-blik/payment-blik.component';
import { PaymentTransferComponent } from './shop/payment-transfer/payment-transfer.component';
import { FinishOrderComponent } from './shop/finish-order/finish-order.component';
import { ReviewOrdersComponent } from './website/review-orders/review-orders.component';
import { OrderHistoryComponent } from './shop/order-history/order-history.component';

@NgModule({
  declarations: [
    AppComponent,
    AddApplicationComponent,
    ReviewApplicationComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    AddPartsComponent,
    ReviewPartsComponent,
    ReviewApplicationWorkerComponent,
    ReviewOrdersComponent,
    BrowseEmployeesComponent,
    BrowseReportComponent,
    ManageAccountComponent,
    BodyPartsComponent,
    ElectronicsPartsComponent,
    EquipmentPartsComponent,
    LightingPartsComponent,
    OilsPartsComponent,
    SparePartsComponent,
/////////////////////////
    BrakePadsComponent,
/////////////////////////
    BrakeSystemComponent,
    DriveSystemComponent,
/////////////////////////
    EnginePartsComponent,
/////////////////////////
    TiresPartsComponent,
    ToolsPartsComponent,
    BasketComponent,
    ShopComponent,
    SummaryComponent,
    DeliveryComponent,
    PaymentBlikComponent,
    PaymentTransferComponent,
    FinishOrderComponent,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
