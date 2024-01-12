import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { AuthService } from "../service/auth/auth.service";


@Injectable()

export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private _authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /* throw new Error("Method not implemented."); */
    // removing "" from Token !?
    let token = this._authService.userSubject.value/* .replace(/"/g, '') */
    if (token) {
      req = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        })
      })
    }
    return next.handle(req)
    // TO DO gestion d'erreurs
    /* return next.handle(req).pipe(
      catchError((err => {
        if (err.status === 401) {

        }

        const error = err.message || err.statusText;
        return throwError(err)
      })
      )) */
  }

}