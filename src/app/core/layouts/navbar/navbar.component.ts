import { Component, effect } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from "../../../shared/components/auth-dialogs/login/login.component";
import { LogedUserService } from './../../services/logedUser/loged-user.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from '../../../store/cart/cart.models';
import * as CartActions from '../../../store/cart/cart.actions';
import * as CartSelectors from '../../../store/cart/cart.selectors';
import { AsyncPipe, NgIf } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, LoginComponent , NgIf ,AsyncPipe , RouterLinkActive],
templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLogin!:boolean;
  cartNumber$!: Observable<Cart | null>;
  
constructor(private router:Router,private  _logedUserService:LogedUserService,private store: Store){

  effect(()=>{
    if(_logedUserService.userData() !==null){
      this.isLogin = true
    }else{
        this.isLogin = false;
    }
  })
}

ngOnInit() {
  this.store.dispatch(CartActions.loadCart());

  this.cartNumber$ = this.store.select(CartSelectors.selectCart);
}



logout(){
    this._logedUserService.logout()
}
}
