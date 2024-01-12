import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

    constructor (
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       /*  throw new Error("Method not implemented."); */
        // verification if user connected
        let token = localStorage.getItem('UserToken')
        if (token) {
            return true; // authorised
        }
        this.router.navigate(['login']/* , {queryParams: {returnUrl: state.url}} */)
        return false;
    }
    
}

