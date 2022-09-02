import { LaptopService } from 'src/app/laptop-form/services/laptop.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopFormGuard implements CanActivate {
  constructor(private laptopService: LaptopService) {
  }
  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('savedData')) {
          return true;
      }
      return false;
  }
}
