import { Component } from '@angular/core';
import { MenuBarService } from './website/shared/MenuBarService';
import { Router } from '@angular/router';
import { SharedParameters } from './shop/shared/shared-parameters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SwiftServe';
  showEmptyBasketDialog: boolean = false;

  constructor(public menuBarService: MenuBarService,
              private router: Router){ }

  logOff(){
    this.menuBarService.hideAdminComponent();
    this.menuBarService.hideWorkerComponent();

    //navigate to home
    this.router.navigate(['/home']);
  }

  goToBasket(){
    if(SharedParameters.storeItems.length !== 0){
      this.router.navigate(['/basket']);
    }else{
      this.showEmptyBasketDialog = true;
    }
  }

  closeEmptyDialogWindow(){
    this.showEmptyBasketDialog = false;
  }
}
