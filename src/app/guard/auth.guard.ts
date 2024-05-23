import { Injectable, inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, GuardResult, MaybeAsync, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService) as AuthService;
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    alert("Authentication failed, please log in first");
    router.navigate(['']);
    return false;
  }
};