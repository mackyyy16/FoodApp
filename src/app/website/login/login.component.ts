import { Component } from '@angular/core';
import { UserService } from '../../website/shared/http-services/userService';
import { IUser } from '../../website/shared/models/user';
import { MenuBarService } from '../../website/shared/MenuBarService';
import { Router } from '@angular/router';
import { SharedParameters } from 'src/app/shop/shared/shared-parameters';
import { of } from 'rxjs';

@Component({
   templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public nick: string = "";
  public password: string = "";
  public users: IUser[]=[];
  public showmessage: boolean=false;
  public errormessage: string="";
  public message: string = "";


  login()
  {
    let isLogged = false;

    for (let index = 0; index < this.users.length; index++) {
      let user = this.users[index];

      if (user.login === this.nick && user.password === this.password){
        this.menuBarService.loggedUser = user;

        if(user.role === 'admin'){
          this.menuBarService.showAdminComponent();
        }else if (user.role === 'worker'){
          this.menuBarService.showWorkerComponent();
        }else{
          this.menuBarService.isLogged = of(true);
        }

        SharedParameters.userInfo = {
          id_user: user.id_user,
          firstname: user.name,
          lastname: user.surname,
          street: user.street,
          postcode: user.postcode,
          city: user.city,
          email: user.email,
          phone: user.phonenumber.toString()
        };

        //navigate to home
        this.router.navigate(['/home']);
        isLogged = true;
        break;
      }else{        
        this.message = "Nie ma takiego użytkownika";    
      }
    }

    if(!isLogged){
      this.menuBarService.hideAdminComponent();
      this.menuBarService.hideWorkerComponent();
    }

    this.showmessage = true
  }

  ngOnInit():void{
  }

  constructor(private userService: UserService,
              private menuBarService: MenuBarService,
              private router: Router){                
    this.userService.getUser().then(data => {
      this.users = data;
    });
  }
}