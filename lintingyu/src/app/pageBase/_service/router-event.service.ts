import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterEventService {


  constructor(
    private router: Router
  ) { }

  linkClick(path: string, page?: string) {
    window.scroll(0,0);
    if (page) {
      this.router.navigate(
        [path],
        { queryParams: {
            page
          }
        }
      );
    }
    else{
      this.router.navigate([path]);
    }
  }
}
