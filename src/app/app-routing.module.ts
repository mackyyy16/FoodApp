import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { GalleryComponent } from './website/gallery/gallery.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './website/contact/contact.component';
import { BasketComponent } from './shop/basket/basket.component';
import { LoginComponent } from './website/login/login.component';
import { RegisterComponent } from './website/register/register.component';
import { ManageAccountComponent } from './website/manage-account/manage-account.component';
import { SparePartsComponent } from './shop/parts/spare-parts/spare-parts.component';
import { ElectronicsPartsComponent } from './shop/parts/electronics/electronics.component';
import { LightingPartsComponent } from './shop/parts/lighting/lighting.component';
import { OilsPartsComponent } from './shop/parts/oils/oils.component';
import { TiresPartsComponent } from './shop/parts/tires/tires.component';
import { ToolsPartsComponent } from './shop/parts/tools/tools.component';
import { EquipmentPartsComponent } from './shop/parts/equipment/equipment.component';
import { BrakePadsComponent } from './shop/parts/spare-parts/brake-pads/brake-pads.component';
import { BrakeSystemComponent } from './shop/parts/spare-parts/brake-system/brake-system.component';
import { DriveSystemComponent } from './shop/parts/spare-parts/drive-system/drive-system.component';
import { EnginePartsComponent } from './shop/parts/spare-parts/engine-parts/engine-parts.component';
import { DeliveryComponent } from './shop/delivery/delivery.component';
import { BodyPartsComponent } from './shop/parts/body-parts/body-parts.component';
import { SummaryComponent } from './shop/summary/summary.component';
import { PaymentBlikComponent } from './shop/payment-blik/payment-blik.component';
import { PaymentTransferComponent } from './shop/payment-transfer/payment-transfer.component';
import { PaymentTransfer24Component } from './shop/payment-transfer-24/payment-transfer-24.component';
import { FinishOrderComponent } from './shop/finish-order/finish-order.component';
import { OrderHistoryComponent } from './shop/order-history/order-history.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'shop', component: ShopComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'basket', component: BasketComponent},
  { path: 'delivery', component: DeliveryComponent},
  { path: 'summary', component: SummaryComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'manage-account', component: ManageAccountComponent },
  { path: 'orders-history', component: OrderHistoryComponent },
  { path: 'blik-payment', component: PaymentBlikComponent},
  { path: 'transfer-payment', component: PaymentTransferComponent},
  { path: 'transfer-payment24', component: PaymentTransfer24Component},
  { path: 'finish-payment', component: FinishOrderComponent},
  { path: 'shop/body-parts', component: BodyPartsComponent},
  { path: 'shop/electronics', component: ElectronicsPartsComponent},
  { path: 'shop/equipment', component: EquipmentPartsComponent},
  { path: 'shop/lighting', component: LightingPartsComponent},
  { path: 'shop/oils', component: OilsPartsComponent},
  { path: 'shop/spare-parts', component: SparePartsComponent},
  { path: 'shop/spare-parts/brake-pads', component: BrakePadsComponent},
  { path: 'shop/spare-parts/brake-system', component: BrakeSystemComponent},
  { path: 'shop/spare-parts/drive-system', component: DriveSystemComponent},
  { path: 'shop/spare-parts/engine-parts', component: EnginePartsComponent},
  { path: 'shop/tires', component: TiresPartsComponent},
  { path: 'shop/tools', component: ToolsPartsComponent},
  // { path: '', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
